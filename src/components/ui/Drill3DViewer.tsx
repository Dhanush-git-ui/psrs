import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Html, ContactShadows, Line } from '@react-three/drei';
import { useRef, useMemo, useState, Suspense } from 'react';
import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  TEXTURE FACTORIES                                                   */
/* ------------------------------------------------------------------ */

function useCastBronzeTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    // Neutral mid-light base — this TINTS the material's bronze color
    // (three.js multiplies color * map), it does not replace it.
    ctx.fillStyle = '#b7ada0';
    ctx.fillRect(0, 0, 256, 256);

    for (let i = 0; i < 3400; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const r = Math.random() * 1.6 + 0.3;
      const shade = 160 + Math.random() * 50 - 25;
      ctx.fillStyle = `rgba(${shade},${shade - 6},${shade - 14},0.8)`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 0.07;
    for (let i = 0; i < 40; i++) {
      ctx.strokeStyle = '#3a2f22';
      ctx.lineWidth = Math.random() * 1.5;
      ctx.beginPath();
      const y = Math.random() * 256;
      ctx.moveTo(0, y);
      ctx.lineTo(256, y + (Math.random() - 0.5) * 20);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    for (let i = 0; i < 26; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const r = Math.random() * 10 + 4;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, 'rgba(90,55,30,0.35)');
      grad.addColorStop(1, 'rgba(90,55,30,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }, []);
}

function useEngravedTexture(text: string, opts?: { sub?: string }) {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createLinearGradient(0, 0, 0, 160);
    grad.addColorStop(0, '#1c1d1f');
    grad.addColorStop(1, '#101112');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 160);

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 492, 140);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#e6e8eb';
    ctx.font = '700 62px "Arial Narrow", sans-serif';
    ctx.fillText(text, 256, opts?.sub ? 78 : 96);

    if (opts?.sub) {
      ctx.font = '500 26px "Arial Narrow", sans-serif';
      ctx.fillStyle = '#9aa0a6';
      ctx.fillText(opts.sub, 256, 128);
    }

    return new THREE.CanvasTexture(canvas);
  }, [text, opts?.sub]);
}

/* ------------------------------------------------------------------ */
/*  EXHAUST MIST PARTICLES                                              */
/* ------------------------------------------------------------------ */

function AirMistParticles({ count = 70, origin = [0.85, 0.35, 0] as [number, number, number] }) {
  const pointsRef = useRef<THREE.Points | null>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = origin[0] + (Math.random() - 0.5) * 0.12;
      arr[i * 3 + 1] = origin[1] + Math.random() * 1.2;
      arr[i * 3 + 2] = origin[2] + (Math.random() - 0.5) * 0.12;
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      pos[idx] += 0.01 * Math.sin(time * 1.3 + i);
      pos[idx + 1] += 0.035 * (1 + Math.cos(time * 0.8 + i) * 0.4);
      pos[idx + 2] += 0.01 * Math.cos(time * 1.1 + i * 2);

      if (pos[idx + 1] > origin[1] + 1.9) {
        pos[idx] = origin[0] + (Math.random() - 0.5) * 0.12;
        pos[idx + 1] = origin[1];
        pos[idx + 2] = origin[2] + (Math.random() - 0.5) * 0.12;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#eaf3ff"
        size={0.05}
        transparent
        opacity={0.22}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/*  LABEL / CALLOUT SYSTEM — fanned layout, real 3D leader lines        */
/* ------------------------------------------------------------------ */

type Vec3 = [number, number, number];
type LabelDef = { anchor: Vec3; label: Vec3; text: string; sub: string; align: 'left' | 'right' };

const PART_LABELS: LabelDef[] = [
  { anchor: [-2.15, 0.16, 0], label: [-2.85, 1.5, 0], text: 'Drive Shaft', sub: 'API pin-thread output', align: 'left' },
  { anchor: [-1.3, 0.52, 0], label: [-1.95, -1.4, 0], text: 'Bearing Housing', sub: 'Stepped taper collars', align: 'left' },
  { anchor: [-0.95, 0.64, 0], label: [-0.95, 1.7, 0], text: 'Coupling Flange', sub: '10-bolt drive coupling', align: 'left' },
  { anchor: [-0.1, 0.68, 0], label: [-0.1, 1.95, 0], text: 'Main Gearbox', sub: 'Cast bronze rotor housing', align: 'left' },
  { anchor: [0.85, 0.55, 0], label: [1.4, 1.55, 0], text: 'Valve Chest', sub: 'Canted air-distribution head', align: 'right' },
  { anchor: [1.15, 0.35, 0], label: [1.9, -1.15, 0], text: 'Inlet Fitting', sub: 'Pressurized air supply', align: 'right' },
  { anchor: [-0.75, -0.68, 0], label: [-0.75, -1.85, 0], text: 'Mounting Base', sub: 'Flat plate + gussets', align: 'left' },
];

function PartLabel({ anchor, label, text, sub, align, visible }: LabelDef & { visible: boolean }) {
  if (!visible) return null;
  return (
    <>
      <Line points={[anchor, label]} color="#c8102e" lineWidth={1} transparent opacity={0.55} />
      <mesh position={anchor}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color="#c8102e" />
      </mesh>
      <Html position={label} center distanceFactor={9} style={{ pointerEvents: 'none' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: align === 'right' ? 'flex-end' : 'flex-start',
            fontFamily: '"Segoe UI", sans-serif',
            whiteSpace: 'nowrap',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            style={{
              background: 'rgba(12,13,15,0.92)',
              border: '1px solid rgba(200,16,46,0.5)',
              borderRadius: '3px',
              padding: '3px 8px',
              color: '#f2f3f5',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              lineHeight: 1.3,
            }}
          >
            {text}
          </div>
          <div style={{ marginTop: '2px', fontSize: '8.5px', color: '#e0788a', fontWeight: 500, lineHeight: 1.2 }}>
            {sub}
          </div>
        </div>
      </Html>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN MOTOR MODEL — proportions matched to the reference photo       */
/* ------------------------------------------------------------------ */

function AirtechMotorModel({ showLabels }: { showLabels: boolean }) {
  const rotorRef = useRef<THREE.Group | null>(null);

  const bronzeGrain = useCastBronzeTexture();
  const serialTex = useEngravedTexture('D713AV8', { sub: 'MADE IN INDIA' });
  const brandTex = useEngravedTexture('AIRTECH', { sub: 'PNEUMATIC MOTOR' });

  useFrame((state) => {
    if (rotorRef.current) rotorRef.current.rotation.x = state.clock.getElapsedTime() * 3.2;
  });

  /* ---- materials — warm weathered bronze casting, matched to the real unit ---- */
  const bronzeMat = (
    <meshStandardMaterial color="#8a7256" metalness={0.68} roughness={0.52} map={bronzeGrain} bumpMap={bronzeGrain} bumpScale={0.007} />
  );
  const bronzeBodyMat = (
    <meshStandardMaterial color="#93795a" metalness={0.7} roughness={0.46} map={bronzeGrain} bumpMap={bronzeGrain} bumpScale={0.006} />
  );
  const machinedSteelMat = <meshStandardMaterial color="#c7c2b8" metalness={0.85} roughness={0.3} />;
  const darkRotorMat = <meshStandardMaterial color="#3d3327" metalness={0.72} roughness={0.42} />;
  const zincBoltMat = <meshStandardMaterial color="#e9e4d8" metalness={0.9} roughness={0.2} />;
  const brassFittingMat = <meshStandardMaterial color="#b9924f" metalness={0.9} roughness={0.32} />;
  const redGasketMat = <meshStandardMaterial color="#8f1f1f" roughness={0.55} metalness={0.05} />;
  const rubberSealMat = <meshStandardMaterial color="#1a1512" roughness={0.9} metalness={0} />;

  /* ---- reusable hardware: washer + hex nut + stud, ringed around the X-axis ---- */
  const renderHexBoltsCircle = (x: number, radius: number, count: number, size = 0.045) => {
    const bolts = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const y = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      bolts.push(
        <group key={i} position={[x, y, z]} rotation={[0, 0, angle]}>
          <mesh position={[0, 0, -0.014]}>
            <cylinderGeometry args={[size * 1.3, size * 1.3, 0.015, 20]} />
            {machinedSteelMat}
          </mesh>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[size, size, 0.048, 6]} />
            {zincBoltMat}
          </mesh>
          <mesh position={[0, 0, 0.032]} castShadow>
            <cylinderGeometry args={[size * 0.7, size * 0.7, 0.036, 12]} />
            {machinedSteelMat}
          </mesh>
        </group>
      );
    }
    return bolts;
  };

  return (
    <group position={[0, 0.15, 0]}>
      {/* ============ 1. DRIVE SHAFT — rotates: nose taper, output pin thread ============ */}
      <group ref={rotorRef}>
        {/* Rotor core, just inboard of the housing */}
        <mesh position={[-1.72, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.24, 0.3, 0.18, 36]} />
          {darkRotorMat}
        </mesh>

        {/* Tapered nose transitioning into the shaft */}
        <mesh position={[-1.9, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.16, 0.24, 0.2, 36]} />
          {machinedSteelMat}
        </mesh>

        {/* Plain shaft section */}
        <mesh position={[-2.06, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.14, 32]} />
          {machinedSteelMat}
        </mesh>

        {/* API pin thread — helical ridge rings, visibly threaded like the photo */}
        {[-2.16, -2.21, -2.26, -2.31, -2.36, -2.41, -2.46].map((xVal, idx) => (
          <mesh key={idx} position={[xVal, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.135, 0.135, 0.018, 32]} />
            {machinedSteelMat}
          </mesh>
        ))}
        <mesh position={[-2.32, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.36, 32]} />
          {machinedSteelMat}
        </mesh>
      </group>

      {/* ============ 2. BEARING HOUSING — stepped taper stack, STATIC (does not spin) ============ */}
      <mesh position={[-1.62, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.16, 36]} />
        {bronzeMat}
      </mesh>
      <mesh position={[-1.44, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.18, 36]} />
        {bronzeMat}
      </mesh>
      {renderHexBoltsCircle(-1.44, 0.34, 6, 0.035)}

      <mesh position={[-1.24, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.18, 36]} />
        {bronzeMat}
      </mesh>
      {renderHexBoltsCircle(-1.24, 0.4, 6, 0.038)}

      {/* rubber shaft seal ring where it meets the rotating nose */}
      <mesh position={[-1.78, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.22, 0.018, 12, 32]} />
        {rubberSealMat}
      </mesh>

      {/* grease nipple on the housing */}
      <group position={[-1.44, 0.46, 0]}>
        <mesh>
          <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
          {brassFittingMat}
        </mesh>
        <mesh position={[0, 0.04, 0]}>
          <sphereGeometry args={[0.016, 10, 10]} />
          {brassFittingMat}
        </mesh>
      </group>

      {/* ============ 3. MAIN COUPLING FLANGE — the big 10-bolt ring ============ */}
      <mesh position={[-0.98, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.62, 0.62, 0.014, 40]} />
        {redGasketMat}
      </mesh>
      <mesh position={[-0.92, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.66, 0.66, 0.13, 40]} />
        {machinedSteelMat}
      </mesh>
      {renderHexBoltsCircle(-0.92, 0.56, 10)}

      {/* ============ 4. MAIN GEARBOX BODY — single smooth bronze cylinder ============ */}
      <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.7, 1.5, 44]} />
        {bronzeBodyMat}
      </mesh>

      {/* mold parting seam lines, subtle */}
      <mesh position={[-0.1, 0.705, 0]} castShadow>
        <boxGeometry args={[1.5, 0.016, 0.01]} />
        <meshStandardMaterial color="#5f4f3a" metalness={0.5} roughness={0.7} />
      </mesh>
      <mesh position={[-0.1, -0.705, 0]} castShadow>
        <boxGeometry args={[1.5, 0.016, 0.01]} />
        <meshStandardMaterial color="#5f4f3a" metalness={0.5} roughness={0.7} />
      </mesh>

      {/* engraved serial plate recessed into the body */}
      <mesh position={[-0.15, 0, 0.702]}>
        <boxGeometry args={[0.56, 0.17, 0.01]} />
        <meshStandardMaterial color="#101112" roughness={0.6} metalness={0.4} />
      </mesh>
      <mesh position={[-0.15, 0, 0.708]}>
        <planeGeometry args={[0.5, 0.14]} />
        <meshStandardMaterial map={serialTex} roughness={0.5} metalness={0.35} />
      </mesh>

      {/* ============ 5. MOUNTING BASE — flat plate under flange + body junction ============ */}
      <group position={[-0.75, -0.98, 0]}>
        <mesh position={[0, 0.06, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.15, 0.12, 1.0]} />
          {bronzeMat}
        </mesh>
        <mesh position={[0, 0.32, 0.35]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.4, 0.1]} />
          {bronzeMat}
        </mesh>
        <mesh position={[0, 0.32, -0.35]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.4, 0.1]} />
          {bronzeMat}
        </mesh>
        {[-0.4, 0.4].map((xOffset) =>
          [-0.38, 0.38].map((zOffset) => (
            <group key={`${xOffset}-${zOffset}`} position={[xOffset, 0.1, zOffset]}>
              <mesh>
                <cylinderGeometry args={[0.06, 0.06, 0.045, 6]} />
                {zincBoltMat}
              </mesh>
              <mesh position={[0, 0.03, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 0.045, 12]} />
                {machinedSteelMat}
              </mesh>
            </group>
          ))
        )}
      </group>

      {/* ============ 6. VALVE CHEST — canted block, mounted at an angle off the main axis ============ */}
      <group position={[0.62, 0.18, 0]} rotation={[0, 0, -0.62]}>
        {/* mounting flange face, square bolt pattern */}
        <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.1, 6]} />
          {bronzeMat}
        </mesh>
        {[-0.22, 0.22].map((y) =>
          [-0.22, 0.22].map((z) => (
            <group key={`${y}-${z}`} position={[-0.06, y, z]}>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.032, 0.032, 0.04, 6]} />
                {zincBoltMat}
              </mesh>
            </group>
          ))
        )}

        {/* main hex-ish block body */}
        <mesh position={[0.4, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.72, 0.72, 0.62]} />
          {bronzeBodyMat}
        </mesh>

        {/* embossed brand plate on the block face */}
        <mesh position={[0.4, 0.0, 0.318]}>
          <boxGeometry args={[0.4, 0.16, 0.008]} />
          <meshStandardMaterial color="#101112" roughness={0.6} metalness={0.4} />
        </mesh>
        <mesh position={[0.4, 0.0, 0.325]}>
          <planeGeometry args={[0.36, 0.13]} />
          <meshStandardMaterial map={brandTex} roughness={0.5} metalness={0.35} />
        </mesh>

        {/* top cap with its own small bolt ring */}
        <mesh position={[0.4, 0.4, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.12, 8]} />
          {bronzeMat}
        </mesh>

        {/* exhaust vent slits */}
        {[-0.1, 0, 0.1].map((z, i) => (
          <mesh key={i} position={[0.4, 0.47, z]}>
            <cylinderGeometry args={[0.015, 0.015, 0.05, 10]} />
            <meshStandardMaterial color="#0d0e0f" roughness={0.9} />
          </mesh>
        ))}

        {/* side-mounted inlet fitting protruding out toward the viewer */}
        <group position={[0.72, -0.05, 0.05]} rotation={[0, 0.3, 0.15]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.16, 0.2, 0.22, 28]} />
            {bronzeMat}
          </mesh>
          <mesh position={[0.16, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.16, 20]} />
            {brassFittingMat}
          </mesh>
          <mesh position={[0.26, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.09, 0.09, 0.12, 6]} />
            {brassFittingMat}
          </mesh>
          {[0, 0.025, 0.05].map((x, i) => (
            <mesh key={i} position={[0.14 + x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.1, 0.007, 8, 24]} />
              {brassFittingMat}
            </mesh>
          ))}
        </group>
      </group>

      {/* ---- part callouts ---- */}
      {PART_LABELS.map((l) => (
        <PartLabel key={l.text} {...l} visible={showLabels} />
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  VIEWER SHELL                                                        */
/* ------------------------------------------------------------------ */

export default function Drill3DViewer() {
  const [showLabels, setShowLabels] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);

  return (
    <div className="w-full h-full relative aspect-square md:aspect-auto bg-[#0b0c0d]">
      <div className="absolute inset-0 bg-radial from-brand-red/8 to-transparent pointer-events-none rounded-full blur-3xl" />

      <Canvas shadows gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[4.2, 2.0, 4.2]} fov={36} />
        <fog attach="fog" args={['#0b0c0d', 7, 15]} />

        <ambientLight intensity={0.55} />
        <directionalLight position={[10, 15, 6]} intensity={2.6} castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
        <directionalLight position={[-10, -5, -10]} intensity={0.5} color="#dbe6ff" />
        <directionalLight position={[-12, 12, -8]} intensity={1.8} color="#ffffff" />
        <spotLight position={[0, 4, 3]} angle={0.5} penumbra={0.6} intensity={0.8} color="#ffe9d6" />
        <pointLight position={[0, -2.2, 0.5]} intensity={1.6} color="#c8102e" />

        <Suspense fallback={null}>
          <group position={[0.1, 0.25, 0]} rotation={[0.02, 0.5, 0]} scale={0.75}>
            <AirtechMotorModel showLabels={showLabels} />
            <AirMistParticles count={60} origin={[0.9, 0.6, 0]} />
          </group>

          <ContactShadows position={[0, -0.55, 0]} opacity={0.6} scale={10} blur={2.2} far={2} />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom
          autoRotate={autoRotate}
          autoRotateSpeed={1.4}
          minDistance={2.0}
          maxDistance={9}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.55}
        />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button
          onClick={() => setShowLabels((s) => !s)}
          className="px-3 py-1.5 rounded-full border border-brand-bordergray/60 bg-white/90 backdrop-blur-md shadow-sm text-[10px] font-heading tracking-wider uppercase text-brand-graphite font-semibold hover:bg-white transition-colors"
        >
          {showLabels ? 'Hide Parts' : 'Show Parts'}
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-bordergray/60 bg-white/80 backdrop-blur-md shadow-sm pointer-events-none select-none">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="font-heading text-[10px] tracking-wider uppercase text-brand-graphite font-semibold">Drag to Rotate 360°</span>
        </div>
        <button
          onClick={() => setAutoRotate((a) => !a)}
          className="px-3 py-1.5 rounded-full border border-brand-bordergray/60 bg-white/90 backdrop-blur-md shadow-sm text-[10px] font-heading tracking-wider uppercase text-brand-graphite font-semibold hover:bg-white transition-colors"
        >
          {autoRotate ? 'Stop Spin' : 'Auto Spin'}
        </button>
      </div>
    </div>
  );
}
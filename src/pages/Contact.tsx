import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Building, HeartHandshake, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    department: 'sales',
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        department: 'sales',
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const offices = [
    {
      city: 'Hyderabad (HQ & Factory)',
      role: 'Manufacturing & Domestic Sales',
      address: 'A-13, IDA, Balanagar, Hyderabad, Telangana 500037',
      tel: '+91 80 4920 1200',
      email: 'sales@psrsrockdrills.com'
    },
    {
      city: 'Dubai Hub',
      role: 'Middle East & African Logistics',
      address: 'Jebel Ali Free Zone, South Side, Dubai, UAE',
      tel: '+971 4 883 4900',
      email: 'dubai@psrsrockdrills.com'
    },
    {
      city: 'Santiago Office',
      role: 'Latin American Distribution',
      address: 'Avenida Vitacura 2670, Santiago, Chile',
      tel: '+56 2 2496 3800',
      email: 'chile@psrsrockdrills.com'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white select-text">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
            Inquiry Office
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Connect With Our Engineering Division
          </h1>
          <p className="font-sans text-sm text-brand-graphite leading-relaxed">
            Reach our sales advisors, export logistics desks, or submit a dealer application using our router system.
          </p>
        </div>

        {/* Quick Links / Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="https://wa.me/918049201200"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite flex items-start gap-4 hover:border-brand-red transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-red transition-colors">
                WhatsApp Live Help
              </h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                Connect directly with our sales managers for immediate replies.
              </p>
              <span className="inline-block font-mono text-[10px] font-bold text-brand-red mt-2">
                Open Chat Room
              </span>
            </div>
          </a>

          <a
            href="tel:+918049201200"
            className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite flex items-start gap-4 hover:border-brand-red transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
              <Building size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal group-hover:text-brand-red transition-colors">
                Telephone Switchboard
              </h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                Call our manufacturing plant for domestic and export bookings.
              </p>
              <span className="inline-block font-mono text-[10px] font-bold text-brand-red mt-2">
                +91 80 4920 1200
              </span>
            </div>
          </a>

          <div className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite flex items-start gap-4 hover:border-brand-red transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
              <HeartHandshake size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Dealer Opportunities
              </h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                Register as a regional distributor of PSR drilling tools.
              </p>
              <span className="inline-block font-mono text-[10px] font-bold text-brand-red mt-2">
                Route via Form
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Router Form */}
          <div className="lg:col-span-7 p-6 md:p-10 border border-brand-bordergray rounded-3xl bg-brand-softwhite relative overflow-hidden">
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-brand-charcoal border-b border-brand-bordergray pb-3 mb-6">
              Departmental Inquiry router
            </h3>

            {formSubmitted ? (
              <div className="p-6 bg-success/10 border border-success rounded-2xl flex items-center gap-3 animate-fade-in">
                <CheckCircle className="text-success shrink-0" size={24} />
                <div className="space-y-0.5">
                  <h5 className="font-heading text-sm font-bold text-brand-charcoal uppercase tracking-wider">Inquiry Route Confirmed</h5>
                  <p className="font-sans text-xs text-brand-graphite/80">
                    Your details have been routed to our departmental databases. A reply is pending.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                    Select Target Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-heading text-xs font-bold uppercase tracking-widest text-brand-charcoal focus:outline-none"
                  >
                    <option value="sales">Domestic Rig Sales</option>
                    <option value="export">International Container Shipments</option>
                    <option value="dealer">Regional Dealer Registration</option>
                    <option value="careers">Engineering Careers & Jobs</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="name@company.com"
                      className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Industrial Drilling Ltd"
                      className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      placeholder="South Africa"
                      className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Wagon Drill custom guide mast quote request"
                    className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="block font-heading text-[10px] font-bold uppercase tracking-wider text-brand-graphite mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    placeholder="Specify air volume limits, drill bit diameters, or attachment adapters..."
                    className="w-full p-3 bg-white border border-brand-bordergray rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-red resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red hover:bg-brand-crimson text-white font-heading text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} /> Submit routed inquiry
                </button>
              </form>
            )}
          </div>

          {/* Office coordinates list */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-brand-charcoal border-b border-brand-bordergray pb-3 mb-6">
              Global Support Centers
            </h3>

            {offices.map((off, i) => (
              <div key={i} className="p-6 border border-brand-bordergray rounded-2xl bg-white space-y-4 hover:border-brand-red transition-all">
                <div>
                  <h4 className="font-heading text-base font-bold text-brand-charcoal">{off.city}</h4>
                  <span className="font-sans text-[10px] text-brand-red font-semibold uppercase tracking-wider">
                    {off.role}
                  </span>
                </div>
                
                <ul className="space-y-2.5 font-sans text-xs text-brand-graphite">
                  <li className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span>{off.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone size={16} className="text-brand-red shrink-0" />
                    <span>{off.tel}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={16} className="text-brand-red shrink-0" />
                    <span>{off.email}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 border border-brand-bordergray rounded-3xl overflow-hidden shadow-sm h-[450px]">
          <iframe
            title="Hyderabad HQ & Factory Map"
            src="https://maps.google.com/maps?q=17.4748,78.4501&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

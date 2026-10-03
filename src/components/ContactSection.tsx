import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  Clock,
  Send,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('Plywood & Laminates');
  const [message, setMessage] = useState('');
  const [preferredPhone, setPreferredPhone] = useState(BUSINESS_INFO.phones[0].number);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'H.No. 28, Sartaj Patel Nagar Colony, Near Bharat Talkies, Behind Shakti Ali Hospital, Bhopal, Madhya Pradesh 462001'
  )}`;

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello AKASH Ply & Hardware,\n\nMy Name is ${name || 'Customer'}.\nContact: ${phone || 'Not provided'}\nRequirement: ${selectedInterest}`;
    if (message.trim()) {
      text += `\nMessage: ${message.trim()}`;
    }
    text += `\nPlease guide me with material availability and quote.`;

    const link = generateWhatsAppLink(preferredPhone, text);
    window.open(link, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14161B] mb-4">
            Visit AKASH Ply & Hardware
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Conveniently located near Bharat Talkies in Bhopal. Walk into our showroom or connect directly with our material team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Official Contact Details & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Address Card */}
            <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-xs space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-[#F7F4EE] border border-[#EAE4D9] text-[#8C5D28] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#14161B] mb-1.5">Showroom Address</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                    {BUSINESS_INFO.address.line1},<br />
                    {BUSINESS_INFO.address.line2},<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} – {BUSINESS_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3 text-xs text-neutral-600 pt-2 border-t border-[#EFEBE4]">
                <Clock className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

            {/* Direct Communication Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone 1 */}
              <div className="p-5 rounded-2xl bg-white border border-[#E7E2D8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                    Primary Phone / WA
                  </div>
                  <div className="text-base font-bold text-[#14161B] mb-3">
                    {BUSINESS_INFO.phones[0].display}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                    className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors"
                  >
                    Call
                  </a>
                  <a
                    href={generateWhatsAppLink(BUSINESS_INFO.phones[0].number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="p-5 rounded-2xl bg-white border border-[#E7E2D8] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                    Secondary Phone / WA
                  </div>
                  <div className="text-base font-bold text-[#14161B] mb-3">
                    {BUSINESS_INFO.phones[1].display}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:+91${BUSINESS_INFO.phones[1].number}`}
                    className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors"
                  >
                    Call
                  </a>
                  <a
                    href={generateWhatsAppLink(BUSINESS_INFO.phones[1].number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Directions Row */}
            <div className="p-5 rounded-2xl bg-white border border-[#E7E2D8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden w-full sm:w-auto">
                <div className="p-2.5 rounded-xl bg-[#F7F4EE] border border-[#EAE4D9] text-[#8C5D28] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-neutral-600">Email Inquiries</div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-bold text-[#14161B] hover:text-[#8C5D28] transition-colors truncate block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-300 rounded-lg text-center transition-colors whitespace-nowrap shadow-2xs"
                >
                  Email Us
                </a>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-lg transition-colors whitespace-nowrap shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Interactive Showroom Map Card (Architectural Light View) */}
            <div className="rounded-2xl overflow-hidden border border-[#E7E2D8] bg-[#F4EFE7] relative group shadow-xs">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#F2EEE7] select-none">
                {/* SVG Blueprint Map Grid and Roads in Warm Architectural Styling */}
                <svg
                  className="w-full h-full opacity-85"
                  viewBox="0 0 600 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="light-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E3DBD0" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  {/* Grid background */}
                  <rect width="600" height="350" fill="url(#light-grid)" />

                  {/* Major Road Networks (Bhopal city grid layout near Bharat Talkies) */}
                  <path d="M 0 180 Q 220 170 340 180 T 600 200" stroke="#DDD6CA" strokeWidth="20" />
                  <path d="M 0 180 Q 220 170 340 180 T 600 200" stroke="#FFFFFF" strokeWidth="12" />
                  <path d="M 0 180 Q 220 170 340 180 T 600 200" stroke="#8C5D28" strokeWidth="1.5" strokeDasharray="6 6" />

                  {/* Cross Arterial Road */}
                  <path d="M 320 0 L 320 350" stroke="#DDD6CA" strokeWidth="18" />
                  <path d="M 320 0 L 320 350" stroke="#FFFFFF" strokeWidth="10" />

                  {/* Secondary colony roads */}
                  <path d="M 120 180 L 120 350" stroke="#E6E0D6" strokeWidth="8" />
                  <path d="M 450 0 L 450 200" stroke="#E6E0D6" strokeWidth="8" />
                  <path d="M 220 100 L 420 100" stroke="#E6E0D6" strokeWidth="7" />
                  <path d="M 220 250 L 520 250" stroke="#E6E0D6" strokeWidth="7" />

                  {/* Road Names */}
                  <text x="40" y="165" fill="#7A7265" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
                    HAMIDIA ROAD
                  </text>
                  <text x="330" y="50" fill="#7A7265" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
                    BHARAT TALKIES ROAD
                  </text>
                  <text x="230" y="270" fill="#8C8375" fontSize="9" fontFamily="sans-serif">
                    Sartaj Patel Nagar Colony
                  </text>

                  {/* Landmark: Bharat Talkies */}
                  <circle cx="320" cy="180" r="14" fill="#FFFFFF" stroke="#B8AF9F" strokeWidth="2" />
                  <text x="340" y="175" fill="#242831" fontSize="11" fontWeight="bold">
                    Bharat Talkies
                  </text>
                  <text x="340" y="188" fill="#7A7265" fontSize="9">
                    Key City Landmark
                  </text>

                  {/* Landmark: Shakti Ali Hospital */}
                  <circle cx="270" cy="220" r="6" fill="#8C5D28" fillOpacity="0.2" stroke="#8C5D28" strokeWidth="1.5" />
                  <text x="210" y="235" fill="#4B5162" fontSize="10" fontWeight="600">
                    Shakti Ali Hospital
                  </text>

                  {/* Landmark: Bhopal Junction Direction */}
                  <path d="M 540 70 L 570 70 M 560 60 L 570 70 L 560 80" stroke="#8C5D28" strokeWidth="1.5" />
                  <text x="420" y="74" fill="#8C5D28" fontSize="10" fontWeight="bold">
                    Bhopal Junction (1.5 km)
                  </text>

                  {/* Target Store Location: AKASH Ply & Hardware */}
                  <g transform="translate(290, 215)">
                    {/* Pulsing rings */}
                    <circle cx="0" cy="0" r="28" fill="#8C5D28" fillOpacity="0.12" />
                    <circle cx="0" cy="0" r="16" fill="#8C5D28" fillOpacity="0.25" />
                    <circle cx="0" cy="0" r="7" fill="#8C5D28" />
                    <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                  </g>
                </svg>

                {/* Overlaid Store Pin Badge */}
                <div className="absolute top-[52%] left-[45%] -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
                  <div className="px-3 py-1.5 rounded-lg bg-white border border-[#8C5D28] shadow-lg text-center backdrop-blur-md">
                    <div className="text-[11px] font-bold text-[#14161B] whitespace-nowrap">
                      AKASH Ply & Hardware
                    </div>
                    <div className="text-[9px] text-neutral-600 font-medium">
                      H.No. 28, Sartaj Patel Nagar
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-[#8C5D28] rotate-45 -mt-1" />
                </div>

                {/* Top Location Kicker */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-200 text-[11px] text-neutral-800 font-semibold flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#8C5D28]" />
                  <span>Bhopal, MP – 462001</span>
                </div>

                {/* Bottom Navigation CTA Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md">
                  <div className="text-xs text-neutral-800 pl-1">
                    <span className="font-bold text-[#14161B]">Behind Shakti Ali Hospital</span>
                    <span className="text-neutral-500 hidden sm:inline"> · Near Bharat Talkies</span>
                  </div>

                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#181A20] hover:bg-[#2C303B] text-white font-semibold text-xs shadow-xs transition-all whitespace-nowrap"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Box (WhatsApp Integrated) */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E7E2D8] shadow-xs flex flex-col justify-between h-full">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-1">
                  Send a Direct Message
                </div>
                <h3 className="text-2xl font-bold text-[#14161B] mb-2">
                  Connect with Our Bhopal Store
                </h3>
                <p className="text-sm text-neutral-600 mb-6">
                  Fill in your requirements below to instantly start a WhatsApp conversation with our store team.
                </p>

                {isSubmitted && (
                  <div className="p-4 mb-5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp chat window opened! We look forward to assisting you.</span>
                  </div>
                )}

                <form onSubmit={handleQuickContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-xl text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98260XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-xl text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Material of Interest
                    </label>
                    <select
                      value={selectedInterest}
                      onChange={(e) => setSelectedInterest(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-xl text-neutral-900 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors"
                    >
                      <option value="Plywood & Structural Boards">Plywood & Structural Boards</option>
                      <option value="Decorative Laminates & Surfaces">Decorative Laminates & Surfaces</option>
                      <option value="Hardware Fittings & Hinges">Hardware Fittings & Hinges</option>
                      <option value="Modular Kitchen & Wardrobe Accessories">Modular Kitchen & Wardrobe Accessories</option>
                      <option value="Full Interior Project Requirements">Full Interior Project Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Connect With
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BUSINESS_INFO.phones.map((p) => (
                        <button
                          type="button"
                          key={p.number}
                          onClick={() => setPreferredPhone(p.number)}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-colors ${
                            preferredPhone === p.number
                              ? 'bg-[#8C5D28]/15 border-[#8C5D28] text-[#6A4215]'
                              : 'bg-[#FAF8F5] border-[#DDD6CB] text-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {p.display}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Message / Sheet Count / Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Please share catalog for interior plywood and textured laminates..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-xl text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                </form>
              </div>

              <div className="pt-6 border-t border-[#EFEBE4] text-xs text-neutral-600 mt-6">
                Fast responses during working hours (10:00 AM – 8:30 PM). Direct telephone support also available.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F0ECE3] border-t border-[#E3DDD1] text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block text-2xl font-bold tracking-tight text-[#14161B]">
              <span className="text-[#8C5D28] font-extrabold">AKASH</span>{' '}
              <span className="font-normal text-[#242831]">Ply & Hardware</span>
            </a>
            <p className="text-neutral-800 font-semibold text-sm">
              Premium Plywood, Laminates, Hardware & Modular Solutions.
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              Serving residential homes, commercial offices, architects, and interior contractors in Bhopal with quality and reliability.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-50 transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C5D28]" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#14161B]">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <a href="#home" className="hover:text-[#8C5D28] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#8C5D28] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#8C5D28] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#8C5D28] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#8C5D28] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#8C5D28] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#14161B]">
              Categories
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <a href="#products" className="hover:text-[#8C5D28] transition-colors">
                  Commercial & Interior Plywood
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#8C5D28] transition-colors">
                  Decorative & Matte Laminates
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#8C5D28] transition-colors">
                  Kitchen & Wardrobe Hardware
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#8C5D28] transition-colors">
                  Modular Storage Solutions
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#8C5D28] transition-colors">
                  Architectural Fittings
                </a>
              </li>
            </ul>
          </div>

          {/* Official Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#14161B]">
              Showroom Contact
            </div>
            <div className="space-y-2.5 text-xs text-neutral-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C5D28] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-neutral-700">
                  {BUSINESS_INFO.address.line1},<br />
                  {BUSINESS_INFO.address.line2},<br />
                  {BUSINESS_INFO.address.city}, M.P. – {BUSINESS_INFO.address.pincode}
                </address>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                <div className="space-x-2 text-neutral-800 font-medium">
                  <a href={`tel:+91${BUSINESS_INFO.phones[0].number}`} className="hover:text-[#8C5D28]">
                    {BUSINESS_INFO.phones[0].number}
                  </a>
                  <span>·</span>
                  <a href={`tel:+91${BUSINESS_INFO.phones[1].number}`} className="hover:text-[#8C5D28]">
                    {BUSINESS_INFO.phones[1].number}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#8C5D28] truncate text-neutral-800 font-medium">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-[#E3DDD1] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 AKASH Ply & Hardware. All Rights Reserved.</span>
            <span className="hidden sm:inline text-neutral-400">·</span>
            <span>Bhopal, Madhya Pradesh – 462001</span>
          </div>

          {/* Agency Credit: AuraForge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#DDD6CB] shadow-xs text-neutral-700">
            <span className="text-neutral-500 font-medium">Concept & Website by</span>
            <span className="font-bold text-[#14161B] tracking-tight">AuraForge</span>
            <span className="text-neutral-300">|</span>
            <a
              href="tel:+917869461895"
              className="text-[#8C5D28] hover:text-[#5E3B14] font-semibold transition-colors flex items-center gap-1"
              title="Call AuraForge"
            >
              <Phone className="w-3 h-3 text-[#8C5D28]" />
              <span>+91 78694 61895</span>
            </a>
            <a
              href="https://wa.me/917869461895?text=Hello%20AuraForge,%20I%20am%20interested%20in%20a%20website%20like%20AKASH%20Ply%20%26%20Hardware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 transition-colors p-1 hover:bg-emerald-50 rounded"
              title="WhatsApp AuraForge"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDD6CB] text-neutral-700 hover:text-black hover:border-neutral-400 transition-colors shadow-2xs"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

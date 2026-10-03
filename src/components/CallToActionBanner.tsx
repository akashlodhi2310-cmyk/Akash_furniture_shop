import React from 'react';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

interface CallToActionBannerProps {
  onOpenQuote: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-[#F7F2EA] via-[#EFE7DA] to-[#F7F2EA] border-y border-[#DCCDBA] overflow-hidden">
      {/* Background Subtle Wood & Gradient Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/src/assets/images/hero_luxury_interior_1790787366979.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover filter contrast-125"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-3">
          Get Started Today
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14161B] mb-4 text-balance">
          Planning Your Next Interior Project?
        </h2>
        <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let’s find the right materials and solutions for your space. Connect directly with our material consultants in Bhopal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={generateWhatsAppLink(
              undefined,
              'Hello AKASH Ply & Hardware, I am planning my interior project and would like to find the right materials for my space.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-300 rounded-xl transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#8C5D28]" />
            <span>Call: {BUSINESS_INFO.phones[0].number}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

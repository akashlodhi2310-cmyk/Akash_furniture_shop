import React, { useState } from 'react';
import { MessageCircle, Phone, X, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

interface FloatingWhatsAppProps {
  onOpenQuote: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenQuote }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Options Menu */}
      {isExpanded && (
        <div className="mb-3 w-64 bg-white border border-[#E2DDD5] rounded-2xl p-4 shadow-2xl shadow-black/20 text-[#14161B] animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-neutral-200">
            <span className="text-xs font-bold text-[#14161B] uppercase tracking-wider">
              Quick Connect
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* WhatsApp Phone 1 */}
            <a
              href={generateWhatsAppLink(BUSINESS_INFO.phones[0].number)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200 text-neutral-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-neutral-900">Chat on WhatsApp</div>
                <div className="text-[11px] text-neutral-600 font-medium">{BUSINESS_INFO.phones[0].display}</div>
              </div>
            </a>

            {/* WhatsApp Phone 2 */}
            <a
              href={generateWhatsAppLink(BUSINESS_INFO.phones[1].number)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200 text-neutral-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-neutral-900">Secondary WhatsApp</div>
                <div className="text-[11px] text-neutral-600 font-medium">{BUSINESS_INFO.phones[1].display}</div>
              </div>
            </a>

            {/* Direct Call Store */}
            <a
              href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-[#FAF8F5] hover:bg-neutral-100 border border-[#DDD6CB] text-neutral-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8C5D28] shrink-0" />
              <div>
                <div className="font-bold text-neutral-900">Call Store Directly</div>
                <div className="text-[11px] text-neutral-600 font-medium">9977791949</div>
              </div>
            </a>

            {/* Request Quote Modal Trigger */}
            <button
              onClick={() => {
                setIsExpanded(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-3 mt-1 font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl text-center transition-colors shadow-xs"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl shadow-emerald-950/80 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
        aria-label="Contact AKASH Ply & Hardware on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};

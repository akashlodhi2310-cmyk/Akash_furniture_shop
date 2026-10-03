import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Light Architectural Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_interior_1790787366979.jpg"
          alt="Luxury modern interior with rich wood paneling, modular cabinetry, and architectural lighting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Refined Warm Light Scrim for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/98 via-[#FAF8F5]/92 to-[#FAF8F5]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="max-w-3xl">
          {/* Subtle Location & Category Kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#8C5D28] mb-4">
            <span className="uppercase tracking-widest">Bhopal Destination</span>
            <span aria-hidden="true" className="text-neutral-400">·</span>
            <span className="text-neutral-600 font-medium">Plywood, Laminates & Modular Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14161B] leading-[1.12] mb-6 max-w-2xl text-balance">
            Premium Plywood, Laminates & Hardware{' '}
            <span className="text-[#8C5D28] font-light italic">for Better Spaces.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-neutral-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-normal">
            Quality materials, stylish designs and trusted solutions for homes, interiors and commercial projects in Bhopal.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-neutral-800 hover:text-black bg-white/90 hover:bg-white border border-neutral-300 rounded-xl transition-all shadow-xs"
            >
              <span>Explore Products</span>
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-neutral-300/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span className="font-semibold text-neutral-800">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span className="font-semibold text-neutral-800">Wide Product Range</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span className="font-semibold text-neutral-800">Affordable Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5D28] shrink-0" />
                <span className="font-semibold text-neutral-800">Trusted Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

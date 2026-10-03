import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Layers, MapPin } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5F2EB] border-y border-[#E7E1D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural border and material accent */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative subtle offset border */}
              <div className="absolute -inset-2 rounded-2xl border border-[#8C5D28]/25 -z-10 translate-x-2 translate-y-2 hidden sm:block" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-[#E2DDD5]">
                <img
                  src="/src/assets/images/category_modular_kitchen_1790787420869.jpg"
                  alt="Modern architectural interior and modular showroom solutions"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Clean inline location marker inside image container */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 text-xs text-neutral-700 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8C5D28]" />
                    <span className="font-semibold text-neutral-900">Bhopal Showroom & Materials</span>
                  </div>
                  <span className="text-[#8C5D28] font-semibold">MP · 462001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold">
              About AKASH Ply & Hardware
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14161B] leading-tight">
              A Trusted Destination for Quality Materials in Bhopal
            </h2>

            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                AKASH Ply & Hardware is a trusted destination for quality plywood, laminates, hardware fittings and modular solutions in Bhopal.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base">
                We focus on providing reliable products, stylish designs and practical solutions for residential and commercial interior projects.
              </p>
            </div>

            {/* Core Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD6] shadow-xs">
                <div className="text-sm font-bold text-[#14161B] mb-1">Dependable Durability</div>
                <div className="text-xs text-neutral-600">
                  Carefully sourced plywood and hardware built to handle real load and everyday use.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD6] shadow-xs">
                <div className="text-sm font-bold text-[#14161B] mb-1">Modern Design Palette</div>
                <div className="text-xs text-neutral-600">
                  Contemporary laminate textures and modular accessories aligned with modern interior aesthetics.
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-md"
              >
                <span>Know More About Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink(
                  undefined,
                  'Hello AKASH Ply & Hardware, I would like to learn more about your store and material offerings.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-300 rounded-xl transition-colors shadow-xs"
              >
                <span>Talk to AKASH</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

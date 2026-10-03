import React, { useState } from 'react';
import { MessageCircle, PhoneCall, Sparkles, ChevronRight, Check } from 'lucide-react';
import { FEATURED_PRODUCTS, ProductItem, generateWhatsAppLink } from '../data/businessData';

interface FeaturedProductsSectionProps {
  activeCategoryFilter: string;
  onFilterChange: (cat: string) => void;
  onOpenQuote: (category?: string, productName?: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  activeCategoryFilter,
  onFilterChange,
  onOpenQuote,
}) => {
  const filterTabs = [
    'All',
    'Plywood',
    'Laminates',
    'Hardware Fittings',
    'Modular Solutions',
  ];

  const filteredProducts =
    activeCategoryFilter === 'All'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => {
          // Normalize matching
          if (activeCategoryFilter.toUpperCase() === 'PLYWOOD') return p.category === 'Plywood';
          if (activeCategoryFilter.toUpperCase() === 'LAMINATES') return p.category === 'Laminates';
          if (activeCategoryFilter.toUpperCase().includes('HARDWARE')) return p.category === 'Hardware Fittings';
          if (activeCategoryFilter.toUpperCase().includes('MODULAR')) return p.category === 'Modular Solutions';
          return p.category.toLowerCase().includes(activeCategoryFilter.toLowerCase());
        });

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#F5F2EB] border-y border-[#E7E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-2">
            Featured Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14161B] mb-4">
            Curated Products for Refined Interiors
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Selected materials and fittings available in multiple specifications, finishes, and dimensions for homes and commercial venues.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive =
              activeCategoryFilter === tab ||
              (activeCategoryFilter.toUpperCase() === tab.toUpperCase()) ||
              (tab === 'All' && activeCategoryFilter === 'All');

            return (
              <button
                key={tab}
                onClick={() => onFilterChange(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'bg-[#181A20] text-white shadow-sm'
                    : 'bg-white text-neutral-700 hover:text-black hover:bg-neutral-50 border border-neutral-300/80 shadow-2xs'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: ProductItem) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl border border-[#E7E2D8] hover:border-[#8C5D28]/50 overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl"
            >
              {/* Product Visual */}
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Clean unboxed category label with separator */}
                <div className="absolute top-4 left-4 text-xs font-semibold text-neutral-800 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md border border-neutral-200/80 shadow-xs">
                  <span>{product.category}</span>
                </div>

                {/* Availability status text */}
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white font-semibold flex items-center gap-1.5 drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EADBBE]" />
                  <span>{product.availability}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#14161B] mb-2 group-hover:text-[#8C5D28] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {product.shortDesc}
                  </p>

                  {/* Bullet highlights */}
                  <div className="space-y-1.5 mb-6 text-xs text-neutral-600">
                    {product.highlightPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Now Action: Direct WhatsApp / Modal Trigger */}
                <div className="pt-4 border-t border-[#EFEBE4] flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onOpenQuote(product.category, product.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enquire Now</span>
                  </button>

                  <a
                    href={generateWhatsAppLink(
                      undefined,
                      `Hello AKASH Ply & Hardware, I want to enquire about ${product.name} (${product.category}). Please share details and pricing options.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3.5 py-2.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                    title="Quick WhatsApp message"
                  >
                    Direct WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E7E2D8] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-[#14161B] mb-1">
              Need custom sheet sizes or bulk project supply?
            </div>
            <p className="text-sm text-neutral-600">
              We cater to homeowners, interior designers, architects, and carpenters across Bhopal.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#8C5D28] hover:bg-[#72481A] rounded-xl transition-all whitespace-nowrap shadow-sm"
          >
            Get Custom Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

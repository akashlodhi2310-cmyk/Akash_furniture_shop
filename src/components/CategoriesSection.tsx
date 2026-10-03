import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CATEGORIES, CategoryInfo } from '../data/businessData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryName: string) => void;
  onOpenQuote: (categoryName: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onOpenQuote,
}) => {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-2">
              Product Categories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14161B]">
              Everything You Need for Your Interior
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md">
            From structural core plywood to designer decorative surfaces and precision modular fittings in Bhopal.
          </p>
        </div>

        {/* 4 Premium Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat: CategoryInfo) => (
            <div
              key={cat.id}
              className="group relative flex flex-col bg-white rounded-2xl border border-[#E7E2D8] overflow-hidden hover:border-[#8C5D28]/60 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1"
            >
              {/* Category Image with fallback */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Subtle Tagline kicker */}
                <div className="absolute bottom-3 left-4 text-xs font-bold tracking-wider uppercase text-white drop-shadow-sm">
                  {cat.tagline}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#14161B] mb-2 group-hover:text-[#8C5D28] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-6 text-xs text-neutral-600">
                    {cat.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8C5D28] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#EFEBE4] flex items-center justify-between">
                  <button
                    onClick={() => onSelectCategory(cat.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14161B] group-hover:text-[#8C5D28] transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(cat.title)}
                    className="text-xs font-semibold text-[#8C5D28] hover:text-[#5B3913] transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

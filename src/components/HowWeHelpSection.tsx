import React from 'react';
import { HOW_WE_HELP_STEPS } from '../data/businessData';

export const HowWeHelpSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-2">
            Simple & Transparent Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#14161B] mb-3">
            How We Help You Build
          </h2>
          <p className="text-sm text-neutral-600">
            A seamless experience from material exploration to doorstep project dispatch in Bhopal.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_WE_HELP_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E2D8] hover:border-[#8C5D28]/60 transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#8C5D28] mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#14161B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="pt-6 mt-4 border-t border-[#EFEBE4] flex items-center justify-between text-[11px] text-neutral-600 font-mono">
                <span>Phase {idx + 1} of 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C5D28]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

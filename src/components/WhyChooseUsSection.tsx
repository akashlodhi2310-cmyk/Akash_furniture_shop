import React from 'react';
import { Award, Layers, Tag, Clock, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/businessData';

export const WhyChooseUsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Award className="w-5 h-5 text-[#8C5D28]" />,
    '02': <Layers className="w-5 h-5 text-[#8C5D28]" />,
    '03': <Tag className="w-5 h-5 text-[#8C5D28]" />,
    '04': <Clock className="w-5 h-5 text-[#8C5D28]" />,
    '05': <HeartHandshake className="w-5 h-5 text-[#8C5D28]" />,
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-2">
            The AKASH Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14161B] mb-4">
            Why Choose AKASH?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Committed to supplying durable materials, trustworthy guidance, and dependable service for every interior build.
          </p>
        </div>

        {/* 5 Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.index}
              className="group relative p-8 rounded-2xl bg-white border border-[#E7E2D8] hover:border-[#8C5D28]/60 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Index number & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold font-mono text-[#8C5D28] group-hover:text-[#5E3B14] transition-colors">
                    {item.index}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#F7F4EE] border border-[#EAE4D9] group-hover:border-[#8C5D28]/40 transition-colors">
                    {iconMap[item.index]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#14161B] mb-3 group-hover:text-[#8C5D28] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-700 font-semibold leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFEBE4] text-xs text-neutral-600 leading-normal">
                {item.detail}
              </div>
            </div>
          ))}

          {/* Quick Consultation Highlight Card filling 6th slot for 3-col balance */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#F5EFE6] to-[#EAE0D0] border border-[#D9C8B0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-3">
                Need Guidance?
              </div>
              <h3 className="text-xl font-bold text-[#14161B] mb-3">
                Talk to Our Material Specialists
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-normal">
                Not sure about the ideal plywood grade or laminate finish for your space? Our team in Bhopal is ready to assist you.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

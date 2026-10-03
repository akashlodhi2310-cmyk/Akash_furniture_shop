import React, { useState } from 'react';
import { Eye, X, MessageCircle, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, generateWhatsAppLink } from '../data/businessData';

interface GallerySectionProps {
  onOpenQuote: (category?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenQuote }) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F5F2EB] border-y border-[#E7E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-2">
            Interior Inspiration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14161B] mb-4">
            Build Spaces You’ll Love.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            See how quality plywood, sleek laminates, and precision hardware transform living rooms, modular kitchens, and contemporary workspaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E7E2D8] cursor-pointer hover:border-[#8C5D28]/60 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Hover Eye Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] uppercase tracking-wider text-[#EADBBE] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#EADBBE] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-200 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Section Callout: Looking for the Right Material? */}
        <div className="mt-14 p-8 rounded-2xl bg-white border border-[#E7E2D8] shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#14161B] mb-1">
              Looking for the Right Material?
            </h3>
            <p className="text-sm text-neutral-600">
              Bring your floor plans or furniture ideas. We’ll help you select the exact plywood and finishes.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={generateWhatsAppLink(
                undefined,
                'Hello AKASH Ply & Hardware, I am looking for the right materials for my project and would like expert advice.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Talk to AKASH</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden border border-neutral-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] overflow-hidden bg-neutral-900">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-white border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C5D28] font-bold block">
                  {activeImage.category}
                </span>
                <h4 className="text-xl font-bold text-[#14161B] mt-0.5">{activeImage.title}</h4>
                <p className="text-sm text-neutral-600 mt-1">{activeImage.caption}</p>
              </div>

              <button
                onClick={() => {
                  const item = activeImage;
                  setActiveImage(null);
                  onOpenQuote(item.category);
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all whitespace-nowrap shadow-sm"
              >
                Enquire This Finish
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

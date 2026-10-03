import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

interface NavbarProps {
  onOpenQuote: (category?: string, product?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] py-3 shadow-sm'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-black/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#14161B] hover:text-[#8C5D28] transition-colors whitespace-nowrap"
            >
              <span className="text-[#8C5D28] font-extrabold tracking-normal">AKASH</span>{' '}
              <span className="font-normal text-[#242831]">Ply & Hardware</span>
            </a>

            {/* Zone 2: Clean 4–6 text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#8C5D28] transition-colors whitespace-nowrap py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1–2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 px-3 py-2 rounded-lg border border-neutral-300/80 bg-white/80 hover:bg-white transition-colors whitespace-nowrap shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C5D28]" />
                <span>{BUSINESS_INFO.phones[0].display}</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-lg transition-all duration-150 shadow-sm hover:shadow whitespace-nowrap"
              >
                Get a Quote
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 rounded-lg hover:bg-neutral-200/60"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#FAF8F5]/98 backdrop-blur-md pt-20 pb-6 px-6 flex flex-col justify-between border-b border-neutral-300">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-800 hover:text-[#8C5D28] py-2 border-b border-neutral-200/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6 border-t border-neutral-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#181A20] rounded-xl text-center shadow-md"
            >
              Get a Quote
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:+91${BUSINESS_INFO.phones[0].number}`}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#8C5D28]" /> Call Store
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedProductsSection } from './components/FeaturedProductsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { HowWeHelpSection } from './components/HowWeHelpSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string | undefined>(undefined);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const handleOpenQuote = (category?: string, product?: string) => {
    setQuoteCategory(category);
    setQuoteProduct(product);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteCategory(undefined);
    setQuoteProduct(undefined);
  };

  const handleSelectCategoryFromGrid = (categoryTitle: string) => {
    setActiveCategoryFilter(categoryTitle);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2228] flex flex-col font-sans selection:bg-[#EADBBE] selection:text-[#181A20]">
      {/* 3-Zone Top Bar Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* Full-Width Visual Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* About AKASH Section */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 4 Product Categories */}
        <CategoriesSection
          onSelectCategory={handleSelectCategoryFromGrid}
          onOpenQuote={(cat) => handleOpenQuote(cat)}
        />

        {/* Featured Products Showcase */}
        <FeaturedProductsSection
          activeCategoryFilter={activeCategoryFilter}
          onFilterChange={(cat) => setActiveCategoryFilter(cat)}
          onOpenQuote={(cat, prod) => handleOpenQuote(cat, prod)}
        />

        {/* Why Choose AKASH */}
        <WhyChooseUsSection />

        {/* Interior Inspiration / Gallery */}
        <GallerySection onOpenQuote={(cat) => handleOpenQuote(cat)} />

        {/* How We Help (4-Step Process) */}
        <HowWeHelpSection />

        {/* Call To Action Banner */}
        <CallToActionBanner onOpenQuote={() => handleOpenQuote()} />

        {/* Official Contact & Showroom Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp Lead Generation */}
      <FloatingWhatsApp onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive WhatsApp Lead / Material Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preSelectedCategory={quoteCategory}
        preSelectedProduct={quoteProduct}
      />
    </div>
  );
}

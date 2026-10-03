import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Send, Check } from 'lucide-react';
import { BUSINESS_INFO, generateWhatsAppLink } from '../data/businessData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCategory?: string;
  preSelectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preSelectedCategory,
  preSelectedProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Plywood');
  const [targetPhone, setTargetPhone] = useState<string>(BUSINESS_INFO.phones[0].number);
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('Residential Home');
  const [customNotes, setCustomNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preSelectedCategory) {
      setSelectedCategory(preSelectedCategory);
    }
    if (preSelectedProduct) {
      setCustomNotes(`Inquiring specifically about: ${preSelectedProduct}`);
    }
  }, [preSelectedCategory, preSelectedProduct, isOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const categories = [
    'Plywood',
    'Laminates',
    'Hardware Fittings',
    'Modular Solutions',
    'Multiple / Complete Interior',
  ];

  const projectTypes = [
    'Residential Home',
    'Apartment / Flat',
    'Commercial Office',
    'Retail Showroom',
    'Carpentry / Contractor Project',
  ];

  const buildFinalMessage = () => {
    let msg = `Hello AKASH Ply & Hardware,\n\nI am interested in your ${selectedCategory.toLowerCase()}. I would like to know more about your products, availability, and pricing.`;
    if (preSelectedProduct) {
      msg += `\n\n• Product of interest: ${preSelectedProduct}`;
    }
    if (projectType) {
      msg += `\n• Project type: ${projectType}`;
    }
    if (name.trim()) {
      msg += `\n• My Name: ${name.trim()}`;
    }
    if (customNotes.trim()) {
      msg += `\n• Specific Requirements: ${customNotes.trim()}`;
    }
    msg += `\n\nPlease share catalog options or guide me accordingly. Thank you!`;
    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = buildFinalMessage();
    const link = generateWhatsAppLink(targetPhone, finalMsg);
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(buildFinalMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white border border-[#E2DDD5] rounded-2xl p-6 sm:p-8 text-[#14161B] shadow-2xl shadow-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-800 transition-colors rounded-lg hover:bg-neutral-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="text-xs uppercase tracking-widest text-[#8C5D28] font-bold mb-1">
            AKASH Ply & Hardware · Bhopal
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[#14161B]">
            Request a Material Quote
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            Select your requirements to initiate an instant WhatsApp inquiry with our store.
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-5">
          {/* Select Category */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Select Requirement Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg text-left transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#8C5D28]/15 border-[#8C5D28] text-[#6A4215] shadow-xs'
                      : 'bg-[#FAF8F5] border-[#DDD6CB] text-neutral-700 hover:border-neutral-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Project Type
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-lg text-neutral-900 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors"
            >
              {projectTypes.map((pt) => (
                <option key={pt} value={pt} className="bg-white">
                  {pt}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Send Enquiry To
              </label>
              <div className="flex gap-2">
                {BUSINESS_INFO.phones.map((phone) => (
                  <button
                    type="button"
                    key={phone.number}
                    onClick={() => setTargetPhone(phone.number)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                      targetPhone === phone.number
                        ? 'bg-[#8C5D28]/15 border-[#8C5D28] text-[#6A4215]'
                        : 'bg-[#FAF8F5] border-[#DDD6CB] text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {phone.number}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Specific Requirements or Quantities (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need 15 sheets of commercial plywood, wardrobe soft-close hinges, and laminate swatches..."
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD6CB] rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-[#8C5D28] focus:bg-white transition-colors resize-none"
            />
          </div>

          {/* Message Preview Box */}
          <div className="p-3.5 bg-[#F7F4EE] rounded-xl border border-[#EAE4D9] text-xs">
            <div className="flex items-center justify-between mb-1.5 text-neutral-600">
              <span className="font-semibold text-neutral-800">WhatsApp Message Preview:</span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="flex items-center gap-1 text-[11px] font-semibold text-[#8C5D28] hover:underline"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                  </>
                ) : (
                  'Copy Text'
                )}
              </button>
            </div>
            <p className="text-neutral-700 leading-relaxed font-sans whitespace-pre-line line-clamp-3">
              {buildFinalMessage()}
            </p>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#181A20] hover:bg-[#2C303B] rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send WhatsApp Enquiry</span>
            </button>
            <a
              href={`tel:+91${targetPhone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-300 rounded-xl transition-all shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call</span>
            </a>
          </div>

          <div className="text-center text-[11px] text-neutral-500 pt-1">
            Store Location: H.No. 28, Sartaj Patel Nagar Colony, Near Bharat Talkies, Bhopal (462001)
          </div>
        </form>
      </div>
    </div>
  );
};

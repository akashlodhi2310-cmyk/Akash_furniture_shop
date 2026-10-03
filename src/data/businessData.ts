export interface ProductItem {
  id: string;
  name: string;
  category: 'Plywood' | 'Laminates' | 'Hardware Fittings' | 'Modular Solutions';
  shortDesc: string;
  availability: string;
  image: string;
  highlightPoints: string[];
}

export interface CategoryInfo {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  keyFeatures: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const BUSINESS_INFO = {
  name: 'AKASH Ply & Hardware',
  tagline: 'Premium Plywood, Laminates, Hardware & Modular Solutions',
  headline: 'Premium Plywood, Laminates & Hardware for Better Spaces.',
  subheadline:
    'Quality materials, stylish designs and trusted solutions for homes, interiors and commercial projects.',
  city: 'Bhopal',
  state: 'Madhya Pradesh',
  pincode: '462001',
  address: {
    line1: 'H.No. 28, Sartaj Patel Nagar Colony',
    line2: 'Near Bharat Talkies, Behind Shakti Ali Hospital',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '462001',
    fullFormatted:
      'H.No. 28, Sartaj Patel Nagar Colony, Near Bharat Talkies, Behind Shakti Ali Hospital, Bhopal, Madhya Pradesh – 462001',
  },
  phones: [
    { number: '9977791949', display: '+91 99777 91949', isPrimary: true },
    { number: '7999960616', display: '+91 79999 60616', isPrimary: false },
  ],
  email: 'aakashplyandhardware@gmail.com',
  workingHours: 'Monday – Saturday: 10:00 AM – 8:30 PM',
  mapEmbedQuery: 'Bharat Talkies Bhopal Madhya Pradesh 462001',
  defaultWhatsAppMessage:
    'Hello AKASH Ply & Hardware, I am interested in your plywood, laminates, hardware fittings and modular solutions. I would like to know more about your products and pricing.',
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'plywood',
    title: 'PLYWOOD',
    tagline: 'Strong & Reliable',
    description:
      'Quality plywood solutions designed for durable and dependable furniture and interior applications.',
    image: '/src/assets/images/category_plywood_sheets_1790787381303.jpg',
    keyFeatures: [
      'Calibrated core construction',
      'High load-bearing strength',
      'Termite & moisture resistant options',
      'Ideal for cabinetry & structural framing',
    ],
  },
  {
    id: 'laminates',
    title: 'LAMINATES',
    tagline: 'Stylish & Durable',
    description:
      'Explore stylish surfaces and finishes to bring a premium look to your interiors.',
    image: '/src/assets/images/category_laminates_swatches_1790787393865.jpg',
    keyFeatures: [
      'Rich textured & natural woodgrains',
      'Sophisticated matte & high-gloss finishes',
      'Scratch & stain resistant surfaces',
      'Wide design palette for modern decor',
    ],
  },
  {
    id: 'hardware',
    title: 'HARDWARE FITTINGS',
    tagline: 'Premium & Long Lasting',
    description:
      'Reliable hardware fittings for smooth functionality and long-lasting performance.',
    image: '/src/assets/images/category_hardware_fittings_1790787407417.jpg',
    keyFeatures: [
      'Soft-close hydraulic hinges',
      'Precision telescopic drawer runners',
      'Luxury architectural handles & knobs',
      'Durable metallic sliding mechanisms',
    ],
  },
  {
    id: 'modular',
    title: 'MODULAR SOLUTIONS',
    tagline: 'Modern Living',
    description:
      'Solutions for contemporary kitchens, wardrobes, furniture and modern spaces.',
    image: '/src/assets/images/category_modular_kitchen_1790787420869.jpg',
    keyFeatures: [
      'Space-maximizing modular kitchen fittings',
      'Ergonomic pull-out wire baskets & pantries',
      'Modern wardrobe organizer fittings',
      'Sleek aluminium profile shutter systems',
    ],
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-comm-ply',
    name: 'Commercial Plywood',
    category: 'Plywood',
    shortDesc:
      'Dependable calibrated plywood engineered for strong furniture fabrication, wall partitions, and structural woodwork.',
    availability: 'Available in Multiple Options',
    image: '/src/assets/images/category_plywood_sheets_1790787381303.jpg',
    highlightPoints: ['Superior bonding strength', 'Uniform thickness', 'Minimal warping'],
  },
  {
    id: 'prod-int-ply',
    name: 'Interior Plywood',
    category: 'Plywood',
    shortDesc:
      'Selected quality interior-grade plywood suited for bedroom wardrobes, living room units, and decorative paneling.',
    availability: 'Available in Multiple Options',
    image: '/src/assets/images/category_plywood_sheets_1790787381303.jpg',
    highlightPoints: ['Smooth face veneer', 'Easy screw holding', 'Reliable longevity'],
  },
  {
    id: 'prod-dec-lam',
    name: 'Decorative Laminates',
    category: 'Laminates',
    shortDesc:
      'Contemporary textures, solid pastels, fluted patterns, and authentic woodgrain sheets for designer finishes.',
    availability: 'Available in Multiple Options',
    image: '/src/assets/images/category_laminates_swatches_1790787393865.jpg',
    highlightPoints: ['Rich tactile texture', 'Easy maintenance', 'UV resistant surfaces'],
  },
  {
    id: 'prod-kit-hard',
    name: 'Kitchen Hardware',
    category: 'Hardware Fittings',
    shortDesc:
      'Precision soft-closing hinges, lift-up pump stays, and heavy-duty concealed slides for modern kitchens.',
    availability: 'Available in Multiple Options',
    image: '/src/assets/images/category_hardware_fittings_1790787407417.jpg',
    highlightPoints: ['Effortless soft closing', 'Corrosion-resistant finish', 'Smooth action'],
  },
  {
    id: 'prod-ward-hard',
    name: 'Wardrobe Hardware',
    category: 'Hardware Fittings',
    shortDesc:
      'Sleek sliding channel systems, concealed wardrobe locks, and designer brushed metal edge profile handles.',
    availability: 'Available in Multiple Options',
    image: '/src/assets/images/category_hardware_fittings_1790787407417.jpg',
    highlightPoints: ['Silent glide runners', 'Architectural aesthetics', 'Long lifecycle'],
  },
  {
    id: 'prod-mod-acc',
    name: 'Modular Accessories',
    category: 'Modular Solutions',
    shortDesc:
      'Corner pantry carousels, modular pull-out spice racks, cutlery trays, and smart wardrobe storage solutions.',
    availability: 'Available in Multiple Options',
    image: '/src/assets/images/category_modular_kitchen_1790787420869.jpg',
    highlightPoints: ['Maximizes corner storage', 'Stainless steel quality', 'Ergonomic layout'],
  },
];

export const WHY_CHOOSE_US = [
  {
    index: '01',
    title: 'Premium Quality',
    description: 'Quality-focused products for dependable interior applications.',
    detail: 'Every material is curated to ensure durability, structural integrity, and long service life.',
  },
  {
    index: '02',
    title: 'Wide Range',
    description: 'Explore plywood, laminates, hardware and modular solutions under one roof.',
    detail: 'Complete one-stop interior material sourcing saving contractors, architects, and owners valuable time.',
  },
  {
    index: '03',
    title: 'Affordable Pricing',
    description: 'Quality products at competitive prices.',
    detail: 'Direct and transparent commercial pricing tailored to residential renovations and commercial projects.',
  },
  {
    index: '04',
    title: 'Timely Delivery',
    description: 'Reliable service focused on timely requirements.',
    detail: 'Prompt dispatch and order fulfillment to keep your on-site carpentry work on schedule.',
  },
  {
    index: '05',
    title: 'Customer Satisfaction',
    description: 'Customer needs remain at the heart of our service.',
    detail: 'Attentive personal assistance, material guidance, and dedicated post-purchase support.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modular Kitchen Cabinetry',
    category: 'Modular Kitchens',
    image: '/src/assets/images/category_modular_kitchen_1790787420869.jpg',
    caption: 'Modern matte finished cabinetry with integrated under-cabinet lighting and smooth hardware.',
  },
  {
    id: 'gal-2',
    title: 'Architectural Hardware & Hinges',
    category: 'Hardware Details',
    image: '/src/assets/images/category_hardware_fittings_1790787407417.jpg',
    caption: 'Brushed brass and dark metallic pulls paired with heavy-duty soft-close hinges.',
  },
  {
    id: 'gal-3',
    title: 'Living Room Wood Paneling',
    category: 'Wooden Interiors',
    image: '/src/assets/images/hero_luxury_interior_1790787366979.jpg',
    caption: 'Fluted wood accents and calibrated plywood framework creating a warm architectural focal wall.',
  },
  {
    id: 'gal-4',
    title: 'Decorative Surface Swatches',
    category: 'Premium Laminate Finishes',
    image: '/src/assets/images/category_laminates_swatches_1790787393865.jpg',
    caption: 'Curated swatches showing woodgrain textures and anti-fingerprint matte surfaces.',
  },
  {
    id: 'gal-5',
    title: 'Calibrated Plywood Stacks',
    category: 'Plywood Solutions',
    image: '/src/assets/images/category_plywood_sheets_1790787381303.jpg',
    caption: 'Uniform thickness and smooth core construction ready for high-end interior carpentry.',
  },
  {
    id: 'gal-6',
    title: 'Contemporary Modular Wardrobe',
    category: 'Wardrobes & Closets',
    image: '/src/assets/images/category_modular_kitchen_1790787420869.jpg',
    caption: 'Spacious wardrobe systems designed with quiet sliding tracks and optimized shelving.',
  },
];

export const HOW_WE_HELP_STEPS = [
  {
    step: '01',
    title: 'Choose Your Requirement',
    description: 'Share your project details—whether you need plywood sheets, decorative laminates, or fittings.',
  },
  {
    step: '02',
    title: 'Explore Materials & Designs',
    description: 'Browse versatile textures, grades, and hardware options suited to your space and interior aesthetics.',
  },
  {
    step: '03',
    title: 'Get Expert Assistance',
    description: 'Receive personalized material recommendations, transparent quotes, and quantity estimations.',
  },
  {
    step: '04',
    title: 'Complete Your Project',
    description: 'Get your orders fulfilled promptly with dependable quality so your project proceeds without delays.',
  },
];

export function generateWhatsAppLink(
  phoneNumber: string = '9977791949',
  customMessage?: string
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const internationalPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  const message = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${internationalPhone}?text=${encodeURIComponent(message)}`;
}

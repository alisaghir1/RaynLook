export const products = [
  {
    id: 1,
    slug: "crystal-vision-pro",
    name: "Crystal Vision Pro",
    description: "Daily Clear Lenses",
    price: "$45",
    originalPrice: "$60",
    color: "Crystal Clear",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    badge: "Bestseller",
    badgeColor: "bg-green-500",
    featured: true,
    category: "daily",
    inStock: true,
    description_long: "Experience unparalleled clarity with our premium daily contact lenses. Perfect for everyday wear with maximum comfort.",
    features: ["UV Protection", "Moisture Lock", "Breathable Material", "Easy Application"],
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Silicone Hydrogel",
      waterContent: "58%",
      oxygenPermeability: "160 Dk/t",
      replacement: "Daily",
      uvProtection: "Yes"
    }
  },
  {
    id: 2,
    slug: "emerald-dreams",
    name: "Emerald Dreams",
    description: "Colored Contact Lenses",
    price: "$38",
    originalPrice: "$50",
    color: "Emerald Green",
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1585652757141-b4a997d78d24?w=400&h=400&fit=crop",
    badge: "New",
    badgeColor: "bg-blue-500",
    featured: true,
    category: "colored",
    inStock: true,
    description_long: "Transform your look with stunning emerald green lenses that blend naturally with your eyes.",
    features: ["Natural Look", "Color Enhancement", "Comfortable Wear", "FDA Approved"],
    gallery: [
      "https://images.unsplash.com/photo-1585652757141-b4a997d78d24?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0f06ba09d65?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Hydrogel",
      waterContent: "45%",
      oxygenPermeability: "130 Dk/t",
      replacement: "Monthly",
      colorType: "Enhancement"
    }
  },
  {
    id: 3,
    slug: "ocean-blue-elite",
    name: "Ocean Blue Elite",
    description: "Monthly Wear Collection",
    price: "$42",
    originalPrice: "$55",
    color: "Ocean Blue",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=400&fit=crop",
    badge: "Popular",
    badgeColor: "bg-purple-500",
    featured: true,
    category: "monthly",
    inStock: true,
    description_long: "Dive into stunning ocean blue eyes with our premium monthly collection for extended wear comfort.",
    features: ["Extended Wear", "High Oxygen", "Deposit Resistant", "Superior Comfort"],
    gallery: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Silicone Hydrogel",
      waterContent: "48%",
      oxygenPermeability: "175 Dk/t",
      replacement: "Monthly",
      colorType: "Opaque"
    }
  },
  {
    id: 4,
    slug: "golden-hour",
    name: "Golden Hour",
    description: "Luxury Eye Enhancement",
    price: "$52",
    originalPrice: "$70",
    color: "Honey Gold",
    rating: 5.0,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    badge: "Premium",
    badgeColor: "bg-customGold",
    featured: true,
    category: "luxury",
    inStock: true,
    description_long: "Luxury honey gold lenses that capture the warmth of golden hour lighting in your eyes.",
    features: ["Luxury Design", "Premium Material", "Natural Enhancement", "Long Lasting"],
    gallery: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585652757141-b4a997d78d24?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Premium Silicone Hydrogel",
      waterContent: "55%",
      oxygenPermeability: "180 Dk/t",
      replacement: "Monthly",
      luxuryFeatures: "Gold Tint Technology"
    }
  },
  {
    id: 5,
    slug: "midnight-gray",
    name: "Midnight Gray",
    description: "Professional Series",
    price: "$40",
    originalPrice: "$53",
    color: "Stormy Gray",
    rating: 4.6,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    badge: "Trending",
    badgeColor: "bg-red-500",
    featured: false,
    category: "professional",
    inStock: true,
    description_long: "Professional stormy gray lenses perfect for business settings and sophisticated looks.",
    features: ["Professional Look", "Subtle Enhancement", "All-Day Comfort", "Professional Grade"],
    gallery: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0f06ba09d65?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Hydrogel",
      waterContent: "42%",
      oxygenPermeability: "140 Dk/t",
      replacement: "Bi-weekly",
      professionalGrade: "Yes"
    }
  },
  {
    id: 6,
    slug: "hazel-magic",
    name: "Hazel Magic",
    description: "Natural Enhancement",
    price: "$35",
    originalPrice: "$48",
    color: "Natural Hazel",
    rating: 4.5,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop",
    badge: "Natural",
    badgeColor: "bg-green-600",
    featured: true,
    category: "natural",
    inStock: true,
    description_long: "Natural hazel enhancement that brings out the beauty of your natural eye color.",
    features: ["Natural Enhancement", "Subtle Color", "Daily Comfort", "Easy Care"],
    gallery: [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Silicone Hydrogel",
      waterContent: "50%",
      oxygenPermeability: "155 Dk/t",
      replacement: "Daily",
      enhancementType: "Natural"
    }
  },
  {
    id: 7,
    slug: "sapphire-dreams",
    name: "Sapphire Dreams",
    description: "Weekly Collection",
    price: "$33",
    originalPrice: "$45",
    color: "Deep Sapphire",
    rating: 4.4,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1594736797933-d0f06ba09d65?w=400&h=400&fit=crop",
    badge: "Weekly",
    badgeColor: "bg-indigo-500",
    featured: false,
    category: "weekly",
    inStock: true,
    description_long: "Rich sapphire blue lenses for a dramatic yet elegant transformation.",
    features: ["Weekly Wear", "Rich Color", "Comfortable Fit", "Easy Maintenance"],
    gallery: [
      "https://images.unsplash.com/photo-1594736797933-d0f06ba09d65?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585652757141-b4a997d78d24?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Hydrogel",
      waterContent: "43%",
      oxygenPermeability: "135 Dk/t",
      replacement: "Weekly",
      colorIntensity: "High"
    }
  },
  {
    id: 8,
    slug: "rose-gold-luxe",
    name: "Rose Gold Luxe",
    description: "Limited Edition",
    price: "$65",
    originalPrice: "$85",
    color: "Rose Gold",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
    badge: "Limited",
    badgeColor: "bg-pink-500",
    featured: true,
    category: "luxury",
    inStock: false,
    description_long: "Exclusive rose gold lenses with metallic undertones for a truly unique look.",
    features: ["Limited Edition", "Metallic Finish", "Luxury Comfort", "Collector's Item"],
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
    ],
    specifications: {
      material: "Premium Silicone Hydrogel",
      waterContent: "60%",
      oxygenPermeability: "190 Dk/t",
      replacement: "Monthly",
      limitedEdition: "Yes",
      metallicFinish: "Rose Gold"
    }
  }
];

// Helper functions
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured === true);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// New helper function for slug-based lookup
export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getInStockProducts = () => {
  return products.filter(product => product.inStock === true);
};

export const getProductsByRating = (minRating = 4.0) => {
  return products.filter(product => product.rating >= minRating);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.color.toLowerCase().includes(lowercaseQuery)
  );
};

// Categories
export const categories = [
  { id: 'daily', name: 'Daily Lenses', icon: '👁️' },
  { id: 'weekly', name: 'Weekly Lenses', icon: '📅' },
  { id: 'monthly', name: 'Monthly Lenses', icon: '🗓️' },
  { id: 'colored', name: 'Colored Lenses', icon: '🌈' },
  { id: 'natural', name: 'Natural Enhancement', icon: '🍃' },
  { id: 'professional', name: 'Professional Series', icon: '💼' },
  { id: 'luxury', name: 'Luxury Collection', icon: '✨' }
];
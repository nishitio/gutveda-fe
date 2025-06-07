import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useLeadCapture } from "@/hooks/useLeadCapture";

// Import the image from the public folder
import psylliumHuskImage from "/public/utils/images/image.png"; 
import psylliumHuskImage1 from "/public/utils/images/image11.png"
import psylliumPowderImage from "/public/utils/images/image2.png";
import psylliumPowderImage2 from "/public/utils/images/image22.png"
import capsuleImage from "/public/utils/images/image33.png";

const Products = () => {
  const [selectedFlavors, setSelectedFlavors] = useState<{[key: string]: string}> ({
    "psyllium-husk": "Unflavoured",
    "psyllium-powder": "Unflavoured",
    "psyllium-capsules": "Unflavoured",
  });

  // New state to manage the active image index for each product
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: string]: number }>({});

  const products = [
    {
      id: "psyllium-husk",
      name: "Psyllium Husk",
      images: [psylliumHuskImage, psylliumHuskImage1], // Use an array of images
      price: "",
      originalPrice: "",
      flavors: ["Unflavoured", "Orange"]
    },
    {
      id: "psyllium-powder",
      name: "Psyllium Powder",
      images: [psylliumPowderImage, psylliumPowderImage2], // Use an array of images
      price: "",
      originalPrice: "",
      flavors: ["Unflavoured", "Orange"]
    },
    {
      id: "psyllium-capsules",
      name: "Psyllium Capsules",
      images: [capsuleImage,capsuleImage], // Use an array of images
      price: "",
      originalPrice: "",
      flavors: ["Unflavoured"]
    }
  ];

  // Initialize activeImageIndex for all products
  useState(() => {
    const initialIndexes: { [key: string]: number } = {};
    products.forEach(product => {
      initialIndexes[product.id] = 0;
    });
    setActiveImageIndex(initialIndexes);
  });

  const handleFlavorChange = (productId: string, flavor: string) => {
    setSelectedFlavors(prev => ({
      ...prev,
      [productId]: flavor
    }));
  };

  const handleImageNav = (productId: string, direction: 'prev' | 'next') => {
    setActiveImageIndex(prev => {
      const currentProduct = products.find(p => p.id === productId);
      if (!currentProduct) return prev;
      const currentImageCount = currentProduct.images.length;
      const currentIndex = prev[productId] || 0;

      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % currentImageCount;
      } else {
        newIndex = (currentIndex - 1 + currentImageCount) % currentImageCount;
      }
      return { ...prev, [productId]: newIndex };
    });
  };

  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const reviewCapture = useLeadCapture({ 
    source: "product-review", 
  });

  const handleReviewClick = (productName: string, flavor: string) => {
    setActiveProduct(productName);
    reviewCapture.openModal(productName, flavor);
  };

  return (
    <section id="products" className="pt-16 pb-20">
      <div className="container mx-auto px-6">
        <div 
          className="text-center py-20 rounded-3xl relative bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542838686-e78d91c13d42?auto=format&fit=crop&w=1200&q=80')",
            backgroundPosition: 'center 60%'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Explore Our Pure Ayurvedic Range
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
            Crafted with ancient wisdom and modern purity for your holistic well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex flex-col">
              {/* Image with Carousel and Overlay */}
              <div className="relative w-full h-[520px] overflow-hidden">
                <img 
                  src={product.images[activeImageIndex[product.id] || 0]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-3xl"
                />
                
                {/* Product Name & Price Overlay (integrated) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-24 text-white">
                  <div className="flex justify-between items-end mb-3">
                    <h3 className="text-3xl font-bold leading-tight drop-shadow">{product.name}</h3>
                  </div>
                </div>

                {/* Navigation Arrows (on hover) */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleImageNav(product.id, 'prev'); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleImageNav(product.id, 'next'); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
                      {product.images.map((_, index) => (
                        <span
                          key={index}
                          className={`block w-2.5 h-2.5 rounded-full transition-all duration-300
                            ${activeImageIndex[product.id] === index ? 'bg-white scale-125' : 'bg-white/60'}`}
                        ></span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Product Details Section - Extremely compact */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">Select Flavor</label>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.flavors.map((flavor) => (
                      <button
                        key={flavor}
                        onClick={(e) => { e.stopPropagation(); handleFlavorChange(product.id, flavor); }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-300
                          ${selectedFlavors[product.id as keyof typeof selectedFlavors] === flavor
                            ? (flavor === 'Orange' ? 'bg-orange-500 text-white border-orange-500' : 'bg-emerald-600 text-white border-emerald-600') + ' shadow-md transform scale-105'
                            : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                          }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-end mt-auto">
                  <Button 
                    className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-full px-6 py-2.5 text-base font-semibold transform hover:scale-105 transition-transform duration-200 shadow-lg"
                    onClick={(e) => { e.stopPropagation(); handleReviewClick(product.name, selectedFlavors[product.id as keyof typeof selectedFlavors]); }}
                  >
                    Interested
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LeadCaptureModal 
        open={reviewCapture.isOpen} 
        onOpenChange={reviewCapture.closeModal}
        source={reviewCapture.source}
        productInterest={reviewCapture.productInterest}
        defaultProduct={reviewCapture.defaultProduct}
        flavor={reviewCapture.flavor}
      />
    </section>
  );
};

export default Products;

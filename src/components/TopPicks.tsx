
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopPicks = () => {
  const products = [
    {
      id: 1,
      name: "Matcha Powder",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=400&q=80",
      price: "$24.99",
      originalPrice: "$32.99",
      rating: 5,
      reviews: 127,
      organic: true
    },
    {
      id: 2,
      name: "Cacao Powder",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      price: "$18.99",
      originalPrice: "$24.99",
      rating: 5,
      reviews: 89,
      organic: true
    },
    {
      id: 3,
      name: "Coconut Oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
      price: "$16.99",
      originalPrice: null,
      rating: 4,
      reviews: 234,
      organic: true
    },
    {
      id: 4,
      name: "Spirulina Powder",
      image: "https://images.unsplash.com/photo-1609501676725-7186f734fd09?auto=format&fit=crop&w=400&q=80",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 5,
      reviews: 156,
      organic: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Your Top Picks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden bg-gray-100 rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.organic && (
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    ORGANIC
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-none"
                  size="sm"
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;

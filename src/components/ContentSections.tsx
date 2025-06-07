
const ContentSections = () => {
  return (
    <div className="bg-white">
      {/* Back to Roots section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl font-bold text-gray-900">back to roots</h2>
                <div className="text-right">
                  <div className="text-sm text-green-600">100%</div>
                  <div className="text-xs text-gray-500">ORGANIC</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800">
                Building healthy habits is easier with NaturaleBio
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Our commitment to pure, organic ingredients means you're getting the most 
                potent and effective superfoods nature has to offer. Every product is 
                carefully sourced and tested to ensure maximum nutritional value.
              </p>
              
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                LEARN MORE →
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80"
                alt="Healthy breakfast bowl"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rituals section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Rituals, Roots & Real Talk
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
                alt="Green smoothie"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Summer Detox drink, a superfood summer drink
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Cool down this summer with our refreshing detox blend...
                </p>
                <button className="text-green-600 text-sm font-semibold">
                  READ MORE
                </button>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80"
                alt="Breakfast setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Every recipe with superfoods, many healing foods
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Transform your meals with nutrient-dense superfoods...
                </p>
                <button className="text-green-600 text-sm font-semibold">
                  READ MORE
                </button>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
                alt="Matcha preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Exploring what is the root of plant which is the solution
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Discover the ancient wisdom behind plant-based healing...
                </p>
                <button className="text-green-600 text-sm font-semibold">
                  READ MORE
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Morning Ritual section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80"
            alt="Morning ritual"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate your morning ritual
            </h2>
            
            <p className="text-xl mb-8 text-gray-300">
              Start each day with intention and nourishment. Our morning blends 
              are crafted to energize your body and mind naturally.
            </p>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-none font-semibold transition-colors">
              DISCOVER MORNING BLENDS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;

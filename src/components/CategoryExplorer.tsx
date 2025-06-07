
const CategoryExplorer = () => {
  const categories = [
    {
      name: "Matcha & Infusions",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=400&q=80",
      color: "text-green-100"
    },
    {
      name: "Powders",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      color: "text-red-100"
    },
    {
      name: "Foods",
      image: "https://images.unsplash.com/photo-1609501676725-7186f734fd09?auto=format&fit=crop&w=400&q=80",
      color: "text-orange-100"
    },
    {
      name: "Capsules",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
      color: "text-yellow-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore by Category
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className={`text-xl font-bold text-center ${category.color} px-4`}>
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryExplorer;

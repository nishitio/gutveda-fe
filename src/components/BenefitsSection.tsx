import React from "react";

const benefits = [
  {
    title: "Digestive Health",
    description: "Promotes healthy digestion and regular bowel movements with natural fiber",
    icon: "🌿"
  },
  {
    title: "Gut Microbiome",
    description: "Supports a balanced gut microbiome for optimal digestive function",
    icon: "🦠"
  },
  {
    title: "Natural Detox",
    description: "Helps in natural detoxification and waste elimination",
    icon: "✨"
  },
  {
    title: "Weight Management",
    description: "Supports healthy weight management through improved digestion",
    icon: "⚖️"
  }
];

const BenefitsSection = () => {
  return (
    <div className="py-20 bg-forest-green/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest-green mb-4">
            Why Choose GutVeda?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0">
            Experience the power of Ayurvedic wisdom combined with modern science for optimal gut health
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow
                border-2 border-forest-green/50 hover:border-forest-green/60
                hover:bg-white/100"
            >
              <div className="text-3xl sm:text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-serif text-forest-green mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center px-4 sm:px-0">
          <div className="inline-block bg-forest-green/20 rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <p className="text-forest-green font-serif text-sm sm:text-base">
              Made with 100% Natural Ingredients • No Artificial Additives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 
import React from "react";

const steps = [
  {
    number: "01",
    title: "Natural Fiber Intake",
    description: "GutVeda provides natural dietary fiber that helps maintain healthy digestion and regular bowel movements.",
    icon: "🌿"
  },
  {
    number: "02",
    title: "Gut Health Support",
    description: "The natural ingredients work together to support a healthy gut microbiome and improve digestive function.",
    icon: "🦠"
  },
  {
    number: "03",
    title: "Daily Wellness",
    description: "Regular consumption helps maintain overall wellness through improved gut health and natural detoxification.",
    icon: "✨"
  }
];

const HowItWorks = () => {
  return (
    <div className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-serif text-forest-green mb-4">
            How GutVeda Works
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0">
            Experience the natural power of Ayurvedic ingredients working in harmony with your body
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-forest-green/30 -mr-6" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 h-full
                border-2 border-forest-green/20 hover:border-forest-green/30
                transition-all duration-300 hover:shadow-xl shadow-lg"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 sm:-top-4 sm:left-8 bg-burnt-orange text-white 
                  w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-serif font-bold
                  shadow-lg text-sm sm:text-base"
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg sm:text-xl font-serif text-forest-green mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center px-4 sm:px-0">
          <div className="inline-block bg-forest-green/10 rounded-full px-4 py-2 sm:px-8 sm:py-4">
            <p className="text-forest-green font-serif text-sm sm:text-lg">
              Start Your Journey to Better Gut Health Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 
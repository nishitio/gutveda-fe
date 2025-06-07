
import { Check, Zap, Scale, Activity } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Activity,
      title: "Digestive Harmony",
      description: "Regulates bowel movements naturally, promoting comfortable and consistent digestion."
    },
    {
      icon: Scale,
      title: "Weight Management",
      description: "Creates a feeling of fullness, naturally reducing appetite and supporting healthy weight goals."
    },
    {
      icon: Zap,
      title: "Energy Balance",
      description: "Stabilizes blood sugar levels, providing sustained energy throughout your day."
    },
    {
      icon: Check,
      title: "Cholesterol Support",
      description: "Rich in soluble fiber that helps maintain healthy cholesterol levels naturally."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
            Nature's Complete Solution
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Discover how this ancient superfood supports your body's natural processes 
            for optimal health and vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-emerald-100 to-sage-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-900 mb-4">{benefit.title}</h3>
              <p className="text-sage-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-sage-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-sage-900 mb-6">How To Consume</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <p className="text-sage-700">
                    <strong>Step 1:</strong> Mix with water and psyllium husk begins to expand
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <p className="text-sage-700">
                    <strong>Step 2:</strong> Forms a gentle gel in your digestive tract
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <p className="text-sage-700">
                    <strong>Step 3:</strong> Supports healthy elimination and nutrient absorption
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sage-100 to-emerald-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80" 
                alt="Natural orange flowers"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;


import { Heart, Shield, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
            Why Your Gut Health Matters
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            In today's fast-paced world, we often neglect the foundation of our health—our digestive system. 
            Poor fiber intake leads to digestive issues, weight gain, and overall wellness imbalance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-900 mb-2">Gentle Yet Powerful</h3>
                <p className="text-sage-600 leading-relaxed">
                  Psyllium husk works naturally with your body, forming a gentle gel that supports 
                  healthy digestion without harsh chemicals or artificial additives.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-900 mb-2">Time-Tested Safety</h3>
                <p className="text-sage-600 leading-relaxed">
                  Used for over a millennium in Ayurvedic medicine, psyllium husk has stood the test 
                  of time as a safe, effective solution for digestive wellness.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-900 mb-2">Holistic Wellness</h3>
                <p className="text-sage-600 leading-relaxed">
                  Beyond digestive health, psyllium husk supports weight management, cholesterol 
                  regulation, and blood sugar stability—your body's natural balance restored.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-sage-100 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80" 
                alt="Natural sunlight through leaves"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-sage-100">
              <div className="text-2xl font-bold text-emerald-600 mb-1">85%</div>
              <div className="text-sage-700 text-sm">Soluble Fiber Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

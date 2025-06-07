
import { Clock, MapPin, Users } from "lucide-react";

const Heritage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
              alt="Peaceful water surrounded by trees"
              className="rounded-3xl object-cover w-full h-96 shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-emerald-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-2xl font-bold mb-1">1000+</div>
              <div className="text-emerald-100 text-sm">Years of Wisdom</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
                Ancient Wisdom, Modern Science
              </h2>
              <p className="text-xl text-sage-600 leading-relaxed mb-8">
                Derived from the seeds of Plantago ovata, psyllium husk has been a cornerstone 
                of Ayurvedic medicine for over a millennium, quietly supporting digestive wellness 
                in Indian households across generations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-2">Time-Tested Tradition</h3>
                  <p className="text-sage-600 leading-relaxed">
                    For centuries, families have passed down the knowledge of psyllium's gentle 
                    power, making it a trusted remedy across generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-2">Rooted in Nature</h3>
                  <p className="text-sage-600 leading-relaxed">
                    Sourced from the pristine fields where Plantago ovata grows naturally, 
                    our psyllium husk maintains its pure, potent qualities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sage-100 p-3 rounded-xl flex-shrink-0">
                  <Users className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-2">Holistic Lifestyle</h3>
                  <p className="text-sage-600 leading-relaxed">
                    More than a supplement, it's a return to natural wellness practices 
                    that honor your body's innate wisdom and balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;

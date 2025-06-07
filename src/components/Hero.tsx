import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useLeadCapture } from "@/hooks/useLeadCapture";

const Hero = () => {
  const primaryCapture = useLeadCapture({ 
    source: "hero-primary", 
    // productInterest and defaultProduct are now set dynamically in openModal
  });
  const secondaryCapture = useLeadCapture({ 
    source: "hero-secondary", 
    // productInterest and defaultProduct are now set dynamically in openModal
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sage-50 to-sage-100 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-sage-300"></div>
        <div className="absolute top-32 right-20 w-20 h-20 rounded-full bg-emerald-300"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-sage-400"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-sage-200">
            <Leaf className="w-5 h-5 text-sage-600" />
            <span className="text-sage-700 font-medium">100% Natural & Ayurvedic</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-sage-900 mb-6 leading-tight">
          Ancient Wisdom for
          <span className="text-emerald-600 block">Modern Wellness</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-sage-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the power of psyllium husk—nature's gentle solution for gut health, 
          trusted by Ayurveda for over 1000 years.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg group"
            onClick={() => primaryCapture.openModal("psyllium-husk", "psyllium-husk")}
          >
            Join Our Wellness Community
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-4 rounded-full text-lg"
            onClick={() => secondaryCapture.openModal("general-info", "psyllium-husk")}
          >
            Get Early Access
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-sage-700">Years of Traditional Use</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-sage-700">Natural & Pure</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24hr</div>
            <div className="text-sage-700">Gentle Relief</div>
          </div>
        </div>
      </div>

      <LeadCaptureModal 
        open={primaryCapture.isOpen} 
        onOpenChange={primaryCapture.closeModal}
        source={primaryCapture.source}
        productInterest={primaryCapture.productInterest}
        defaultProduct={primaryCapture.defaultProduct}
      />
      
      <LeadCaptureModal 
        open={secondaryCapture.isOpen} 
        onOpenChange={secondaryCapture.closeModal}
        source={secondaryCapture.source}
        productInterest={secondaryCapture.productInterest}
        defaultProduct={secondaryCapture.defaultProduct}
      />
    </div>
  );
};

export default Hero;

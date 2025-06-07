import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useLeadCapture } from "@/hooks/useLeadCapture";

const CTA = () => {
  const primaryCapture = useLeadCapture({ 
    source: "cta-primary", 
    // productInterest and defaultProduct are now set dynamically in openModal
  });
  const secondaryCapture = useLeadCapture({ 
    source: "cta-secondary", 
    // productInterest and defaultProduct are now set dynamically in openModal
  });

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-sage-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your Wellness Journey Today
          </h2>
          
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
            Join thousands who've discovered the gentle power of ancient Ayurvedic wisdom. 
            Your body deserves to feel balanced, light, and naturally healthy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 rounded-full text-lg font-semibold group"
              onClick={() => primaryCapture.openModal("waitlist", "psyllium-husk")}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg"
              onClick={() => secondaryCapture.openModal("product-updates", "psyllium-husk")}
            >
              Be the First to Know
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">Free Shipping</div>
              <div className="text-emerald-100">On launch orders over $25</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">30-Day Guarantee</div>
              <div className="text-emerald-100">Risk-free trial promise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-2xl font-bold text-white mb-2">Expert Support</div>
              <div className="text-emerald-100">Wellness guidance included</div>
            </div>
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
    </section>
  );
};

export default CTA;

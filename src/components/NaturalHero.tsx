import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useLeadCapture } from "@/hooks/useLeadCapture";

const NaturalHero = () => {
  const shopCapture = useLeadCapture({
    source: "hero-shop",
  });

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80')"
             }}>
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-wide text-green-300">100% ORGANIC. 100% YOU. NATURALLY</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            A journey to the roots
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed text-gray-200">
            We create pure nutrient-rich superfoods. Carefully harvested and crafted to support your
            everyday rituals.
          </p>
          
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-none text-lg group"
            onClick={() => shopCapture.openModal()}
          >
            Intrested
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <LeadCaptureModal 
        open={shopCapture.isOpen} 
        onOpenChange={shopCapture.closeModal}
        source={shopCapture.source}
        productInterest={shopCapture.productInterest}
        defaultProduct={shopCapture.defaultProduct}
      />
    </section>
  );
};

export default NaturalHero;

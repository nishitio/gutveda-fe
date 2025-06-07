import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useLeadCapture } from "@/hooks/useLeadCapture";

const Header = () => {
  const contactCapture = useLeadCapture({ 
    source: "header-contact", 
    // productInterest and defaultProduct are now set dynamically in openModal
  });

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="text-4xl font-bold text-orange-600">
              Gut<span className="text-emerald-600">Veda</span>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#products" className="text-sage-700 hover:text-emerald-600 transition-colors">Products</a>
              <a href="#benefits" className="text-sage-700 hover:text-emerald-600 transition-colors">Benefits</a>
              <a href="#recipes" className="text-sage-700 hover:text-emerald-600 transition-colors">Recipes</a>
              <a href="#about" className="text-sage-700 hover:text-emerald-600 transition-colors">About Us</a>
            </nav>
          </div>

          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => contactCapture.openModal("contact", "psyllium-husk")}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <LeadCaptureModal 
        open={contactCapture.isOpen} 
        onOpenChange={contactCapture.closeModal}
        source={contactCapture.source}
        productInterest={contactCapture.productInterest}
        defaultProduct={contactCapture.defaultProduct}
      />
    </header>
  );
};

export default Header;

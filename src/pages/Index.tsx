import React, { useState } from "react";
import LeafBackground from "@/components/LeafBackground";
import BotanicalBackground from "@/components/BotanicalBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MiddleTaglineSection from "@/components/MiddleTaglineSection";
import BottomBanner from "@/components/BottomBanner";
import FloatingPouch from "@/components/FloatingPouch";
import ProductFormats from "@/components/ProductFormats";
import ProductModal from "../components/ProductModal";
import BenefitsSection from "../components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  const [format, setFormat] = useState("finepowder");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getProductImage = () => {
    switch (format) {
      case "finepowder":
        return "/assets/pouch.png";
      case "husk":
        return "/assets/husk.png";
      case "tablets":
        return "/assets/tablets.png";
      default:
        return "/assets/pouch.png";
    }
  };

  return (
    <div className="min-h-screen bg-beige relative overflow-x-hidden">
      <LeafBackground />
      <BotanicalBackground />
      <Header />
      <HeroSection>
        <div className="flex items-center gap-6 mb-8">
          <button
            className="bg-burnt-orange text-white rounded-lg px-8 py-3 font-bold text-base shadow hover:bg-orange-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Interested
          </button>
          <ProductFormats format={format} setFormat={setFormat} />
        </div>
      </HeroSection>
      <FloatingPouch format={format} />
      <MiddleTaglineSection />
      <BenefitsSection />
      <HowItWorks />
      <BottomBanner onBuyNow={() => setIsModalOpen(true)} />
      

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedFormat={format}
        productImage={getProductImage()}
      />
    </div>
  );
};

export default Index;

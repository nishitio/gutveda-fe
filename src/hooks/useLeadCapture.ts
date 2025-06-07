import { useState } from "react";

interface UseLeadCaptureProps {
  source?: string;
}

export const useLeadCapture = ({
  source = "general"
}: UseLeadCaptureProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProductInterest, setCurrentProductInterest] = useState<string>("psyllium-husk");
  const [currentDefaultProduct, setCurrentDefaultProduct] = useState<string>("psyllium-husk");
  const [currentFlavor, setCurrentFlavor] = useState<string>("Unflavoured");


  const openModal = (newProductInterest?: string, newDefaultProduct?: string, newFlavor?: string) => {
    if (newProductInterest) {
      setCurrentProductInterest(newProductInterest);
    }
    if (newDefaultProduct) {
      setCurrentDefaultProduct(newDefaultProduct);
    }
    if (newFlavor) {
      setCurrentFlavor(newFlavor);
    }
    setIsOpen(true);
  };
  
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
    source,
    productInterest: currentProductInterest,
    defaultProduct: currentDefaultProduct,
    flavor: currentFlavor,
  };
};

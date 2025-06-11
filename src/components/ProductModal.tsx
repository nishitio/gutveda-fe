import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFormat: string;
  productImage: string;
}

const ProductModal = ({ isOpen, onClose, selectedFormat, productImage }: ProductModalProps) => {
  const [selectedFlavor, setSelectedFlavor] = useState<'unflavoured' | 'orange'>('unflavoured');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const { toast } = useToast();

  const handleAddToCart = async () => {
    if (!showForm) {
      setShowForm(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const requestData = {
      ...formData,
      productFormat: selectedFormat,
      flavor: selectedFlavor,
      quantity: quantity
    };

    console.log('Sending data:', requestData);

    try {
      const response = await fetch('http://localhost:5050/api/leads/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 409) {
          toast({
            title: "Already Added!",
            description: data.message || 'You have already added this specific product and flavor combination to your cart.',
          });
          // Do not throw an error, just show the toast and reset submission state
          setIsSubmitting(false);
          return;
        }
        throw new Error(data.message || 'Failed to add to cart');
      }

      setSubmitStatus('success');
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your order. We will contact you shortly.",
        variant: "default",
      });
      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setShowForm(false);
        setFormData({ name: '', email: '' });
      }, 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setSubmitStatus('error');
      toast({
        title: "Order Failed",
        description: error.message || "Failed to complete order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-beige">
          <h2 className="text-2xl font-serif text-forest-green">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-beige rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-forest-green" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="aspect-square rounded-xl overflow-hidden bg-beige/10">
              <img
                src={productImage}
                alt={`GutVeda ${selectedFormat}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h3 className="text-xl font-serif text-forest-green mb-2">
                GutVeda {selectedFormat.charAt(0).toUpperCase() + selectedFormat.slice(1)}
              </h3>
              <p className="text-sm text-gray-600">
                Premium Ayurvedic supplement for optimal gut health and digestion.
              </p>
            </div>

            {/* Flavor Selection */}
            <div className="space-y-3">
              <h4 className="font-serif text-forest-green">Select Flavor</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedFlavor('unflavoured')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all
                    ${selectedFlavor === 'unflavoured'
                      ? 'border-burnt-orange bg-burnt-orange text-white'
                      : 'border-forest-green text-forest-green hover:bg-beige'
                    }
                  `}
                >
                  Unflavoured
                </button>
                <button
                  onClick={() => setSelectedFlavor('orange')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all
                    ${selectedFlavor === 'orange'
                      ? 'border-burnt-orange bg-burnt-orange text-white'
                      : 'border-forest-green text-forest-green hover:bg-beige'
                    }
                  `}
                >
                  Orange
                </button>
              </div>
            </div>

            {/* Price and Quantity */}
            <div className="space-y-3">
              <h4 className="font-serif text-forest-green">Price</h4>
              <div className="text-2xl font-serif text-burnt-orange">₹999</div>
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm text-gray-600">Quantity:</label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-forest-green rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Form */}
            {showForm && (
              <div className="space-y-4 pt-4 border-t border-beige">
                <h4 className="font-serif text-forest-green">Your Details</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 border border-forest-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 border border-forest-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                  />
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-serif text-lg transition-colors
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed'
                  : submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'bg-forest-green hover:bg-forest-green/90'
                }
                text-white shadow-lg hover:shadow-xl
              `}
            >
              {isSubmitting 
                ? 'Adding to Cart...'
                : submitStatus === 'success'
                  ? 'Added to Cart!'
                  : showForm
                    ? 'Complete survey'
                    : "I'm Interested"
              }
            </button>

            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Failed to add to cart. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal; 
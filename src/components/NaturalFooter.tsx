
const NaturalFooter = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-6xl md:text-8xl font-bold text-green-400 mb-4">
            NATURALE<span className="text-white">BIO</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your journey to natural wellness starts here. Pure, organic, transformative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-sm font-bold">f</div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-sm font-bold">t</div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-sm font-bold">i</div>
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest products and wellness tips.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NaturaleBio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NaturalFooter;

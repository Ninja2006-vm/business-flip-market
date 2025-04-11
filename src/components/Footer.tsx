
import { Link } from "react-router-dom";
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-businesskart-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-businesskart-300" />
              <span className="text-2xl font-bold">
                Business<span className="text-businesskart-300">Kart</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              BusinessKart connects entrepreneurs with opportunities to buy and sell startups and 
              unfinished business projects at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-businesskart-800 hover:bg-businesskart-700 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-businesskart-800 hover:bg-businesskart-700 p-2 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-businesskart-800 hover:bg-businesskart-700 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-businesskart-800 hover:bg-businesskart-700 p-2 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/saas" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Software / SaaS
                </Link>
              </li>
              <li>
                <Link to="/category/ecommerce" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link to="/category/mobile-apps" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/category/agencies" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Agencies / Services
                </Link>
              </li>
              <li>
                <Link to="/category/content" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Content / Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Business Valuation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Seller Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Buyer Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-businesskart-300 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-businesskart-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} BusinessKart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-businesskart-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-businesskart-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-businesskart-300 text-sm">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

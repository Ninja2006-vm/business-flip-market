
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-businesskart-500" />
            <span className="text-xl md:text-2xl font-bold text-businesskart-900">
              Business<span className="text-businesskart-500">Kart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-businesskart-500 font-medium">
              Home
            </Link>
            <Link to="/browse" className="text-gray-700 hover:text-businesskart-500 font-medium">
              Browse
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-businesskart-500 font-medium">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-businesskart-500 font-medium">
              About
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search businesses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-businesskart-300 focus:border-transparent"
              />
            </div>
            <Button className="btn-secondary px-4 py-2">Sign In</Button>
            <Button className="btn-primary px-4 py-2">List Business</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-businesskart-500"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-businesskart-500 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/browse"
                className="text-gray-700 hover:text-businesskart-500 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-700 hover:text-businesskart-500 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-businesskart-500 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-businesskart-300 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-2 pt-2">
                <Button className="btn-secondary px-4 py-2 flex-1">Sign In</Button>
                <Button className="btn-primary px-4 py-2 flex-1">List Business</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

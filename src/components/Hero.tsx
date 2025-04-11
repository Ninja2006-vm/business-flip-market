
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-businesskart-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-businesskart-900 mb-4">
                Buy & Sell Startups at <span className="text-businesskart-500">Discounted Rates</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                BusinessKart connects entrepreneurs with unique opportunities to buy established startups and unfinished business projects at competitive prices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary px-6 py-3 text-lg flex items-center gap-2">
                Browse Listings <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary px-6 py-3 text-lg">
                Sell Your Business
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-businesskart-100 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-businesskart-600" />
                </div>
                <div className="text-sm font-medium">
                  500+ Active Listings
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-businesskart-100 p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-businesskart-600" />
                </div>
                <div className="text-sm font-medium">
                  Verified Valuations
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="bg-businesskart-100 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-businesskart-600" />
                </div>
                <div className="text-sm font-medium">
                  Secure Transactions
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform rotate-3 absolute -top-4 -left-4 w-64 z-10">
              <div className="bg-green-50 px-3 py-1 text-green-600 text-xs font-semibold rounded-full inline-block mb-3">
                TRENDING
              </div>
              <h3 className="font-bold text-lg mb-2">Tech Startup</h3>
              <p className="text-gray-600 text-sm mb-4">SaaS platform with $25K MRR</p>
              <div className="flex justify-between items-center">
                <div className="text-businesskart-500 font-bold">$230,000</div>
                <div className="line-through text-gray-400 text-sm">$350,000</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform -rotate-2 absolute top-32 -right-8 w-72 z-0">
              <div className="bg-businesskart-50 px-3 py-1 text-businesskart-600 text-xs font-semibold rounded-full inline-block mb-3">
                NEW LISTING
              </div>
              <h3 className="font-bold text-lg mb-2">E-commerce Store</h3>
              <p className="text-gray-600 text-sm mb-4">Dropshipping business with established supply chain</p>
              <div className="flex justify-between items-center">
                <div className="text-businesskart-500 font-bold">$45,000</div>
                <div className="line-through text-gray-400 text-sm">$75,000</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform rotate-6 absolute bottom-0 left-16 w-64 z-20">
              <div className="bg-yellow-50 px-3 py-1 text-yellow-600 text-xs font-semibold rounded-full inline-block mb-3">
                HOT DEAL
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile App</h3>
              <p className="text-gray-600 text-sm mb-4">Fitness app with 50K active users</p>
              <div className="flex justify-between items-center">
                <div className="text-businesskart-500 font-bold">$120,000</div>
                <div className="line-through text-gray-400 text-sm">$200,000</div>
              </div>
            </div>
            
            <div className="h-[500px] lg:h-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import BusinessCard from "./BusinessCard";

const businesses = [
  {
    id: "1",
    title: "SaaS Analytics Platform",
    category: "Software / SaaS",
    description: "Established analytics platform with recurring subscription revenue and a growing user base.",
    price: 230000,
    originalPrice: 350000,
    revenue: "$25K MRR",
    users: "1,200+",
    established: "2019",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    isFeatured: true,
    isHot: true,
  },
  {
    id: "2",
    title: "E-commerce Fashion Store",
    category: "E-commerce",
    description: "Profitable dropshipping business with established supply chain and customer base.",
    price: 45000,
    originalPrice: 75000,
    revenue: "$8K MRR",
    users: "15K+",
    established: "2020",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "3",
    title: "Fitness Mobile App",
    category: "Mobile App",
    description: "Fitness tracking app with premium subscription model and loyal customer base.",
    price: 120000,
    originalPrice: 200000,
    revenue: "$12K MRR",
    users: "50K+",
    established: "2018",
    image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2070&auto=format&fit=crop",
    isHot: true,
  },
  {
    id: "4",
    title: "Content Marketing Agency",
    category: "Agency / Service",
    description: "Established marketing agency with long-term client contracts and team of freelancers.",
    price: 180000,
    originalPrice: 250000,
    revenue: "$20K MRR",
    users: "18 clients",
    established: "2017",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Productivity Chrome Extension",
    category: "Software / Browser Extension",
    description: "Popular Chrome extension for productivity with freemium model and enterprise customers.",
    price: 75000,
    originalPrice: 120000,
    revenue: "$5K MRR",
    users: "100K+",
    established: "2021",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "6",
    title: "Educational Platform",
    category: "EdTech",
    description: "Online course platform with existing content library and subscription revenue model.",
    price: 280000,
    originalPrice: 400000,
    revenue: "$30K MRR",
    users: "5K students",
    established: "2019",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    isFeatured: true,
  },
];

const categories = [
  "All Categories",
  "Software / SaaS",
  "E-commerce",
  "Mobile App",
  "Agency / Service",
  "Content / Media",
  "EdTech",
];

const FeaturedListings = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [showFilters, setShowFilters] = useState(false);

  const filteredBusinesses = activeCategory === "All Categories"
    ? businesses
    : businesses.filter(business => business.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-businesskart-900 mb-2">Featured Business Listings</h2>
            <p className="text-gray-600">Discover vetted businesses available at discounted prices</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="btn-primary px-6 py-2 flex items-center gap-2">
              View All Listings <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="hidden md:flex space-x-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`whitespace-nowrap px-4 py-2 text-sm ${
                    activeCategory === category 
                      ? "bg-businesskart-500 hover:bg-businesskart-600 text-white" 
                      : "bg-white hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="md:hidden btn-secondary flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} /> 
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {showFilters && (
            <div className="flex md:hidden flex-wrap gap-2 mb-4">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`whitespace-nowrap px-4 py-2 text-sm ${
                    activeCategory === category 
                      ? "bg-businesskart-500 hover:bg-businesskart-600 text-white" 
                      : "bg-white hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map(business => (
            <BusinessCard
              key={business.id}
              {...business}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="btn-secondary px-6 py-2 flex mx-auto items-center gap-2">
            Load More <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;

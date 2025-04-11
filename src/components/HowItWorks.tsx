
import { Search, Briefcase, CheckCircle2, FileCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse Listings",
    description: "Explore our curated marketplace of startups and businesses available for acquisition.",
    icon: <Search className="h-8 w-8 text-white" />,
    iconBg: "bg-businesskart-500",
  },
  {
    id: 2,
    title: "Evaluate Opportunities",
    description: "Review detailed metrics, financials, and growth potential of each business listing.",
    icon: <FileCheck className="h-8 w-8 text-white" />,
    iconBg: "bg-businesskart-600",
  },
  {
    id: 3,
    title: "Secure Transaction",
    description: "Use our secure escrow service to safely complete your business acquisition.",
    icon: <Briefcase className="h-8 w-8 text-white" />,
    iconBg: "bg-businesskart-700",
  },
  {
    id: 4,
    title: "Takeover Business",
    description: "Seamlessly transition ownership with our comprehensive handover support.",
    icon: <CheckCircle2 className="h-8 w-8 text-white" />,
    iconBg: "bg-businesskart-800",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-businesskart-900 mb-4">How BusinessKart Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes buying and selling businesses simple, secure and transparent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className={`${step.iconBg} rounded-full p-5 mb-6`}>
                  {step.icon}
                </div>
                {step.id < steps.length && (
                  <div className="hidden lg:block absolute top-1/2 -right-1/2 transform -translate-y-1/2 w-full border-t-2 border-dashed border-gray-200"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-businesskart-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-businesskart-900 mb-4">Ready to buy or sell a business?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking to acquire a startup or sell your business, BusinessKart provides the platform, tools, and support you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary px-6 py-3 rounded-md">Browse Listings</button>
            <button className="btn-secondary px-6 py-3 rounded-md">List Your Business</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

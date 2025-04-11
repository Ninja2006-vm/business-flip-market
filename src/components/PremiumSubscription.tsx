
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PremiumSubscription = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans: SubscriptionPlan[] = [
    {
      id: "basic",
      name: "Basic",
      price: billingCycle === "monthly" ? "₹999" : "₹9,999",
      description: "Essential features for business buyers",
      features: [
        "Browse all listings",
        "Basic business analytics",
        "Email support",
        "Save up to 10 favorites",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: billingCycle === "monthly" ? "₹2,999" : "₹29,999",
      description: "Advanced features for serious buyers",
      features: [
        "All Basic features",
        "Priority access to Hot Deals",
        "Advanced business analytics",
        "1 free consultation per month",
        "Unlimited favorites",
        "Phone support",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: billingCycle === "monthly" ? "₹7,999" : "₹79,999",
      description: "Complete solution for business investors",
      features: [
        "All Premium features",
        "Exclusive Hot Deals access",
        "Comprehensive data analytics",
        "3 consultations per month",
        "Dedicated account manager",
        "Due diligence support",
        "Custom business valuations",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-businesskart-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-businesskart-900 mb-4">
            Premium Subscription Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive features, hot deals, and expert consulting services with our premium subscription plans.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="flex items-center bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white shadow-sm text-businesskart-900"
                    : "text-gray-500"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-white shadow-sm text-businesskart-900"
                    : "text-gray-500"
                }`}
              >
                Yearly
                <span className="ml-1 text-xs font-bold text-businesskart-500">
                  (Save 15%)
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl border ${
                plan.popular
                  ? "border-businesskart-500 shadow-lg"
                  : "border-gray-200"
              } bg-white p-6 transition-all hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-businesskart-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/{billingCycle === "monthly" ? "month" : "year"}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-businesskart-500 shrink-0 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-2 ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Subscribe Now
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-white p-8 rounded-xl border border-businesskart-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
          <p className="text-gray-600 mb-6">
            Need a customized solution for your business investment needs? Contact our team for a personalized plan.
          </p>
          <Button className="btn-primary px-8">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumSubscription;

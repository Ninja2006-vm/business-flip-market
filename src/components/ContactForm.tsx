import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to your backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-businesskart-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about buying or selling a business? Our team is here to help you navigate the process.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-businesskart-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-businesskart-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@businesskart.com</p>
                  <p className="text-gray-600">support@businesskart.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-businesskart-50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-businesskart-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-businesskart-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-businesskart-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600">RV College of Engineering, Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-businesskart-500" />
              <h3 className="font-bold text-xl">Send us a message</h3>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-businesskart-300 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-businesskart-300 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-businesskart-300 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-businesskart-300 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button type="submit" className="btn-primary px-8 py-3 w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

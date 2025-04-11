
import { Eye, Heart, DollarSign, TrendingUp, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BusinessCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  revenue: string;
  users: string;
  established: string;
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isHot?: boolean;
}

const BusinessCard = ({
  id,
  title,
  category,
  description,
  price,
  originalPrice,
  revenue,
  users,
  established,
  image,
  isFeatured,
  isNew,
  isHot,
}: BusinessCardProps) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {isFeatured && (
            <div className="bg-purple-100 px-3 py-1 text-purple-600 text-xs font-semibold rounded-full">
              FEATURED
            </div>
          )}
          {isNew && (
            <div className="bg-businesskart-50 px-3 py-1 text-businesskart-600 text-xs font-semibold rounded-full">
              NEW
            </div>
          )}
          {isHot && (
            <div className="bg-red-50 px-3 py-1 text-red-600 text-xs font-semibold rounded-full">
              HOT DEAL
            </div>
          )}
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50">
            <Heart className="h-4 w-4 text-gray-500" />
          </button>
          <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50">
            <Eye className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        <div className="absolute bottom-3 right-3 bg-businesskart-500 text-white font-bold px-3 py-1 rounded-full text-sm">
          {discount}% OFF
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-businesskart-900">{title}</h3>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
          <div className="text-right">
            <div className="text-businesskart-500 font-bold text-lg">
              ${price.toLocaleString()}
            </div>
            <div className="line-through text-gray-400 text-xs">
              ${originalPrice.toLocaleString()}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <DollarSign className="h-3 w-3 mr-1" /> Revenue
            </div>
            <div className="font-medium text-sm">{revenue}</div>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Users className="h-3 w-3 mr-1" /> Users
            </div>
            <div className="font-medium text-sm">{users}</div>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Calendar className="h-3 w-3 mr-1" /> Est.
            </div>
            <div className="font-medium text-sm">{established}</div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className="btn-primary flex-1 py-2">View Details</Button>
          <Button variant="outline" className="btn-secondary py-2">Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

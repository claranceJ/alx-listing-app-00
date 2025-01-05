// components/PropertyCard.tsx
import { PropertyProps } from "../interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-600">{`${property.address.city}, ${property.address.state}, ${property.address.country}`}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{property.rating}</span>
        </div>
        <p className="mt-2 text-gray-800">
          {property.category.join(", ")}
        </p>
        <div className="mt-4">
          <p className="text-lg font-semibold">${property.price}/night</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

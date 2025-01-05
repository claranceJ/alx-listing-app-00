// pages/index.tsx
import { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import PropertyCard from "../components/common/Card";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProperties = selectedCategory
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(selectedCategory)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-sm font-medium">
          Filter by Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-2 p-2 border rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Luxury Villa">Luxury Villa</option>
          <option value="Pool">Pool</option>
          <option value="Free Parking">Free Parking</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;

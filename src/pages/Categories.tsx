
import React from 'react';
import { categories } from '@/data/categories';
import CategoryCard from '@/components/CategoryCard';

const Categories = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Browse Categories</h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Explore our furniture categories to find the perfect pieces for every room in your home.
          From living room to bedroom, we've got everything you need to create your dream space.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;


import React from 'react';
import { categories } from '@/data/categories';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Browse Categories</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Explore our selection of furniture categories to find the perfect pieces for your home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;

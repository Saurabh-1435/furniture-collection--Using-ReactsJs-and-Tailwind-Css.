
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="section-padding bg-furniture-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Discover our selection of carefully curated furniture pieces to elevate your home décor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-furniture-primary hover:bg-furniture-secondary">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

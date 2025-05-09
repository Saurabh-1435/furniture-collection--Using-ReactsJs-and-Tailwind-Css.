
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const CategoryProducts = () => {
  const { id } = useParams<{ id: string }>();
  
  const category = useMemo(() => 
    categories.find(c => c.id === id), 
    [id]
  );
  
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return products.filter(product => product.category === category.name.toLowerCase());
  }, [category]);
  
  if (!category) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Category Not Found</h1>
          <p className="mb-6">Sorry, the category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">Return to Categories</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Button asChild variant="ghost" className="flex items-center">
            <Link to="/categories">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Link>
          </Button>
        </div>
        
        <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-lg md:text-xl">{category.description}</p>
            </div>
          </div>
        </div>
        
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products available in this category.</p>
            <Button asChild className="mt-4">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;

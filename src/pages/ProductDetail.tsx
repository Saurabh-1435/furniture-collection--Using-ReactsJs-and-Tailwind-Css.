
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ChevronLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => product && p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/products">Return to Products</Link>
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
            <Link to="/products">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-furniture-primary mb-4">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-sm text-gray-600">
                Availability: 
                <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                  {product.inStock ? ' In Stock' : ' Out of Stock'}
                </span>
              </p>
            </div>
            
            {product.inStock && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="number"
                    className="w-16 mx-2 text-center border border-gray-300 rounded-md"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            <Button
              onClick={handleAddToCart}
              className="w-full bg-furniture-primary hover:bg-furniture-secondary"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

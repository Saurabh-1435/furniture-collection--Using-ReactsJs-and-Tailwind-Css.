
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  
  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase.",
    });
    clearCart();
  };
  
  if (items.length === 0) {
    return (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="py-12">
            <div className="mb-6 flex justify-center">
              <ShoppingBag className="h-20 w-20 text-gray-300" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="hidden md:grid md:grid-cols-6 text-sm font-medium text-gray-700 bg-gray-50 p-4">
                <div className="md:col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Total</div>
              </div>
              
              {items.map((item) => (
                <div key={item.productId} className="border-t border-gray-200 p-4">
                  <div className="md:grid md:grid-cols-6 gap-4 flex flex-col items-center">
                    <div className="md:col-span-3 flex items-center space-x-4 w-full">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <Link to={`/product/${item.productId}`} className="text-lg font-medium text-gray-900 hover:text-furniture-primary">
                          {item.product.name}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="text-center mt-2 md:mt-0">
                      <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
                      ${item.product.price.toFixed(2)}
                    </div>
                    
                    <div className="flex items-center justify-center mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mt-2 md:mt-0">
                      <div className="flex items-center">
                        <span className="md:hidden text-sm text-gray-500 mr-2">Total:</span>
                        <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.productId)}
                          className="ml-2 text-gray-400 hover:text-red-500"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={clearCart}
                >
                  <Trash className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
                <Button asChild variant="outline">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleCheckout} 
                className="w-full bg-furniture-primary hover:bg-furniture-secondary"
              >
                Checkout
              </Button>
              
              <div className="mt-6 space-y-2">
                <h3 className="font-medium text-sm">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="bg-gray-100 rounded p-1 text-xs">Visa</div>
                  <div className="bg-gray-100 rounded p-1 text-xs">Mastercard</div>
                  <div className="bg-gray-100 rounded p-1 text-xs">PayPal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

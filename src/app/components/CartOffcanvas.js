import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';

const CartOffcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      price: 5.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop',
      category: 'Pain Relief'
    },
    {
      id: 2,
      name: 'Vitamin D3 1000 IU',
      price: 12.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1550572017-4845a78b5f2f?w=200&h=200&fit=crop',
      category: 'Vitamins'
    },
    {
      id: 3,
      name: 'Digital Thermometer',
      price: 15.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=200&h=200&fit=crop',
      category: 'First Aid'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 10 });
      setCouponCode('');
    } else if (couponCode.toUpperCase() === 'HEALTH20') {
      setAppliedCoupon({ code: 'HEALTH20', discount: 20 });
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    return (calculateSubtotal() * appliedCoupon.discount) / 100;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const shipping = subtotal > 50 ? 0 : 5.99;
    return subtotal - discount + shipping;
  };

  const getShippingCost = () => {
    return calculateSubtotal() > 50 ? 0 : 5.99;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Demo Button to Open Cart */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center gap-2 mx-auto"
        >
          <ShoppingBag size={24} />
          Open Shopping Cart ({cartItems.length})
        </button>
        <p className="text-gray-600 mt-4">Click the button above to view the cart offcanvas</p>
      </div>

      


    </div>
  );
};

export default CartOffcanvas;
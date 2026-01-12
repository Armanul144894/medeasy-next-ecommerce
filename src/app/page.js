"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  User,
  Heart,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  Truck,
  Shield,
  Clock,
  Award,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import HeroBanner from "./components/HeroBanner";
import Newsletter from "./components/Newsletter";

const MedicineEcommerce = () => {
  const [cartCount, setCartCount] = useState(0);

  const topCategories = [
    {
      name: "Vitamins & Supplements",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
      color: "bg-blue-100",
    },
    {
      name: "First Aid",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop",
      color: "bg-green-100",
    },
    {
      name: "Baby Care",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop",
      color: "bg-pink-100",
    },
    {
      name: "Personal Care",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
      color: "bg-purple-100",
    },
    {
      name: "Pain Relief",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      color: "bg-red-100",
    },
    {
      name: "Diabetes Care",
      image:
        "https://images.unsplash.com/photo-1526045478516-99145907023c?w=300&h=300&fit=crop",
      color: "bg-yellow-100",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg Tablets",
      category: "Pain Relief",
      price: 5.99,
      originalPrice: 8.99,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 234,
      discount: "33% OFF",
      inStock: true,
    },
    {
      id: 2,
      name: "Vitamin D3 1000 IU",
      category: "Vitamins",
      price: 12.99,
      originalPrice: 16.99,
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 456,
      discount: "24% OFF",
      inStock: true,
    },
    {
      id: 3,
      name: "Digital Thermometer",
      category: "First Aid",
      price: 15.99,
      originalPrice: 22.99,
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 189,
      discount: "30% OFF",
      inStock: true,
    },
    {
      id: 4,
      name: "Antiseptic Cream",
      category: "First Aid",
      price: 7.99,
      originalPrice: 10.99,
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 312,
      discount: "27% OFF",
      inStock: true,
    },
    {
      id: 5,
      name: "Omega-3 Fish Oil",
      category: "Supplements",
      price: 18.99,
      originalPrice: 24.99,
      image:
        "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 523,
      discount: "24% OFF",
      inStock: true,
    },
    {
      id: 6,
      name: "Blood Pressure Monitor",
      category: "Health Devices",
      price: 45.99,
      originalPrice: 65.99,
      image:
        "https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 678,
      discount: "30% OFF",
      inStock: true,
    },
    {
      id: 7,
      name: "Multivitamin Tablets",
      category: "Vitamins",
      price: 14.99,
      originalPrice: 19.99,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 401,
      discount: "25% OFF",
      inStock: true,
    },
    {
      id: 8,
      name: "Hand Sanitizer 500ml",
      category: "Personal Care",
      price: 6.99,
      originalPrice: 9.99,
      image:
        "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop",
      rating: 4.3,
      reviews: 289,
      discount: "30% OFF",
      inStock: true,
    },
  ];

  const featuredDeals = [
    {
      id: 1,
      title: "Winter Health Pack",
      description: "Complete immunity boost bundle",
      price: 39.99,
      originalPrice: 59.99,
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
      badge: "SAVE 33%",
    },
    {
      id: 2,
      title: "Diabetes Care Kit",
      description: "Monitor + Test strips + Lancets",
      price: 79.99,
      originalPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop",
      badge: "BEST SELLER",
    },
  ];

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="bg-teal-100 p-3 rounded-full">
              <Truck className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Free Shipping</h3>
              <p className="text-xs text-gray-500">On orders over $50</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <Shield className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Secure Payment</h3>
              <p className="text-xs text-gray-500">100% protected</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-full">
              <Clock className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">24/7 Support</h3>
              <p className="text-xs text-gray-500">Always available</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-full">
              <Award className="text-orange-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Quality Products</h3>
              <p className="text-xs text-gray-500">Certified & tested</p>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Shop by Category
            </h2>
            <button className="text-teal-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topCategories.map((cat, index) => (
              <Link
                href={`/category/${cat.name
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}`}
                key={index}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div
                    className={`${cat.color} p-4 flex items-center justify-center h-32`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-20 h-20 object-cover rounded-full group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-semibold text-sm text-gray-800">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Deals */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredDeals.map((deal) => (
              <Link key={deal.id} href={`/category/${deal.title.toLowerCase()
                .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative"
                >
                  <div className="relative h-48">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {deal.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {deal.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {deal.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-teal-600">
                          ${deal.price}
                        </span>
                        <span className="text-gray-400 line-through ml-2">
                          ${deal.originalPrice}
                        </span>
                      </div>
                      <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition font-semibold">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

              </Link>

            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product?.name.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')}`}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                    <button className="absolute top-2 left-2 bg-white p-2 rounded-full hover:bg-gray-100">
                      <Heart size={18} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-teal-600 font-semibold">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-gray-800 mt-1 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <Newsletter/>
      </main >
    </div >
  );
};

export default MedicineEcommerce;

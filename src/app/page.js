"use client";
import React, { useState } from "react";
import {
  Heart,
  Star,
} from "lucide-react";
import Link from "next/link";
import HeroBanner from "./components/HeroBanner";
import Newsletter from "./components/Newsletter";
import Image from "next/image";
import FeaturedDeals from "./components/FeaturedDeals";
import HomeCategories from "./components/HomeCategories";
import HomeFeatures from "./components/HomeFeatures";

const MedicineEcommerce = () => {
  const [cartCount, setCartCount] = useState(0);


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
        <HomeFeatures />

        {/* Categories Section */}
        <HomeCategories />

        {/* Featured Deals */}
        <FeaturedDeals />

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
                  className="bg-white h-full rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={200}
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
        <Newsletter />
      </main >
    </div >
  );
};

export default MedicineEcommerce;

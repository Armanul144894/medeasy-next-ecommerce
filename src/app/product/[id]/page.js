"use client";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  ArrowLeft,
  Plus,
  Minus,
  Check,
  Share2,
  ChevronRight,
  Home,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  // Sample product data
  const product = {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    category: "Pain Relief",
    price: 5.99,
    originalPrice: 8.99,
    discount: "33% OFF",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    stockCount: 45,
    sku: "MED-PAR-500",
    manufacturer: "HealthCare Pharma Ltd.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550572017-4845a78b5f2f?w=600&h=600&fit=crop",
    ],
    description:
      "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It is available combined with other painkillers and anti-sickness medicines. It is also an ingredient in a wide range of cold and flu remedies.",
    features: [
      "Fast-acting pain relief",
      "Reduces fever effectively",
      "Gentle on the stomach",
      "Non-drowsy formula",
      "Suitable for adults and children over 12",
    ],
    dosage:
      "Adults and children aged 16 years and over: Take 1 to 2 tablets every 4 to 6 hours as needed. Do not take more than 8 tablets in 24 hours.",
    warnings: [
      "Do not exceed the stated dose",
      "Keep out of reach of children",
      "If symptoms persist, consult your doctor",
      "Not suitable for children under 12 years",
    ],
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Ibuprofen 400mg",
      price: 8.99,
      originalPrice: 12.99,
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
      rating: 4.5,
      discount: "31% OFF",
    },
    {
      id: 3,
      name: "Aspirin 75mg",
      price: 6.99,
      originalPrice: 9.99,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.3,
      discount: "30% OFF",
    },
    {
      id: 4,
      name: "Digital Thermometer",
      price: 15.99,
      originalPrice: 22.99,
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop",
      rating: 4.6,
      discount: "30% OFF",
    },
    {
      id: 5,
      name: "First Aid Kit",
      price: 29.99,
      originalPrice: 44.99,
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop",
      rating: 4.8,
      discount: "33% OFF",
    },
  ];

  const incrementQuantity = () => {
    if (quantity < product.stockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href={"/"}>
            <button className="flex items-center gap-1 hover:text-teal-600 cursor-pointer">
              <Home size={16} /> Home
            </button>
          </Link>
          <ChevronRight size={16} />
          <Link
            href={`/category/${product.category
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`}
          >
            <button className="hover:text-teal-600">{product.category}</button>
          </Link>
          <ChevronRight size={16} />
          <span className="text-gray-800">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.discount && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-teal-600"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Category Badge */}
              <span className="inline-block bg-teal-100 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold text-teal-600">
                  ${product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <Check size={20} />
                    <span className="font-semibold">
                      In Stock ({product.stockCount} available)
                    </span>
                  </div>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description.substring(0, 200)}...
              </p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-3 hover:bg-gray-100 transition"
                      disabled={quantity <= 1}
                    >
                      <Minus size={20} />
                    </button>
                    <span className="px-6 py-2 font-semibold text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="p-3 hover:bg-gray-100 transition"
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total:{" "}
                    <span className="font-bold text-teal-600">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="p-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition">
                  <Heart size={24} />
                </button>
                <button className="p-3 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition">
                  <Share2 size={24} />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="text-teal-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Free Delivery</p>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-teal-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Secure Payment
                    </p>
                    <p className="text-sm text-gray-600">
                      100% secure transactions
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Meta */}
              <div className="border-t mt-6 pt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-semibold text-gray-800">
                    {product.sku}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Manufacturer:</span>
                  <span className="font-semibold text-gray-800">
                    {product.manufacturer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-12">
          {/* Tab Headers */}
          <div className="border-b">
            <div className="flex">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-4 font-semibold transition ${
                  activeTab === "description"
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("dosage")}
                className={`px-6 py-4 font-semibold transition ${
                  activeTab === "dosage"
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Dosage & Usage
              </button>
              <button
                onClick={() => setActiveTab("warnings")}
                className={`px-6 py-4 font-semibold transition ${
                  activeTab === "warnings"
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Warnings
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-4 font-semibold transition ${
                  activeTab === "reviews"
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Product Description
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="text-teal-600 mt-0.5" size={20} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "dosage" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Dosage & Usage Instructions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.dosage}
                </p>
              </div>
            )}

            {activeTab === "warnings" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Important Warnings
                </h3>
                <ul className="space-y-3">
                  {product.warnings.map((warning, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 bg-red-50 rounded-lg"
                    >
                      <span className="text-red-600 font-bold">⚠️</span>
                      <span className="text-gray-700">{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Customer Reviews
                </h3>
                <div className="space-y-4">
                  {/* Sample Review */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-800">
                        John D.
                      </span>
                      <span className="text-gray-500 text-sm">2 weeks ago</span>
                    </div>
                    <p className="text-gray-600">
                      Excellent product! Works quickly and effectively. Highly
                      recommend for pain relief.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <Star size={16} className="text-gray-300" />
                      </div>
                      <span className="font-semibold text-gray-800">
                        Sarah M.
                      </span>
                      <span className="text-gray-500 text-sm">1 month ago</span>
                    </div>
                    <p className="text-gray-600">
                      Good quality paracetamol. Fast delivery and well packaged.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.discount}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(item.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-800">
                      ${item.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

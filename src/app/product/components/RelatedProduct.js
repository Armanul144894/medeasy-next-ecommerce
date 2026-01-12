'use client';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

export default function RelatedProduct({relatedProducts}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, relatedProducts.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const translateX = -(currentIndex * (100 / slidesToShow));

  return (
    <div className="w-full absolute py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Related Products
      </h2>
      
      <div className="relative px-12">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Previous products"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition ${
            currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Next products"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={item.images[0]}
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
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-teal-600 w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

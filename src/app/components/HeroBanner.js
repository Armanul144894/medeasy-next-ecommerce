import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [
        {
            id: 1,
            title: 'Healthcare Made Easy',
            subtitle: 'Get up to 50% off on selected medicines',
            description: 'Shop now and save big on your healthcare essentials',
            buttonText: 'Shop Now',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=500&fit=crop',
            bgColor: 'from-teal-500 via-teal-600 to-cyan-600'
        },
        {
            id: 2,
            title: 'Winter Wellness Sale',
            subtitle: 'Boost your immunity this season',
            description: 'Up to 40% off on vitamins and supplements',
            buttonText: 'Explore Deals',
            image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=500&fit=crop',
            bgColor: 'from-blue-500 via-blue-600 to-indigo-600'
        },
        {
            id: 3,
            title: 'Free Home Delivery',
            subtitle: 'On orders above $50',
            description: 'Fast and secure delivery to your doorstep',
            buttonText: 'Order Now',
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=500&fit=crop',
            bgColor: 'from-purple-500 via-purple-600 to-pink-600'
        }
    ];

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };
    return (
        <div>
            {/* Hero Banner Slider */}
            <div className="relative rounded-lg overflow-hidden mb-6 h-64 md:h-80">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className={`relative h-full bg-gradient-to-r ${slide.bgColor} text-white`}>
                            <div className="absolute inset-0 opacity-20">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10 h-full flex items-center">
                                <div className="container mx-auto px-8 md:px-12">
                                    <div className="max-w-2xl">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h2>
                                        <p className="text-xl md:text-2xl text-white/90 mb-2">{slide.subtitle}</p>
                                        <p className="text-white/80 mb-6">{slide.description}</p>
                                        <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute cursor-pointer left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-20 transition"
                >
                    <ChevronLeft size={24} className="text-gray-800" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-20 transition"
                >
                    <ChevronRight size={24} className="text-gray-800" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 cursor-pointer rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

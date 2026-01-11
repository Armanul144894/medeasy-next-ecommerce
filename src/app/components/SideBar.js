'use client';
import { X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'


export default function SideBar({sidebarOpen, setSidebarOpen}) {
    const categories = [
  { id: 1, name: "Pain Relief", icon: "💊", count: 12 },
  { id: 2, name: "Vitamins & Supplements", icon: "🧴", count: 10 },
  { id: 3, name: "Cold & Flu", icon: "🤧", count: 8 },
  { id: 4, name: "First Aid", icon: "🩹", count: 6 },
  { id: 5, name: "Personal Care", icon: "🧼", count: 7 },
  { id: 6, name: "Baby Care", icon: "👶", count: 6 },
  { id: 7, name: "Diabetes Care", icon: "💉", count: 5 },
  { id: 8, name: "Heart Health", icon: "❤️", count: 5 },
  { id: 9, name: "Digestive Health", icon: "🦠", count: 5 },
  { id: 10, name: "Eye Care", icon: "👁️", count: 4 },
  { id: 11, name: "Skin Care", icon: "✨", count: 5 },
  { id: 12, name: "Hair Care", icon: "💇", count: 4 },
  { id: 13, name: "Oral Care", icon: "🦷", count: 4 },
  { id: 14, name: "Respiratory Care", icon: "🌬️", count: 4 },
  { id: 15, name: "Sexual Wellness", icon: "❤️‍🔥", count: 3 },
  { id: 16, name: "Women’s Health", icon: "🌸", count: 4 },
  { id: 17, name: "Men’s Health", icon: "🧔", count: 4 },
  { id: 18, name: "Mental Wellness", icon: "🧠", count: 4 },
  { id: 19, name: "Medical Devices", icon: "🩺", count: 5 },
  { id: 20, name: "Fitness & Nutrition", icon: "🏋️", count: 5 },
];

    return (
        <div className='lg:sticky lg:top-24 rounded-2xl max-h-[90vh] overflow-x-auto hidden lg:block'>
            <aside
                className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }h-screen -translate-x-full lg:translate-x-0 lg:relative inset-y-0 bg-white lg:bg-transparent z-40 w-64 lg:w-80 `}
            >
                <div className="bg-white rounded-lg shadow-md p-4 lg:sticky lg:top-24">
                    <div className="flex items-center justify-between mb-4 lg:hidden">
                        <h2 className="text-xl font-bold text-gray-800">Categories</h2>
                        <button onClick={() => setSidebarOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    <h2 className="hidden lg:block text-xl font-bold text-gray-800 mb-4">Categories</h2>
                    <div className="space-y-2">
                        {categories.map((category, index) => (
                            <Link
                                key={index} category={category}
                                href={`/category/${category.name.toLowerCase()
                                            .replace(/&/g, 'and')
                                            .replace(/[^a-z0-9]+/g, '-')
                                            .replace(/(^-|-$)/g, '')}`}
                                className="w-full cursor-pointer flex items-center justify-between p-3 hover:bg-teal-50 rounded-lg transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{category.icon}</span>
                                    <span className="text-gray-700 group-hover:text-teal-600 text-sm">
                                        {category.name}
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {category.count}
                                </span>
                            </Link>
                        ))}
                    </div>

                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    )
}

"use client"
import React, { useState } from "react";
import "./globals.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

export default function MainLayout({ children }) {
    const [cartCount, setCartCount] = useState(0);
      const [sidebarOpen, setSidebarOpen] = useState(false);

       const addToCart = (product) => {
    setCartCount(cartCount + 1);
  };

      
  return (
    <div className="relative">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} cartCount={cartCount} />
      <div className="container-fluid mx-auto px-4 py-6 relative">
        <div className="flex lg:gap-6 items-start">
          {/* Sidebar - LEFT SIDE ON DESKTOP */}
          <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main Content */}
          <main className="flex-1 h-auto relative">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

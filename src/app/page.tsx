"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

// Mock Data
type Product = {
  id: number;
  name: string;
  category: "ชุดแต่งงาน" | "ชุดไทย" | "ชุดสูท";
  price: number;
  image: string;
  status: "available" | "rented";
};

const products: Product[] = [
  {
    id: 1,
    name: "Modern White Gown",
    category: "ชุดแต่งงาน",
    price: 15000,
    image: "https://images.unsplash.com/photo-1594539623547-7ac02ad861e6?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 2,
    name: "Classic Thai Silk",
    category: "ชุดไทย",
    price: 8500,
    image: "https://images.unsplash.com/photo-1605289355680-75fbbee5c1d9?q=80&w=1998&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 3,
    name: "Midnight Blue Tuxedo",
    category: "ชุดสูท",
    price: 5000,
    image: "https://images.unsplash.com/photo-1593030761757-71bd90d9d53c?q=80&w=2079&auto=format&fit=crop",
    status: "rented",
  },
  {
    id: 4,
    name: "Silver Lace Gown",
    category: "ชุดแต่งงาน",
    price: 18000,
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 5,
    name: "Traditional Thai Groom",
    category: "ชุดไทย",
    price: 6000,
    image: "https://images.unsplash.com/photo-1596353995818-f090b6330ce1?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 6,
    name: "Luxury Ball Gown",
    category: "ชุดแต่งงาน",
    price: 25000,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    status: "rented",
  },
  {
    id: 7,
    name: "Sleek Black Suit",
    category: "ชุดสูท",
    price: 4500,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 8,
    name: "Thai Boran Gold",
    category: "ชุดไทย",
    price: 12000,
    image: "https://images.unsplash.com/photo-1621644827013-286896063e92?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Filtering Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "ทั้งหมด" || product.category === selectedCategory;
    const matchesStatus = showAvailableOnly
      ? product.status === "available"
      : true;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <Hero />

      <section id="collections" className="container mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-2">
            Our Collections
          </p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-midnight-blue">
            ชุดแต่งงานและชุดไทย
          </h2>
          <div className="w-24 h-1 bg-silver mx-auto mt-6"></div>
        </div>

        {/* Filter Section */}
        <div className="mb-10 sticky top-24 z-30">
          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showAvailableOnly={showAvailableOnly}
            setShowAvailableOnly={setShowAvailableOnly}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-prompt">
              ไม่พบสินค้าที่คุณค้นหา กรุณาลองใหม่
            </p>
          </div>
        )}
      </section>

      <MapSection />
      <Footer />
    </main>
  );
}

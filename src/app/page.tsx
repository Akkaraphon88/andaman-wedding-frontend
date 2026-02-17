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
  // --- Thai Dresses (Highlights) ---
  {
    id: 1,
    name: "ชุดไทยจักรพรรดิ สีกลีบบัว",
    category: "ชุดไทย",
    price: 15900,
    image: "https://images.unsplash.com/photo-1621644827013-286896063e92?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 2,
    name: "ชุดไทยศิวาลัย สีทอง",
    category: "ชุดไทย",
    price: 18500,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 3,
    name: "ชุดไทยบรมพิมาน สีงาช้าง",
    category: "ชุดไทย",
    price: 12000,
    image: "https://images.unsplash.com/photo-1596353995818-f090b6330ce1?q=80&w=2070&auto=format&fit=crop",
    status: "rented",
  },
  {
    id: 4,
    name: "ชุดไทยประยุกต์ สีโรสโกลด์",
    category: "ชุดไทย",
    price: 9500,
    image: "https://images.unsplash.com/photo-1605289355680-75fbbee5c1d9?q=80&w=1998&auto=format&fit=crop",
    status: "available",
  },

  // --- Wedding Gowns ---
  {
    id: 5,
    name: "Luxury Ball Gown (Swarovski)",
    category: "ชุดแต่งงาน",
    price: 35000,
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 6,
    name: "Minimalist Silk Dress",
    category: "ชุดแต่งงาน",
    price: 22000,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 7,
    name: "Mermaid Lace Gown",
    category: "ชุดแต่งงาน",
    price: 28000,
    image: "https://images.unsplash.com/photo-1594539623547-7ac02ad861e6?q=80&w=2070&auto=format&fit=crop",
    status: "rented",
  },

  // --- Suits ---
  {
    id: 8,
    name: "Midnight Blue Tuxedo",
    category: "ชุดสูท",
    price: 6500,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    status: "available",
  },
  {
    id: 10,
    name: "Classic Beige Suit",
    category: "ชุดสูท",
    price: 5500,
    image: "https://images.unsplash.com/photo-1593030761757-71bd90d9d53c?q=80&w=2079&auto=format&fit=crop",
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

      <AboutSection />

      <section id="collections" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-3">
            Our Collections
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-midnight-blue">
            คอลเลกชันล่าสุด
          </h2>
          <div className="w-24 h-1 bg-midnight-blue mx-auto mt-6"></div>
          <p className="mt-4 text-gray-500 font-light">
            รวมชุดไทยและชุดแต่งงานที่คัดสรรมาอย่างดีที่สุด
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 sticky top-24 z-30 transition-all duration-300">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
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

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { useProducts } from "@/hooks/useProducts"; // Use custom hook

export default function Home() {
  const { products, isLoaded } = useProducts(); // Fetch dynamic products
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
    <main className="min-h-screen bg-off-white pb-20 font-prompt relative">
      {/* Background Image Setup */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/images/store/overview.jpg')" }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Product Collections */}
        <section id="collections" className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-gray-400 tracking-[0.3em] uppercase mb-4">
              Our Premium Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-midnight-blue drop-shadow-sm">
              คอลเลกชันชุดแต่งงานและชุดไทย
            </h2>
            <div className="w-24 h-1 bg-midnight-blue mx-auto mt-6 mb-4"></div>
            <p className="text-gray-500 font-light text-lg">
              คัดสรรความงดงามเลอค่า เพื่อวันสำคัญที่สุดของคุณ
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12 sticky top-24 z-30 transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
              <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                showAvailableOnly={showAvailableOnly}
                setShowAvailableOnly={setShowAvailableOnly}
              />
            </div>
          </div>

          {/* Product Grid */}
          {isLoaded && filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : isLoaded ? (
            <div className="text-center py-32 bg-white rounded-3xl shadow-soft border border-gray-100">
              <i className="fas fa-search text-6xl text-gray-200 mb-6"></i>
              <p className="text-2xl text-gray-400 font-bold">
                ไม่พบสินค้าที่คุณค้นหา
              </p>
              <p className="text-gray-400 mt-2">กรุณาลองเปลี่ยนคำค้นหาหรือหมวดหมู่</p>
            </div>
          ) : (
            // Loading State
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-3xl animate-pulse"></div>
              ))}
            </div>
          )}
        </section>

        {/* Store Atmosphere Section */}
        <section id="store-atmosphere" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/store/inside-01.jpg" alt="Inside Store 1" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                  <img src="/images/store/front.jpg" alt="Store Front" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12 transform hover:scale-105 transition-transform duration-500" />
                  <img src="/images/store/overview.jpg" alt="Overview" className="rounded-2xl shadow-lg w-full h-64 object-cover col-span-2 transform hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              <div className="order-1 lg:order-2 text-center lg:text-left">
                <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Atmosphere</span>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-midnight-blue mb-8 leading-tight">
                  สัมผัสบรรยากาศ <br />
                  <span className="text-silver italic">แห่งความประทับใจ</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  ร้านวิวาห์อันดามัน (Andaman Wedding Studio) ตั้งอยู่ใจกลางเมืองบุรีรัมย์
                  ตกแต่งด้วยสไตล์โมเดิร์นลักชูรี่ บรรยากาศอบอุ่น เป็นกันเอง
                  พร้อมห้องลองชุดส่วนตัวที่กว้างขวาง ให้คุณและครอบครัวได้เลือกชมชุดสวยๆ
                  ได้อย่างสะดวกสบาย
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-off-white px-6 py-4 rounded-xl shadow-sm text-center min-w-[120px]">
                    <i className="fas fa-tshirt text-3xl text-midnight-blue mb-2"></i>
                    <p className="font-bold text-gray-700">500+ ชุด</p>
                  </div>
                  <div className="bg-off-white px-6 py-4 rounded-xl shadow-sm text-center min-w-[120px]">
                    <i className="fas fa-camera text-3xl text-midnight-blue mb-2"></i>
                    <p className="font-bold text-gray-700">Studio</p>
                  </div>
                  <div className="bg-off-white px-6 py-4 rounded-xl shadow-sm text-center min-w-[120px]">
                    <i className="fas fa-parking text-3xl text-midnight-blue mb-2"></i>
                    <p className="font-bold text-gray-700">ที่จอดรถ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <MapSection />
        <Footer />
      </div>
    </main>
  );
}

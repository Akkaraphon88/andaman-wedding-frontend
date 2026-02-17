"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

type Product = {
  id: number;
  name: string;
  category: "ชุดแต่งงาน" | "ชุดไทย" | "ชุดสูท";
  price: number;
  image: string;
  status: "available" | "rented";
};

const products: Product[] = [
  // --- Thai Dresses (ชุดไทย) ---
  {
    id: 1,
    name: "ชุดไทยจักรพรรดิ สีกลีบบัวทอง",
    category: "ชุดไทย",
    price: 15900,
    image: "/images/products/product-01.jpg",
    status: "available",
  },
  {
    id: 2,
    name: "ชุดไทยศิวาลัย น้ำเงินทองมงคล",
    category: "ชุดไทย",
    price: 18500,
    image: "/images/products/product-02.jpg",
    status: "available",
  },
  {
    id: 3,
    name: "ชุดไทยบรมพิมาน สีชมพูทอง",
    category: "ชุดไทย",
    price: 12000,
    image: "/images/products/product-03.jpg",
    status: "available",
  },
  {
    id: 4,
    name: "ชุดไทยประยุกต์ สีแดงทับทิม",
    category: "ชุดไทย",
    price: 13500,
    image: "/images/products/product-04.jpg",
    status: "available",
  },
  {
    id: 5,
    name: "ชุดไทยจักรพรรดิ สีทองโบราณ",
    category: "ชุดไทย",
    price: 16900,
    image: "/images/products/product-05.jpg",
    status: "available",
  },

  // --- Wedding Gowns ---
  {
    id: 6,
    name: "Luxury Ball Gown (งานปักเลื่อม)",
    category: "ชุดแต่งงาน",
    price: 25900,
    image: "/images/products/product-06.jpg",
    status: "available",
  },
  {
    id: 7,
    name: "Classic Silk Wedding Dress",
    category: "ชุดแต่งงาน",
    price: 15900,
    image: "/images/products/product-07.jpg",
    status: "available",
  },
  {
    id: 8,
    name: "Mermaid Lace Gown",
    category: "ชุดแต่งงาน",
    price: 18900,
    image: "/images/products/product-08.jpg",
    status: "rented",
  },
  {
    id: 9,
    name: "Modern Thai Dress (Gold)",
    category: "ชุดไทย",
    price: 9500,
    image: "/images/products/product-09.jpg",
    status: "available",
  },

  // --- Suits / Others ---
  {
    id: 10,
    name: "ชุดไทยเจ้าบ่าว สีครีมทอง",
    category: "ชุดสูท",
    price: 6500,
    image: "/images/products/product-10.jpg",
    status: "available",
  },
  {
    id: 11,
    name: "ชุดไทยประยุกต์ สีเงิน",
    category: "ชุดไทย",
    price: 8500,
    image: "/images/products/product-11.jpg",
    status: "available",
  },
  {
    id: 12,
    name: "ชุดไทยจักรพรรดิ (Royal Collection)",
    category: "ชุดไทย",
    price: 22000,
    image: "/images/products/product-12.jpg",
    status: "rented",
  },
  {
    id: 13,
    name: "ชุดไทยคู่รัก (Set)",
    category: "ชุดไทย",
    price: 15000,
    image: "/images/products/product-13.jpg",
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
    <main className="min-h-screen bg-off-white pb-20 font-prompt">
      <Navbar />
      <Hero />

      {/* Product Collections */}
      <section id="collections" className="container mx-auto px-6 py-24 relative z-10">
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
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-3xl shadow-soft border border-gray-100">
            <i className="fas fa-search text-6xl text-gray-200 mb-6"></i>
            <p className="text-2xl text-gray-400 font-bold">
              ไม่พบสินค้าที่คุณค้นหา
            </p>
            <p className="text-gray-400 mt-2">กรุณาลองเปลี่ยนคำค้นหาหรือหมวดหมู่</p>
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
    </main>
  );
}

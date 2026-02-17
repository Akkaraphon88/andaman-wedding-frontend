"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1594539623547-7ac02ad861e6?q=80&w=2070&auto=format&fit=crop",
        title: "ที่สุดแห่งชุดแต่งงาน หรูหรา สง่างาม",
        subtitle: "Andaman Wedding Studio Buriram"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop",
        title: "ชุดไทยจักรพรรดิ งานปักละเอียด ทรงคุณค่า",
        subtitle: "ประณีตทุกขั้นตอนการตัดเย็บ"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-midnight-blue">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/40 z-10" />

                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                    <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 animate-fade-in-up text-silver drop-shadow-md">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-prompt font-light mb-8 max-w-2xl mx-auto drop-shadow-sm">
                            {slide.subtitle}
                        </p>
                        <button className="px-8 py-3 bg-silver text-midnight-blue font-semibold rounded-full hover:bg-white transition-all shadow-lg transform hover:scale-105">
                            จองลองชุด
                        </button>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-silver w-8" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

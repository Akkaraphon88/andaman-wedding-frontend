"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=2696&auto=format&fit=crop", // Elegant couple in dark suit/gown
        title: "ที่สุดแห่งความสง่างาม",
        subtitle: "Andaman Wedding Studio Buriram"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", // Wedding dress detail
        title: "ประณีตทุกรายละเอียด",
        subtitle: "คัดสรรชุดแต่งงานคุณภาพพรีเมียมเพื่อวันสำคัญของคุณ"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop", // Thai traditional dress (approximate vibe)
        title: "ชุดไทยจักรพรรดิ ทรงคุณค่า",
        subtitle: "สืบสานความเป็นไทยด้วยดีไซน์ที่ทันสมัย"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] w-full overflow-hidden bg-midnight-blue">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                        }`}
                >
                    {/* Overlay Gradient for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/90 via-midnight-blue/30 to-transparent z-10" />

                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                    <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4 mt-16 font-prompt">
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up text-white drop-shadow-2xl tracking-wide">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto drop-shadow-md text-gray-200 tracking-wider">
                            {slide.subtitle}
                        </p>
                        <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-midnight-blue transition-all duration-300 shadow-xl uppercase tracking-widest text-sm transform hover:scale-105">
                            จองคิวลองชุด
                        </button>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-12" : "bg-white/30 w-6 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

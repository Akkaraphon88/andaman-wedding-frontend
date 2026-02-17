"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-midnight-blue/95 backdrop-blur-sm shadow-lg py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                <Link href="/" className="text-2xl font-playfair font-bold text-silver">
                    Andaman Wedding
                </Link>

                <div className="hidden md:flex space-x-8 font-prompt font-light">
                    <Link href="#" className="hover:text-silver transition-colors">
                        หน้าแรก
                    </Link>
                    <Link href="#collections" className="hover:text-silver transition-colors">
                        ชุดแต่งงาน
                    </Link>
                    <Link href="#collections" className="hover:text-silver transition-colors">
                        ชุดไทย
                    </Link>
                    <Link href="#contact" className="hover:text-silver transition-colors">
                        ติดต่อเรา
                    </Link>
                </div>

                <button className="md:hidden text-white focus:outline-none">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

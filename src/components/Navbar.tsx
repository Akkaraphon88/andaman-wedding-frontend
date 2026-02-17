"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AdminLoginModal from "./AdminLoginModal";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

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
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                        ? "bg-midnight-blue/95 backdrop-blur-md shadow-lg py-3"
                        : "bg-gradient-to-b from-black/50 to-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center text-white">
                    <Link href="/" className="text-2xl font-playfair font-bold text-silver drop-shadow-md">
                        Andaman Wedding
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 font-prompt font-light bg-black/10 px-6 py-2 rounded-full backdrop-blur-sm">
                        <Link href="/" className="hover:text-silver transition-colors text-shadow">
                            หน้าแรก
                        </Link>
                        <Link href="#collections" className="hover:text-silver transition-colors text-shadow">
                            ชุดแต่งงาน
                        </Link>
                        <Link href="#collections" className="hover:text-silver transition-colors text-shadow">
                            ชุดไทย
                        </Link>
                        <Link href="#store-atmosphere" className="hover:text-silver transition-colors text-shadow">
                            บรรยากาศร้าน
                        </Link>
                        <Link href="#contact" className="hover:text-silver transition-colors text-shadow">
                            ติดต่อเรา
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Admin Button (Top Right Small) */}
                        <button
                            onClick={() => setIsAdminModalOpen(true)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-white/50 hover:bg-white hover:text-midnight-blue hover:border-white transition-all duration-300"
                            title="Admin Access"
                        >
                            <i className="fas fa-key text-xs"></i>
                        </button>

                        <button className="md:hidden text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <AdminLoginModal
                isOpen={isAdminModalOpen}
                onClose={() => setIsAdminModalOpen(false)}
            />
        </>
    );
}

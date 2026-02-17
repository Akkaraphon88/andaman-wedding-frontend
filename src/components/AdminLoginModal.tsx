"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AdminLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdminLoginModal({ isOpen, onClose }: AdminLoginModalProps) {
    const [code, setCode] = useState("");
    const router = useRouter();

    if (!isOpen) return null;

    const handleLogin = () => {
        if (code === "888") {
            sessionStorage.setItem("admin_auth", "true");
            router.push("/admin");
            onClose();
        } else {
            alert("รหัสผ่านไม่ถูกต้อง!");
            setCode("");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                <h3 className="text-2xl font-bold text-midnight-blue mb-6 font-playfair">
                    Admin Access
                </h3>

                <input
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full text-center text-3xl tracking-widest p-4 border-2 border-gray-200 rounded-xl focus:border-midnight-blue outline-none mb-6"
                    placeholder="• • •"
                    maxLength={3}
                    autoFocus
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-midnight-blue text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors"
                >
                    เข้าสู่ระบบ
                </button>
            </div>
        </div>
    );
}

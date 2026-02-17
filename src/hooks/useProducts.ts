"use client";

import { useState, useEffect } from "react";
import { Product, initialProducts } from "@/data/initialProducts";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load from localStorage or use initial data
        const stored = localStorage.getItem("andaman_products");
        if (stored) {
            try {
                setProducts(JSON.parse(stored));
            } catch (e) {
                setProducts(initialProducts);
            }
        } else {
            setProducts(initialProducts);
        }
        setIsLoaded(true);
    }, []);

    const updateProduct = (updatedProduct: Product) => {
        const newProducts = products.map((p) =>
            p.id === updatedProduct.id ? updatedProduct : p
        );
        setProducts(newProducts);
        localStorage.setItem("andaman_products", JSON.stringify(newProducts));
    };

    const resetProducts = () => {
        if (confirm("คุณแน่ใจหรือไม่ที่จะรีเซ็ตข้อมูลสินค้าทั้งหมดกลับเป็นค่าเริ่มต้น?")) {
            setProducts(initialProducts);
            localStorage.removeItem("andaman_products");
        }
    };

    return { products, isLoaded, updateProduct, resetProducts };
}

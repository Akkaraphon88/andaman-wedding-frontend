export type Product = {
    id: number;
    name: string;
    category: "ชุดแต่งงาน" | "ชุดไทย" | "ชุดสูท";
    price: number;
    image: string;
    status: "available" | "rented";
};

export const initialProducts: Product[] = [
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

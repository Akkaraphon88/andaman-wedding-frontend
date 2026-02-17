import Image from "next/image";

interface ProductProps {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    status: "available" | "rented";
}

export default function ProductCard({ product }: { product: ProductProps }) {
    const isRented = product.status === "rented";

    return (
        <div className="group bg-white rounded-none cursor-pointer overflow-hidden relative font-prompt transition-all duration-300 shadow-sm hover:shadow-2xl">
            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-10">
                <span
                    className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-md ${isRented
                        ? "bg-gray-900/80 text-white"
                        : "bg-white/90 text-midnight-blue border border-gray-200"
                        }`}
                >
                    {isRented ? "Rented" : "Available"}
                </span>
            </div>

            <div className="relative h-[28rem] w-full overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${isRented ? "grayscale opacity-70" : ""
                        }`}
                />
                {/* Hover Overlay */}
                {!isRented && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
            </div>

            <div className="p-6 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">{product.category}</p>
                <h3 className="text-xl font-bold text-midnight-blue mb-3 font-playfair group-hover:text-gold transition-colors line-clamp-1">
                    {product.name}
                </h3>

                {/* Price Tag - Clear & Prominent */}
                <div className="mb-4">
                    <span className="text-2xl font-bold text-midnight-blue">
                        ฿{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/ วัน</span>
                </div>

                <div className="mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
                        disabled={isRented}
                        className={`w-full py-3 text-sm uppercase tracking-wider font-semibold border ${isRented
                            ? "border-gray-300 text-gray-400 cursor-not-allowed"
                            : "border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white"
                            } transition-all`}
                    >
                        {isRented ? "ไม่ว่าง" : "ดูรายละเอียด"}
                    </button>
                </div>
            </div>
        </div>
    );
}

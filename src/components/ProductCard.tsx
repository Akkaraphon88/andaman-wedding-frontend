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
        <div className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative font-prompt">
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
                <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${isRented
                            ? "bg-gray-500 text-white"
                            : "bg-midnight-blue text-silver"
                        }`}
                >
                    {isRented ? "ติดเช่า" : "ว่าง"}
                </div>
            </div>

            <div className="relative h-96 w-full overflow-hidden bg-gray-200">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${isRented ? "grayscale opacity-80" : ""
                        }`}
                />
            </div>

            <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-xl font-bold text-midnight-blue mb-2 font-playfair">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-gray-700">
                        ฿{product.price.toLocaleString()}
                    </span>
                    <button
                        disabled={isRented}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${isRented
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-midnight-blue text-white hover:bg-[#003366]"
                            }`}
                    >
                        {isRented ? "ไม่ว่าง" : "จองชุดนี้"}
                    </button>
                </div>
            </div>
        </div>
    );
}

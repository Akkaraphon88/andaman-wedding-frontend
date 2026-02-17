"use client";

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    showAvailableOnly: boolean;
    setShowAvailableOnly: (show: boolean) => void;
}

const categories = ["ทั้งหมด", "ชุดแต่งงาน", "ชุดไทย", "ชุดสูท"];

export default function FilterBar({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    showAvailableOnly,
    setShowAvailableOnly,
}: FilterBarProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between font-prompt">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
                <input
                    type="text"
                    placeholder="ค้นหาชื่อชุด..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight-blue focus:border-transparent"
                />
                <svg
                    className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                ? "bg-midnight-blue text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Availability Toggle */}
            <div className="flex items-center space-x-3">
                <span className="text-gray-700 text-sm">แสดงเฉพาะชุดว่าง</span>
                <button
                    onClick={() => setShowAvailableOnly(!showAvailableOnly)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-midnight-blue focus:ring-offset-2 ${showAvailableOnly ? "bg-midnight-blue" : "bg-gray-200"
                        }`}
                >
                    <span
                        className={`${showAvailableOnly ? "translate-x-6" : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                </button>
            </div>
        </div>
    );
}

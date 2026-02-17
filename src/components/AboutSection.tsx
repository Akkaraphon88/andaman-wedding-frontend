import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-20 bg-white overflow-hidden font-prompt">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h4 className="text-midnight-blue uppercase text-sm tracking-[0.2em] font-bold">
                            About Us
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                            เนรมิตวันสำคัญของคุณ <br />
                            <span className="text-midnight-blue">ให้สมบูรณ์แบบที่สุด</span>
                        </h2>
                        <div className="w-20 h-1 bg-gray-200"></div>
                        <p className="text-gray-500 leading-relaxed font-light text-lg">
                            "อันดามัน เวดดิ้ง สตูดิโอ" เราเข้าใจดีว่าวันแต่งงานคือวันที่มีความหมายที่สุดในชีวิต
                            เราจึงพิถีพิถันในการคัดสรรชุดแต่งงานคุณภาพพรีเมียม ชุดไทยจักรีประยุกต์
                            และชุดสูทที่ตัดเย็บอย่างประณีต เพื่อให้คุณดูสง่างามที่สุดในวันสำคัญ
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div>
                                <h3 className="text-3xl font-playfair font-bold text-midnight-blue">500+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Couples</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-playfair font-bold text-midnight-blue">200+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Premium Dresses</p>
                            </div>
                        </div>
                        <button className="mt-8 px-8 py-3 border border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
                            Read Our Story
                        </button>
                    </div>

                    {/* Image Composition */}
                    <div className="w-full md:w-1/2 relative h-[500px]">
                        <div className="absolute top-0 right-0 w-4/5 h-4/5 z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=2696&auto=format&fit=crop"
                                alt="Wedding Couple"
                                fill
                                className="object-cover shadow-2xl"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-3/5 h-3/5 z-20 border-8 border-white shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                                alt="Dress Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 z-0 rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

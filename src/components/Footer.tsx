import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-midnight-blue text-white pt-20 pb-10 font-prompt border-t-4 border-gold">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-playfair font-bold text-silver mb-6">
                            Andaman Wedding
                        </h3>
                        <p className="text-gray-300 text-sm leading-8 max-w-sm text-lg">
                            ที่สุดแห่งชุดแต่งงาน หรูหรา สง่างาม <br />
                            ดูแลวันสำคัญของคุณด้วยใจและประสบการณ์กว่า 10 ปี <br />
                            ในราคาที่จับต้องได้ พร้อมโปรโมชั่นสุดพิเศษ
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-gold">เมนูลัด</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="#" className="hover:text-white hover:translate-x-2 transition-all block">หน้าแรก</Link></li>
                            <li><Link href="#collections" className="hover:text-white hover:translate-x-2 transition-all block">คอลเลกชันชุด</Link></li>
                            <li><Link href="#store-atmosphere" className="hover:text-white hover:translate-x-2 transition-all block">บรรยากาศร้าน</Link></li>
                            <li><Link href="#contact" className="hover:text-white hover:translate-x-2 transition-all block">ติดต่อเรา</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-gold">ติดต่อเรา</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-silver"></i>
                                <span className="leading-relaxed">ถนน พิทักษ์ ต.ในเมือง อ.เมือง จ.บุรีรัมย์</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone mt-1 mr-3 text-silver"></i>
                                <span className="font-mono text-lg">089 722 9747</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fab fa-facebook mt-1 mr-3 text-silver"></i>
                                <a href="https://www.facebook.com/andamanweddingburiram" target="_blank" className="hover:text-gold transition-colors">Andaman Wedding Buriram</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Andaman Wedding Studio Buriram. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

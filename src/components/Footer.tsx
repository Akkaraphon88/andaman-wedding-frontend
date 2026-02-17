import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-midnight-blue text-white py-12 font-prompt">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-playfair font-bold text-silver mb-4">
                            Andaman Wedding
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            บริการเช่าชุดแต่งงาน ชุดไทย และถ่ายพรีเวดดิ้งครบวงจร
                            ดูแลคุณในวันสำคัญที่สุดด้วยทีมงานมืออาชีพ
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-silver">เมนู</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">หน้าแรก</Link></li>
                            <li><Link href="#collections" className="hover:text-white transition-colors">คอลเลกชัน</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">ติดต่อเรา</Link></li>
                            <li><button className="hover:text-white transition-colors">เข้าสู่ระบบ</button></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-silver">ติดต่อเรา</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <span className="mr-2">📍</span> ถนน พิทักษ์ บุรีรัมย์
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📞</span> 089 722 9747
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Facebook:</span> อันดามัน เวดดิ้ง สตูดิโอ
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Andaman Wedding Studio Buriram. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

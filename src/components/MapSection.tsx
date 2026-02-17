export default function MapSection() {
    return (
        <section id="contact" className="py-20 bg-white font-prompt relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Location</span>
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-midnight-blue mt-2 mb-4">
                        Visit Our Studio
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        เชิญแวะชมและลองชุดจริงได้ที่หน้าร้านของเรา พร้อมให้คำปรึกษาโดยทีมงานมืออาชีพ
                        <br />
                        <span className="font-bold text-midnight-blue">เปิดบริการทุกวัน 10:00 - 19:00 น.</span>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Map */}
                    <div className="lg:w-2/3 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                        <iframe
                            src="https://maps.google.com/maps?q=14.9986609,103.1084674&hl=th&z=19&output=embed"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>

                    {/* Info Card */}
                    <div className="lg:w-1/3 w-full bg-midnight-blue text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                        <h3 className="text-2xl font-playfair font-bold mb-6 border-b border-white/20 pb-4">
                            ข้อมูลการติดต่อ
                        </h3>

                        <div className="space-y-6 font-light">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-map-marker-alt text-gold"></i>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">ที่อยู่ร้าน</p>
                                    <p className="opacity-80 leading-relaxed">
                                        เลขที่ X4W5+X3 ตำบลในเมือง <br />
                                        อำเภอเมืองบุรีรัมย์ จ.บุรีรัมย์ 31000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-phone-alt text-gold"></i>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">เบอร์โทรศัพท์</p>
                                    <p className="opacity-80 text-xl font-mono">089 722 9747</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fab fa-facebook-f text-gold"></i>
                                </div>
                                <div>
                                    <p className="font-bold text-lg mb-1">Facebook</p>
                                    <a href="https://www.facebook.com/andamanweddingburiram" target="_blank" className="opacity-80 hover:text-gold hover:underline transition-all">
                                        Andaman Wedding Studio Buriram
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/sg22B2ft49rANLjG8"
                            target="_blank"
                            className="mt-8 bg-gold text-midnight-blue text-center py-3 rounded-xl font-bold hover:bg-white transition-colors shadow-lg"
                        >
                            <i className="fas fa-location-arrow mr-2"></i> นำทางไปที่ร้าน
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

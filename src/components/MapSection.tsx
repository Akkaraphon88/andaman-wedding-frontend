export default function MapSection() {
    return (
        <section className="py-16 bg-white font-prompt">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-midnight-blue mb-4">
                        Visit Our Studio
                    </h2>
                    <p className="text-gray-600">
                        แวะมาลองชุดสวยๆ ที่หน้าร้านของเรา
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-silver/30">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15406.879796677935!2d103.1029273!3d14.9961623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311996144e3189e3%3A0xc3040c1143891a9b!2z4Lii4Li04LiZ4Lii4Lit4LihIOC4quC4leC4ueC4lOC4tOC5guC4rSDguJrguLjguKPguLXguKPguLHguKHguKI!5e0!3m2!1sth!2sth!4v1698765432100!5m2!1sth!2sth"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="text-center mt-8">
                    <p className="text-xl text-midnight-blue font-bold">อันดามัน เวดดิ้ง สตูดิโอ บุรีรัมย์</p>
                    <p className="text-gray-600 mt-2">ถนน พิทักษ์ บุรีรัมย์</p>
                    <p className="text-gray-600">โทร: 089 722 9747</p>
                </div>
            </div>
        </section>
    );
}

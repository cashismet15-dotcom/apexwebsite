export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-32 text-center relative">
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
          Kaçan Her Mesaj, Kaybolan Bir Fırsat.
        </h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
          Asistan360 olarak işletmenizin müşteri iletişimini yapay zeka ile
          otomatikleştiriyoruz. Geç yanıt yok, atlanmış lead yok, yorgun ekipler
          yok.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up animation-delay-400">
          <a
            href="#hizmetler"
            className="px-9 py-4 bg-white text-blue-600 rounded-full text-base font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Sistemi İnceleyin
          </a>
          <a
            href="#iletisim"
            className="px-9 py-4 bg-transparent text-white border-2 border-white rounded-full text-base font-semibold hover:bg-white hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
          >
            Kısa Bir Görüşme Planlayalım
          </a>
        </div>
      </div>
    </section>
  );
}

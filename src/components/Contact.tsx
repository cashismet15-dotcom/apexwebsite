import { MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const phoneNumber = '908508407245';
  const message = encodeURIComponent('Merhaba, işletmeniz hakkında bilgi alabilir miyim?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="iletisim" className="py-20 px-5 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Hadi Konuşalım</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Müşteri iletişiminizde neyin eksik olduğunu, yapay zekanın işinizi nasıl değiştirebileceğini birlikte keşfedelim.
        </p>

        <div className="my-8 text-xl">
          <p className="mb-8 font-semibold">
            15 dakikalık ücretsiz bir görüşme için WhatsApp üzerinden bize ulaşın:
          </p>

          <p className="flex items-center justify-center gap-3 mb-10 text-2xl">
            <Phone className="w-6 h-6" />
            <span>0850 840 72 45</span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp'tan Sohbet Başlat
          </a>

          <p className="mt-6 text-sm opacity-75 max-w-md mx-auto">
            Butona tıkladığınızda Asistan360 ile WhatsApp üzerinden anında konuşmaya başlayabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
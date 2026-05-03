import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'WhatsApp & Instagram Otomasyonları',
    description:
      '7/24 aktif chatbot sistemleri. Müşteriler mesaj attığında anında yanıt alır, sorularını sorar, bilgi toplar, randevu önerisi yapar veya doğrudan ekibinize yönlendirir. Geç yanıt diye bir şey kalmaz.',
  },
  {
    title: 'Müşteri İletişimi Otomasyonları',
    description:
      'İlk temastan takibe kadar tüm süreci yöneten akıllı sistemler. Potansiyel müşteri sisteme girdiğinde, hangi aşamada olduğunu, ne zaman tekrar iletişime geçilmesi gerektiğini takip eder.',
  },
  {
    title: 'Lead Toplama ve Ön Eleme',
    description:
      'Gelen talepleri otomatik olarak kategorize eden, ihtiyaçları belirleyen ve öncelik sırasına koyan sistemler. Ekibiniz yalnızca gerçek potansiyele sahip görüşmelere zaman ayırır.',
  },
  {
    title: 'Satış Ekipleri İçin Destek Otomasyonları',
    description:
      'Satış süreçlerinizi hızlandıran, tekrarlayan görevleri ortadan kaldıran yapay zeka asistanları. Teklif hazırlama, müşteri bilgilerini güncelleme, hatırlatma mesajları gönderme gibi işler otomatik yürür.',
  },
  {
    title: 'Gmail ve Gelen Taleplerin Akıllı Yönetimi',
    description:
      'E-posta kutunuza gelen tüm mesajları yapay zeka analiz eder, kategorize eder ve önceliklendirir. Önemli talepler anında size ulaşır, spam ve gereksiz içerik filtrelenir.',
  },
  {
    title: 'Görsel ve İçerik Üretim Otomasyonları',
    description:
      'Sosyal medya görselleri, ürün açıklamaları, e-posta metinleri gibi rutin içerikleri yapay zeka ile üretin. Sürekli içerik ihtiyacı olan işletmeler için zaman kazandıran, tutarlı çıktı veren sistemler.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hizmetler" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Ne Tür Sistemler Geliştiriyoruz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-10 rounded-2xl border-l-4 border-blue-600 shadow-lg hover:border-l-8 hover:translate-x-2 hover:shadow-xl transition-all duration-300 opacity-0"
            >
              <h3 className="text-gray-800 mb-4 text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

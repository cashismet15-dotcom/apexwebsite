import { useEffect, useRef } from 'react';

const problems = [
  {
    title: 'Yanıtsız Mesajlar',
    description:
      'Her gün WhatsApp\'tan, Instagram\'dan, e-postadan onlarca mesaj geliyor. Bir kısmına saatler sonra yanıt verebiliyorsunuz, bir kısmı kaybolup gidiyor. Müşteri "görüldü" atıyor, siz dönmeden rakibinizle görüşmeye başlıyor.',
  },
  {
    title: 'Yoğunlukta Kaybolan Fırsatlar',
    description:
      'Mesai saati dışında gelen talepler sabaha kadar bekliyor. Hafta sonu ulaşan potansiyel müşteri, pazartesi yanıt bulana kadar başka bir çözüm bulmuş oluyor. Fırsat penceresi çok kısa, yanıt süreniz çok uzun.',
  },
  {
    title: 'Tekrarlayan Sorular, Yorgun Ekipler',
    description:
      '"Fiyat ne kadar?", "Nasıl çalışıyor?", "Ne zaman teslim edersiniz?" aynı soruları günde 20 kez yanıtlamak, ekibinizin asıl işine odaklanmasını engelliyor. Rutin işler zamana, enerjiye ve motivasyona mal oluyor.',
  },
  {
    title: 'Dağınık Bilgi Yönetimi',
    description:
      'Kim ne sordu, hangi aşamada, ne zaman tekrar dönülmeli? Excel tabloları, WhatsApp notları, kafanızdaki hatırlatmalar... Sistem yok, süreç yok, müşteri deneyimi tutarsız.',
  },
];

export default function Problems() {
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

    const cards = sectionRef.current?.querySelectorAll('.problem-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problemler" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Tanıdık Geliyor mu?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 opacity-0"
            >
              <h3 className="text-red-500 mb-4 text-2xl font-semibold">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

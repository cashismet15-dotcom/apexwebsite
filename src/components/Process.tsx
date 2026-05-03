import { useEffect, useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'Keşif Görüşmesi',
    description:
      'İşletmenizi, iş süreçlerinizi ve iletişim ihtiyaçlarınızı dinliyoruz. Hangi noktalarda otomasyona ihtiyaç olduğunu birlikte belirliyoruz.',
  },
  {
    number: 2,
    title: 'Özel Sistem Tasarımı',
    description:
      'Sizin işinize özel bir otomasyon sistemi tasarlıyoruz. Hazır kalıp kullanmıyoruz; her detay iş akışınıza göre şekilleniyor.',
  },
  {
    number: 3,
    title: 'Kurulum ve Entegrasyon',
    description:
      'Sistemi mevcut iletişim kanallarınıza entegre ediyoruz. Ekibinize nasıl çalıştığını gösteriyoruz, gerekli eğitimleri veriyoruz.',
  },
  {
    number: 4,
    title: 'Canlıya Geçiş ve Destek',
    description:
      'Sistem aktif hale geliyor. İlk haftalarda yakından takip ediyoruz, gerekirse ince ayarlar yapıyoruz. İhtiyaç anında yanınızdayız.',
  },
];

export default function Process() {
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

    const stepCards = sectionRef.current?.querySelectorAll('.step-card');
    stepCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="surecimiz"
      className="py-20 px-5 bg-gray-50"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Süreç Basit ve Net
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card text-center p-8 bg-white rounded-2xl shadow-lg opacity-0"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-gray-800 mb-4 font-semibold text-lg">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

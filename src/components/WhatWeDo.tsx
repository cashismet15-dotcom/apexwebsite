import { Check } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Biz Müşteri İletişiminizi Otomasyon Haline Getiriyoruz
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl">
          <p className="text-gray-600 leading-relaxed mb-6">
            Asistan360, işletmenizin müşteri iletişimini yapay zeka ile
            güçlendiren özel çözümler geliştirir. Hazır paket sunmayız, ajans
            gibi çalışmayız. Her sistem, sizin iş sürecinize, sektörünüze ve
            ihtiyaçlarınıza göre kurgulanır.
          </p>

          <h3 className="text-gray-800 my-8 text-2xl font-semibold">
            Yapay Zeka:
          </h3>
          <ul className="space-y-4">
            {[
              'İlk teması profesyonel şekilde yönetir',
              'Gelen her mesajı anında karşılar',
              'Soruları yanıtlar, bilgi toplar, yönlendirir',
              'Ekibinizin zamanını kritik işlere ayırmasını sağlar',
              'Potansiyel müşterilerin sisteminizde tutulmasını garanti eder',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-semibold text-gray-800 leading-relaxed">
            Amacımız satış yapmak değil, işletmenizin iletişim altyapısını
            güçlendirmektir. Siz asıl işinize odaklanın, müşteri iletişimi bizim
            sistemimizle çalışsın.
          </p>
        </div>
      </div>
    </section>
  );
}

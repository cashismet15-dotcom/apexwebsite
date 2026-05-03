import { ArrowRight } from 'lucide-react';

const targetItems = [
  'E-ticaret, danışmanlık, eğitim, hukuk, sağlık, emlak gibi sektörlerde faaliyet gösteriyorsanız',
  'Günde 20\'den fazla WhatsApp, Instagram veya e-posta alıyorsanız',
  'Mesai dışı saatlerde gelen mesajlara zamanında yanıt veremiyorsanız',
  'Potansiyel müşterilerin bir kısmının kaybolduğunu biliyorsanız',
  'Küçük bir ekiple büyük hacimli iletişimi yönetmeye çalışıyorsanız',
  'Ekibiniz rutin sorularla boğuşmak yerine asıl işe odaklanmalıysa',
  'Müşteri deneyimini profesyonelleştirmek ve sürdürülebilir hale getirmek istiyorsanız',
];

export default function TargetAudience() {
  return (
    <section id="kimler-icin" className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Bu Sistemler Sizin İçin mi?
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          ApexTechAI'nin geliştirdiği otomasyonlar, müşteri iletişimi yoğun olan
          ve her mesajın değerli olduğunu bilen işletmeler için tasarlandı.
        </p>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {targetItems.map((item, index) => (
              <li
                key={index}
                className="p-5 pl-14 bg-white rounded-xl shadow-lg relative hover:translate-x-3 hover:shadow-xl transition-all duration-300 text-gray-600"
              >
                <ArrowRight className="w-6 h-6 text-blue-600 font-bold absolute left-6 top-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

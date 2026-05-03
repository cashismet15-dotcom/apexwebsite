import { Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="iletisim" className="py-20 px-5 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Hadi Konuşalım</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Müşteri iletişiminizde neyin eksik olduğunu, yapay zekanın işinizi nasıl değiştirebileceğini birlikte keşfedelim.
        </p>
        <div className="my-8 text-xl">
          <p className="mb-6 font-semibold">
            15 dakikalık ücretsiz bir görüşme için bize ulaşın:
          </p>
          <p className="flex items-center justify-center gap-3 mb-8">
            <Mail className="w-6 h-6" />
            <a href="mailto:info@apextechai.com.tr" className="border-b-2 border-white hover:opacity-80 transition-opacity">
              info@apextechai.com.tr
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12">
          <div className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">İsim / Şirket Adı *</label>
              <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Adınız veya şirket adınız" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">E-posta *</label>
              <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="ornek@email.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">Telefon</label>
              <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+90 555 123 45 67" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Mesajınız *</label>
              <textarea id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="İşletmenizden ve hangi tür otomasyona ihtiyaç duyduğunuzdan kısaca bahsedin..." />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 px-8 bg-white text-slate-900 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
              {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center font-semibold">
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
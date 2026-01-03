import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      const subject = `Consultation Request: ${formData.name} (${formData.company || 'Private Client'})`;
      const date = new Date().toLocaleString();
      
      const body = 
        `CONSULTATION INQUIRY\n` +
        `---------------------------\n` +
        `Date: ${date}\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.company || 'N/A'}\n` +
        `Email: ${formData.email}\n\n` +
        `MESSAGE:\n` +
        `"${formData.message}"\n` +
        `---------------------------\n` +
        `Sent via Lucia Maina's Professional Website`;

      const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      
      setIsProcessing(false);
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-gold serif italic text-xl uppercase tracking-widest mb-3">Get In Touch</h2>
              <h3 className="text-2xl md:text-3xl serif text-white font-bold mb-4">Let's Secure Your Financial Future</h3>
              <p className="text-white/80 text-base leading-relaxed max-w-md font-light">
                Ready to optimize your tax strategy? Reach out today for a discovery consultation.
              </p>
            </div>

            <div className="space-y-5">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-navy/60 backdrop-blur-md flex items-center justify-center rounded-lg shadow-lg group-hover:bg-gold transition-all duration-300 border border-gold/10 group-hover:border-white/20">
                  <Mail className="text-gold group-hover:text-navy" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gold/50 uppercase tracking-wider">Email Lucia</p>
                  <p className="text-white font-bold text-lg">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-navy/60 backdrop-blur-md flex items-center justify-center rounded-lg shadow-lg group-hover:bg-gold transition-all duration-300 border border-gold/10 group-hover:border-white/20">
                  <Phone className="text-gold group-hover:text-navy" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gold/50 uppercase tracking-wider">Call or WhatsApp</p>
                  <p className="text-white font-bold text-lg">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-navy/60 backdrop-blur-md flex items-center justify-center rounded-lg shadow-lg border border-gold/10">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gold/50 uppercase tracking-wider">Office Location</p>
                  <p className="text-white font-bold text-lg">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-3xl border border-gold/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full -mr-12 -mt-12"></div>
            
            {submitted ? (
              <div className="h-[350px] flex flex-col items-center justify-center text-center space-y-5 animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full scale-150 animate-pulse"></div>
                  <CheckCircle size={60} className="text-gold relative z-10" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-2xl font-bold text-white serif">Message Prepared!</h4>
                  <p className="text-white/80 max-w-xs mx-auto text-base font-light">
                    I've opened your email client. Simply hit <strong>'Send'</strong>.
                  </p>
                </div>
                <button onClick={() => setSubmitted(false)} className="bg-gold text-navy px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all shadow-lg text-sm">
                  Return to Form
                </button>
              </div>
            ) : (
              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Full Name</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border-2 border-white/5 bg-navy/50 text-white focus:border-gold outline-none transition-all placeholder:text-white/5 text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Company Name</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border-2 border-white/5 bg-navy/50 text-white focus:border-gold outline-none transition-all placeholder:text-white/5 text-sm" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Email Address</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-lg border-2 border-white/5 bg-navy/50 text-white focus:border-gold outline-none transition-all placeholder:text-white/5 text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Message</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-lg border-2 border-white/5 bg-navy/50 text-white focus:border-gold outline-none transition-all resize-none placeholder:text-white/5 text-sm" placeholder="How can I assist you?"></textarea>
                </div>
                <button type="submit" disabled={isProcessing} className={`w-full py-4 rounded-lg font-bold text-base flex items-center justify-center gap-4 transition-all duration-500 shadow-xl group ${isProcessing ? 'bg-navy/50 text-white/20 cursor-not-allowed' : 'bg-gold text-navy hover:bg-white hover:-translate-y-1'}`}>
                  {isProcessing ? <><Loader2 size={20} className="animate-spin" /> Preparing...</> : <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
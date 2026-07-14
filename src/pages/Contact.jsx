import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { agencyInfo } from '../data/propertiesConfig';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.message.trim()) errs.message = 'Please enter a message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${agencyInfo.name}, my name is ${form.name}. ${form.message}\n\nMy phone: ${form.phone}\nMy email: ${form.email}`
  );

  return (
    <main className="pt-16 sm:pt-20 min-h-screen">
      <div className="bg-ink py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-2">Get in Touch</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white m-0">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-sm p-8 sm:p-12 border border-mist/60 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink m-0 mb-3">Message Ready</h2>
                <p className="text-slate-soft mb-6 max-w-md mx-auto">
                  Your enquiry is ready to send via WhatsApp. Click the button below to open WhatsApp and send your message directly to our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${agencyInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-sm text-sm font-semibold no-underline hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }); }}
                    className="px-6 py-3 bg-stone-light text-ink text-sm font-semibold rounded-sm border-none cursor-pointer hover:bg-mist transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-sm p-6 sm:p-8 border border-mist/60 shadow-sm">
                <h2 className="font-display text-xl font-bold text-ink m-0 mb-6">Send Us a Message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1.5 font-medium">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-3 py-2.5 bg-stone-light border rounded-sm text-sm text-ink focus:outline-none focus:border-gold ${
                        errors.name ? 'border-red-400' : 'border-mist'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 m-0">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1.5 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full px-3 py-2.5 bg-stone-light border rounded-sm text-sm text-ink focus:outline-none focus:border-gold ${
                        errors.phone ? 'border-red-400' : 'border-mist'
                      }`}
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 m-0">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1.5 font-medium">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-3 py-2.5 bg-stone-light border rounded-sm text-sm text-ink focus:outline-none focus:border-gold ${
                      errors.email ? 'border-red-400' : 'border-mist'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 m-0">{errors.email}</p>}
                </div>
                <div className="mb-6">
                  <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1.5 font-medium">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className={`w-full px-3 py-2.5 bg-stone-light border rounded-sm text-sm text-ink focus:outline-none focus:border-gold resize-y ${
                      errors.message ? 'border-red-400' : 'border-mist'
                    }`}
                    placeholder="Tell us about the property you're looking for, or any questions you have..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 m-0">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gold text-ink px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider border-none cursor-pointer hover:bg-clay transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-sm p-6 border border-mist/60 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-ink m-0 mb-4">Contact Details</h3>
              <div className="space-y-4">
                <a href={`tel:${agencyInfo.phone}`} className="flex items-center gap-3 text-sm text-slate-soft hover:text-gold transition-colors duration-200 no-underline">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  {agencyInfo.phone}
                </a>
                <a href={`mailto:${agencyInfo.email}`} className="flex items-center gap-3 text-sm text-slate-soft hover:text-gold transition-colors duration-200 no-underline">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  {agencyInfo.email}
                </a>
                <div className="flex items-start gap-3 text-sm text-slate-soft">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="m-0">{agencyInfo.address}</p>
                    <p className="m-0 mt-2">{agencyInfo.secondaryAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-soft">
                  <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <p className="m-0">{agencyInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-sm overflow-hidden border border-mist/60 shadow-sm">
              <div className="aspect-video bg-mist">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.5!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJNIDDCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Northgate Properties office location"
                />
              </div>
            </div>

            <a
              href={`https://wa.me/${agencyInfo.whatsapp}?text=${encodeURIComponent(`Hello ${agencyInfo.name}, I'd like to make an enquiry.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-sm text-sm font-semibold no-underline hover:bg-green-700 transition-colors duration-200 w-full"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { CurlyDecoration } from "../components/CurlyDecoration";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Yo! Thanks for reaching out! I'll spiral back to you ASAP! 🌀");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "curls@marcusrodriguez.design",
      href: "mailto:curls@marcusrodriguez.design",
      emoji: "📧",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (305) 555-CURL",
      href: "tel:+13055552875",
      emoji: "📱",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Miami, FL (Where the curls thrive!)",
      href: null,
      emoji: "🌴",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-900 dark:to-purple-800 text-white py-20 px-4 relative overflow-hidden">
        <CurlyDecoration />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl mb-6">💬</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Let's Vibe Together!
            </h1>
            <p className="text-2xl text-white/95 max-w-3xl mx-auto">
              Got a project that needs that curly energy? Need some UX magic? Let's spiral into something amazing! Drop me a message and let's make waves! 🌊
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-6xl">🌀</div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              Send Me Some Vibes ✨
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 focus:border-purple-600 dark:focus:border-purple-400 outline-none transition"
                  placeholder="Marcus Rodriguez..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 focus:border-purple-600 dark:focus:border-purple-400 outline-none transition"
                  placeholder="you@awesome.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  What's Up?
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 focus:border-purple-600 dark:focus:border-purple-400 outline-none transition"
                  placeholder="Let's build something curly!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 focus:border-purple-600 dark:focus:border-purple-400 outline-none transition resize-none"
                  placeholder="Tell me about your project and what kind of bounce you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-700 dark:to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-bold text-lg"
              >
                <Sparkles size={24} />
                Send Those Vibes!
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 text-6xl animate-spin-slow">✨</div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              Hit Me Up! 📲
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Always down to chat about UX, curly hair care routines, or your next big project. 
              I typically spiral back within 24 hours! ⚡
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <motion.div 
                  key={info.label} 
                  className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex-shrink-0 text-4xl">
                    {info.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-purple-600 dark:text-purple-400">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="bg-gradient-to-br from-purple-600 to-purple-500 dark:from-purple-800 dark:to-purple-700 text-white rounded-3xl p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 text-6xl opacity-20">🌀</div>
              <h3 className="font-bold text-2xl mb-4">My Vibe Hours ⏰</h3>
              <div className="space-y-2 text-white/95">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Weekends: Curl care & creative thinking 💭</p>
                <p className="mt-4 text-sm font-bold text-purple-200">
                  Currently taking on curly projects for Q2 2026! 🚀
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-50 dark:bg-gray-900 py-20 px-4 relative overflow-hidden border-t border-purple-100 dark:border-purple-900/50">
        <CurlyDecoration />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              Ready to Add Some Bounce? 🌊
            </h2>
            <p className="text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Let's collaborate and create UX experiences that flow as naturally as curls on a humid day! No straight lines, just smooth spirals! 🎨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/portfolio"
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all transform hover:scale-110 font-bold shadow-xl"
              >
                Check My Spirals 🌀
              </a>
              <a
                href="mailto:curls@marcusrodriguez.design"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-700 dark:to-purple-600 text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-110 font-bold"
              >
                Email Me Directly 📧
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
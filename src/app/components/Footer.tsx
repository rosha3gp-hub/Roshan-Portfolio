import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">✨</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
                Bharath Roshan GP
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Visual Designer and Creative Strategist. Bridging technical strategy and stunning visuals. 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all transform hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Bharath Roshan GP. Designed with creativity and strategy! ✨🚀</p>
        </div>
      </div>
    </footer>
  );
}
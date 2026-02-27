import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { CurlyDecoration } from "../components/CurlyDecoration";

export function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "The Spiral App",
      category: "Mobile UX • Swirly Good",
      image: "https://images.unsplash.com/photo-1759266292888-e8709d1ce717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwZ3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🌈",
    },
    {
      id: 2,
      title: "Wave Dashboard",
      category: "Web App UX • Flowing Data",
      image: "https://images.unsplash.com/photo-1714779573250-36242918e044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwd2F2ZXN8ZW58MXx8fHwxNzcxMTQ0NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🌊",
    },
    {
      id: 3,
      title: "Bounce Commerce",
      category: "Product Design • Extra Springy",
      image: "https://images.unsplash.com/photo-1750706888779-95b83a3173d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY29sb3JzJTIwZGVzaWdufGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "✨",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
        <CurlyDecoration />
        
        {/* Animated curly lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -left-20 w-96 h-96 border-8 border-purple-200 dark:border-purple-900/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 border-8 border-purple-200 dark:border-purple-900/30 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <span className="text-9xl">🌀</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent"
          >
            Curly Hair, Curvy Flows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300"
          >
            Yo! I'm Marcus "Curls" Rodriguez—a UX Designer who designs experiences as dynamic and bouncy as my curls. No straight lines here, just smooth spirals and funky flows! 🎨
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all transform hover:scale-110 shadow-xl font-bold"
            >
              <Sparkles size={20} />
              Peep My Work
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Bouncing dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-purple-400/30 dark:bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl opacity-50" />
        
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              My Wavy Portfolio 🌊
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              Recent projects with extra bounce and personality
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-square mb-4 shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-3xl mb-2">{project.emoji}</p>
                    <p className="text-sm mb-1 text-purple-200">{project.category}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white border-4 border-purple-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-110 font-bold"
          >
            See All The Spirals
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-900 dark:to-purple-800 text-white py-20 px-4 relative overflow-hidden">
        <CurlyDecoration />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Make Some Waves! 🌊</h2>
            <p className="text-2xl mb-8 text-white/95">
              Got a project that needs that curly energy? Let's spiral into something amazing together!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-full hover:bg-purple-50 transition-all transform hover:scale-110 shadow-2xl font-bold text-xl"
            >
              <Sparkles size={24} />
              Hit Me Up
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
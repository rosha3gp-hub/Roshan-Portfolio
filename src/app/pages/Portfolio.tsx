import { useState } from "react";
import { motion } from "motion/react";
import { CurlyDecoration } from "../components/CurlyDecoration";

export function Portfolio() {
  const categories = ["All Projects", "Graphic Design", "UX/UI Design", "Motion Graphics", "Video Editing"];
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const projects = [
    {
      id: 1,
      title: "Google Ads Content 🎯",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1759266292888-e8709d1ce717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwZ3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Best in class Google Ads multimedia content",
      emoji: "🎨",
    },
    {
      id: 2,
      title: "Interactive Chatbot ✨",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1714779573250-36242918e044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwd2F2ZXN8ZW58MXx8fHwxNzcxMTQ0NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Optimized UX/UI for internal digital experiences",
      emoji: "🤖",
    },
    {
      id: 3,
      title: "Product Animations 🎬",
      category: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1750706888779-95b83a3173d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY29sb3JzJTIwZGVzaWdufGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Compelling GIFs bringing complex info to life",
      emoji: "💫",
    },
    {
      id: 4,
      title: "Instructional Videos 🎥",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1770197448864-18ab6c2c4894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHJhaW5ib3clMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcxMTQ0NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Engaging voiceover scripts and clean edits",
      emoji: "📺",
    },
    {
      id: 5,
      title: "Marketing Flowcharts 📊",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1764506354210-46e42f575022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwcGF0dGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NzExNDQ1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Visual design materials and infographics",
      emoji: "🎯",
    },
    {
      id: 6,
      title: "Pitch Presentations 📈",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1756723903184-32fed816ea5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Visually engaging PowerPoint decks",
      emoji: "📊",
    },
    {
      id: 7,
      title: "Brand Narratives 📝",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1759266292888-e8709d1ce717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwZ3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Seamless narratives with stunning VFX",
      emoji: "🎬",
    },
    {
      id: 8,
      title: "Comic Portals 🦸",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1714779573250-36242918e044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwd2F2ZXN8ZW58MXx8fHwxNzcxMTQ0NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Dynamic interfaces for comic platforms",
      emoji: "🚀",
    },
    {
      id: 9,
      title: "AI Integrations 🤖",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1750706888779-95b83a3173d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY29sb3JzJTIwZGVzaWdufGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Enhancing UX using cutting-edge AI tools",
      emoji: "🧠",
    },
  ];

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
            <div className="text-8xl mb-6">🚀</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-2xl text-white/95 max-w-3xl mx-auto">
              A gallery of visual design, motion graphics, and strategic projects spanning my career. 🎨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-purple-50 dark:bg-gray-900 border-b-4 border-purple-200 dark:border-purple-800 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all transform hover:scale-110 font-bold ${activeCategory === category
                    ? "bg-purple-600 text-white shadow-xl"
                    : "bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl opacity-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-square mb-4 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="text-5xl mb-2">{project.emoji}</div>
                    <span className="text-sm block mb-1 text-purple-200 font-bold">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="md:hidden text-center">
                <span className="text-3xl block mb-2">{project.emoji}</span>
                <span className="text-sm text-purple-600 dark:text-purple-400 block mb-1 font-bold">{project.category}</span>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
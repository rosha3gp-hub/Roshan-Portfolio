import { Award, Users, Palette, Target } from "lucide-react";
import { motion } from "motion/react";
import { CurlyDecoration } from "../components/CurlyDecoration";

export function About() {
  const skills = [
    "User Research 🔍",
    "User Interviews 💬",
    "Usability Testing ✅",
    "Wireframing 📐",
    "Prototyping 🎨",
    "Info Architecture 🏗️",
    "Interaction Design ✨",
    "Design Systems 🌈",
  ];

  const stats = [
    { icon: Award, label: "Years Vibing", value: "6+", emoji: "🎉" },
    { icon: Users, label: "Users Vibed With", value: "500+", emoji: "👥" },
    { icon: Palette, label: "Curly Projects", value: "75+", emoji: "🌀" },
    { icon: Target, label: "Bounce Rate", value: "+99%", emoji: "🚀" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              The Curly Chronicles 🌀
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Yo! I'm Marcus "Curls" Rodriguez, a UX Designer based in Miami with hair as dynamic 
              as my design process. With 6+ years of experience creating digital experiences that 
              bounce, flow, and spiral in all the right ways, I bring that curly hair energy to 
              every project! 💫
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My approach? Like managing curly hair, great UX requires patience, understanding, 
              and the right technique. I dive deep into user research, embrace the messy middle 
              of ideation, and always iterate until things flow naturally. No two curls are the 
              same, and no two users are either! 🎨
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not designing wavy experiences, you'll find me at the barber shop talking 
              curl patterns, teaching design workshops, or experimenting with new prototype tools. 
              Life's too short for straight lines and boring interfaces! ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-purple-200 dark:border-purple-900/50">
              <img
                src="https://images.unsplash.com/photo-1756723903184-32fed816ea5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MTE0NDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Curly UX workspace"
                className="rounded-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 text-8xl animate-bounce">🌀</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-900 dark:to-purple-800 py-20 px-4 relative overflow-hidden">
        <CurlyDecoration />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{stat.emoji}</div>
                <div className="text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
            My Spiral Skill Set 🎯
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            All the moves in my design toolkit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-purple-600 to-purple-500 dark:from-purple-800 dark:to-purple-700 text-white rounded-2xl p-6 text-center shadow-xl border-4 border-white dark:border-gray-800 cursor-pointer"
            >
              <p className="font-bold text-lg">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-purple-50 dark:bg-gray-900 py-20 px-4 relative overflow-hidden border-y border-purple-100 dark:border-purple-900/50">
        <CurlyDecoration />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
              The Curly UX Flow 🌊
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              Like defining curls, my process has bounce and structure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                emoji: "🔬",
                title: "Research & Discover",
                description: "Getting to know users like I know my curl pattern",
              },
              {
                step: "02",
                emoji: "💡",
                title: "Define & Ideate",
                description: "Shaping ideas like styling curls—with intention",
              },
              {
                step: "03",
                emoji: "🎨",
                title: "Design & Spiral",
                description: "Creating flows that bounce and feel natural",
              },
              {
                step: "04",
                emoji: "✅",
                title: "Test & Iterate",
                description: "Refining until everything has that perfect bounce",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-700 shadow-lg"
              >
                <div className="text-7xl mb-4">{phase.emoji}</div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">{phase.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{phase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Code2, Briefcase, Library, GraduationCap, Trophy, ChevronRight, MessageSquare, Download, Languages } from 'lucide-react';

/* 
  MODIFICACIÓN DE TEXTO:
  Para cambiar cualquier texto de la página, edita los valores dentro del objeto 'translations' a continuación.
  Cada idioma ('en' para inglés, 'es' para español) tiene sus propias secciones.
*/
const translations = {
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      stack: "Stack"
    },
    hero: {
      title: "Carlos Fernando",
      subtitle: "Rivas Jiménez",
      description: "Computer Engineering graduate passionate about software development and continuous learning.",
      contact: "Contact",
      whatsapp: "WhatsApp",
      cv: "Download CV",
      whatsappUrl: "https://wa.me/523311509928?text=Hello%20Carlos,%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
    },
    experience: {
      title: "Professional Experience",
      roles: [
        {
          title: "Full-Stack Software Developer Intern",
          company: "Universidad de Guadalajara - Rectoría General",
          date: "Sep 2025 — Feb 2026",
          tasks: [
            "Contribution to the migration of a scholarship management platform at the university level, replacing paper processes with a centralized digital workflow.",
            "Optimization of review and approval processes for applications through role-based workflows.",
            "Development of dashboards and reporting tools to improve visibility of funding applications."
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Distributed Media Processing System",
          desc: "Distributed architecture for remote media processing and file delivery between multiple devices.",
          tags: ["Python", "Cloud", "Distributed Systems", "Linux"]
        },
        {
          title: "Project 2 (Coming Soon)",
          desc: "Description of your next big project. Currently under development to showcase new capabilities.",
          tags: ["React", "TypeScript", "Tailwind"]
        }
      ]
    },
    stack: {
      title: "Technical Stack",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        tools: "Tools"
      }
    },
    education: {
      title: "Education",
      degree: "Computer Engineering",
      university: "Universidad de Guadalajara"
    },
    achievements: {
      title: "Achievements",
      title1: "Competitive Programming",
      desc1: "Participant in ICPC"
    },
    footer: "Built with React."
  },
  es: {
    nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Tecnologías"
    },
    hero: {
      title: "Carlos Fernando",
      subtitle: "Rivas Jiménez",
      description: "Graduado en Ingeniería en Computación apasionado por el desarrollo de software y el aprendizaje continuo.",
      contact: "Contacto",
      whatsapp: "WhatsApp",
      cv: "Descargar CV",
      whatsappUrl: "https://wa.me/523311509928?text=Hola%20Carlos,%20me%20gustaría%20ponerme%20en%20contacto%20contigo"
    },
    experience: {
      title: "Experiencia Profesional",
      roles: [
        {
          title: "Full-Stack Software Developer Intern",
          company: "Universidad de Guadalajara - Rectoría General",
          date: "Sep 2025 — Feb 2026",
          tasks: [
            "Contribución a la migración de una plataforma de gestión de becas a nivel universitario, reemplazando procesos en papel con un flujo de trabajo digital centralizado.",
            "Optimización de los procesos de revisión y aprobación de solicitudes mediante flujos de trabajo basados en roles.",
            "Desarrollo de dashboards y herramientas de reporte para mejorar la visibilidad de las solicitudes de financiamiento."
          ]
        }
      ]
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          title: "Distributed Media Processing System",
          desc: "Arquitectura distribuida para el procesamiento remoto de medios y entrega de archivos entre múltiples dispositivos.",
          tags: ["Python", "Cloud", "Sistemas Distribuidos", "Linux"]
        },
        {
          title: "Proyecto 2 (Próximamente)",
          desc: "Descripción de tu próximo gran proyecto. Actualmente en desarrollo para mostrar nuevas capacidades.",
          tags: ["React", "TypeScript", "Tailwind"]
        }
      ]
    },
    stack: {
      title: "Stack Tecnológico",
      categories: {
        languages: "Lenguajes",
        frameworks: "Frameworks",
        databases: "Bases de Datos",
        tools: "Herramientas"
      }
    },
    education: {
      title: "Educación",
      degree: "Ingeniería en Computación",
      university: "Universidad de Guadalajara"
    },
    achievements: {
      title: "Logros",
      title1: "Programación Competitiva",
      desc1: "Participante en ICPC"
    },
    footer: "Hecho con React."
  }
};

const App = () => {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = translations[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-200 selection:bg-purple-500/30 selection:text-purple-200 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 -z-10 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#2d0b52_0%,transparent_50%)] opacity-40" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#080808]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400"
          >
            Rivas0810<span className="text-purple-500">.</span>
          </motion.span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
              <a href="#experience" className="hover:text-purple-500 transition-colors">{t.nav.experience}</a>
              <a href="#projects" className="hover:text-purple-500 transition-colors">{t.nav.projects}</a>
              <a href="#stack" className="hover:text-purple-500 transition-colors">{t.nav.stack}</a>
            </div>
            <button 
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500 transition-all text-xs font-bold uppercase tracking-wider"
            >
              <Languages size={14} className="text-purple-500" />
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main 
          key={lang}
          {...fadeIn}
          className="max-w-5xl mx-auto px-6 pt-32 pb-20"
        >
          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              {t.hero.title} <br />
              <span className="text-zinc-500 italic">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="https://linkedin.com/in/fernando-rivas2003/" target="_blank" className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-purple-500 hover:-translate-y-1 transition-all group text-sm md:text-base">
                <Briefcase size={18} className="group-hover:text-purple-500" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Rivas0810" target="_blank" className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-purple-500 hover:-translate-y-1 transition-all group text-sm md:text-base">
                <Code2 size={18} className="group-hover:text-purple-500" />
                <span>GitHub</span>
              </a>
              <a href="mailto:fernandorivasj03@gmail.com" className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-zinc-900 border border-purple-500 text-white rounded-full hover:border-purple-300 hover:-translate-y-1 transition-all font-medium text-sm md:text-base shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <Mail size={18} />
                <span>{t.hero.contact}</span>
              </a>
              <a href={t.hero.whatsappUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-purple-500 hover:-translate-y-1 transition-all group text-sm md:text-base">
                <MessageSquare size={18} className="group-hover:text-purple-500" />
                <span>{t.hero.whatsapp}</span>
              </a>
              <a href="/cv.pdf" download className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-purple-500 hover:-translate-y-1 transition-all group text-sm md:text-base">
                <Download size={18} className="group-hover:text-purple-500" />
                <span>{t.hero.cv}</span>
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Briefcase className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl font-bold">{t.experience.title}</h2>
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-12 border-l border-zinc-800 ml-4 pl-8"
            >
              {t.experience.roles.map((role, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn} 
                  whileHover={{ y: -5 }}
                  className="relative group transition-all"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#080808] border-2 border-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all" />
                  <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-purple-500/50 transition-all backdrop-blur-sm shadow-xl">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{role.title}</h3>
                        <p className="text-purple-500 font-semibold text-base md:text-lg">{role.company}</p>
                      </div>
                      <span className="text-zinc-500 text-xs md:text-sm font-mono px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 w-fit">{role.date}</span>
                    </div>
                    <ul className="space-y-4 text-zinc-400 leading-relaxed text-base md:text-lg">
                      {role.tasks.map((task, j) => (
                        <li key={j} className="flex gap-3">
                          <ChevronRight size={20} className="text-purple-500 shrink-0 mt-1" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Code2 className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl font-bold">{t.projects.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.projects.items.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-zinc-900/20 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all opacity-80 hover:opacity-100"
                >
                  <div className="aspect-video bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                    <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest z-10">Imagen del Proyecto</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">{project.title}</h3>
                    <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-900/50 text-zinc-500 rounded border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-xs font-bold text-zinc-600 cursor-not-allowed uppercase tracking-widest">
                        <Code2 size={14} /> GitHub
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold text-zinc-600 cursor-not-allowed uppercase tracking-widest">
                        <ExternalLink size={14} /> Demo
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technical Stack */}
          <section id="stack" className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Library className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl font-bold">{t.stack.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: t.stack.categories.languages, items: ["PHP", "SQL", "JavaScript", "Python", "C++"] },
                { category: t.stack.categories.frameworks, items: ["Laravel", "Livewire", "Blade", "React"] },
                { category: t.stack.categories.databases, items: ["MySQL", "PostgreSQL"] },
                { category: t.stack.categories.tools, items: ["Git", "GitHub", "Docker", "Linux"] }
              ].map((group) => (
                <motion.div 
                  key={group.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded-lg text-sm border border-zinc-800 hover:border-purple-500/50 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education & Extra */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <GraduationCap className="text-purple-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold">{t.education.title}</h2>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h3 className="font-bold text-white mb-1">{t.education.degree}</h3>
                <p className="text-zinc-400 text-sm">{t.education.university}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Trophy className="text-purple-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold">{t.achievements.title}</h2>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                <h3 className="font-bold text-white mb-1">{t.achievements.title1}</h3>
                <p className="text-zinc-400 text-sm">{t.achievements.desc1}</p>
              </div>
            </motion.div>
          </section>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Carlos Fernando Rivas Jiménez. {t.footer}</p>
      </footer>
    </div>
  );
};

export default App;

import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code2, Briefcase, GraduationCap, Trophy, ChevronRight } from 'lucide-react';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-red-500/30 selection:text-red-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tighter"
          >
            CFRJ<span className="text-red-500">.</span>
          </motion.span>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#experience" className="hover:text-red-500 transition-colors">Experiencia</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">Proyectos</a>
            <a href="#stack" className="hover:text-red-500 transition-colors">Tecnologías</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section 
          {...fadeIn}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Carlos Fernando <br />
            <span className="text-zinc-500 italic">Rivas Jiménez</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
            Graduado en Ingeniería en Computación apasionado por el desarrollo de software y el aprendizaje continuo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://linkedin.com/in/fernando-rivas2003/" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-red-500 transition-all group">
              <Briefcase size={18} className="group-hover:text-red-500" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Rivas0810" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-red-500 transition-all group">
              <Code2 size={18} className="group-hover:text-red-500" />
              <span>GitHub</span>
            </a>
            <a href="mailto:fernandorivasj03@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all font-medium">
              <Mail size={18} />
              <span>Contacto</span>
            </a>
          </div>
        </motion.section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Briefcase className="text-red-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Experiencia Profesional</h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12 border-l border-zinc-800 ml-4 pl-8"
          >
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-zinc-950 border-2 border-red-500 rounded-full" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Full-Stack Software Developer Intern</h3>
                  <p className="text-red-500 font-medium">Universidad de Guadalajara - Rectoría General</p>
                </div>
                <span className="text-zinc-500 text-sm font-mono mt-1 md:mt-0">Sep 2025 — Feb 2026</span>
              </div>
              <ul className="space-y-3 text-zinc-400 leading-relaxed">
                <li className="flex gap-2">
                  <ChevronRight size={18} className="text-red-500 shrink-0 mt-1" />
                  Contribución a la migración de una plataforma de gestión de becas a nivel universitario, reemplazando procesos en papel con un flujo de trabajo digital centralizado.
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={18} className="text-red-500 shrink-0 mt-1" />
                  Optimización de los procesos de revisión y aprobación de solicitudes mediante flujos de trabajo basados en roles.
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={18} className="text-red-500 shrink-0 mt-1" />
                  Desarrollo de dashboards y herramientas de reporte para mejorar la visibilidad de las solicitudes de financiamiento.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Code2 className="text-red-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Distributed Media Processing System",
                desc: "Arquitectura distribuida para el procesamiento remoto de medios y entrega de archivos entre múltiples dispositivos.",
                tags: ["Node.js", "Cloud", "Distributed Systems"]
              },
              {
                title: "Project 2 (Próximamente)",
                desc: "Descripción de tu próximo gran proyecto. Actualmente en desarrollo para mostrar nuevas capacidades.",
                tags: ["React", "TypeScript", "Tailwind"]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all"
              >
                <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                  <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest z-10">Imagen del Proyecto</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 cursor-not-allowed uppercase tracking-widest">
                      <Code2 size={14} /> GitHub
                    </button>
                    <button className="flex items-center gap-2 text-xs font-bold text-zinc-500 cursor-not-allowed uppercase tracking-widest">
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
          <motion.div {...fadeIn} className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Trophy className="text-red-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold">Stack Tecnológico</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Lenguajes", items: ["PHP", "SQL", "JavaScript", "Python", "C++"] },
              { category: "Frameworks", items: ["Laravel", "Livewire", "Blade", "React"] },
              { category: "Bases de Datos", items: ["MySQL", "PostgreSQL"] },
              { category: "Herramientas", items: ["Git", "GitHub", "Docker", "Linux"] }
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
                    <span key={item} className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded-lg text-sm border border-zinc-800 hover:border-red-500/50 transition-colors cursor-default">
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
              <div className="p-2 bg-red-500/10 rounded-lg">
                <GraduationCap className="text-red-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Educación</h2>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="font-bold text-white mb-1">Ingeniería en Computación</h3>
              <p className="text-zinc-400 text-sm">Universidad de Guadalajara</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Trophy className="text-red-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Logros</h2>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="font-bold text-white mb-1">Competitive Programming</h3>
              <p className="text-zinc-400 text-sm">Participante activo en ICPC</p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Carlos Fernando Rivas Jiménez. Hecho con React & Red.</p>
      </footer>
    </div>
  );
};

export default App;

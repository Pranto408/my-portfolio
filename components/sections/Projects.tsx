"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { projects } from "@/lib/data";
import { ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-500" />
            Portfolio
            <span className="w-8 h-px bg-violet-500" />
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            A selection of projects that showcase my skills and passion for
            building exceptional products.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group glass border border-white/10 hover:border-violet-500/30 rounded-2xl overflow-hidden transition-all duration-500 border-gradient h-full flex flex-col"
              >
                {/* Fixed Image Container with Aspect Ratio */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Project number */}
                  <div className="absolute top-3 right-3 z-20 font-mono text-xs text-white/60 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
                    0{project.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Features
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((f) => (
                        <span
                          key={f}
                          className="flex items-center gap-1 text-xs font-body text-muted-foreground"
                        >
                          <Check
                            size={10}
                            className="text-violet-400 shrink-0"
                          />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-violet-600/10 border border-violet-500/20 text-violet-400 font-mono text-xs rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 glass border border-white/15 hover:border-violet-500/30 rounded-xl font-display text-sm font-semibold text-foreground transition-all duration-300"
                    >
                      <FaGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-xl font-display text-sm font-semibold text-white glow-sm transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
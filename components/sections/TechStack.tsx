"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { techStack } from "@/lib/data";

const TechIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, string> = {
    html5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  };

  return (
    <img
      src={icons[name]}
      alt={name}
      className="w-10 h-10 object-contain"
      style={{ filter: name === "express" || name === "nextjs" || name === "github" ? "invert(1)" : "none" }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
};

export function TechStack() {
  return (
    <section id="techstack" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-500" />
            My Arsenal
            <span className="w-8 h-px bg-violet-500" />
          </span>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            The technologies I use to craft powerful, modern web applications.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map(({ name, icon, color }, i) => (
            <SectionReveal key={name} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-gradient group glass border border-white/10 hover:border-violet-500/30 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
                style={{ "--tech-color": color } as React.CSSProperties}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: color }}
                  />
                  <TechIcon name={icon} color={color} />
                </div>
                <span className="font-display text-xs font-semibold text-muted-foreground group-hover:text-foreground text-center transition-colors duration-300">
                  {name}
                </span>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

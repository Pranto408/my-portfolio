"use client";
import { motion } from "framer-motion";
import { Download, Code2, Palette, Server, Lightbulb } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable, and readable code is my priority." },
  { icon: Palette, title: "UI/UX Design", desc: "Crafting pixel-perfect, beautiful interfaces users love." },
  { icon: Server, title: "Full Stack", desc: "End-to-end development from database to deployed frontend." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Breaking down complex problems into elegant solutions." },
];
const waveAnimation = {
  rotate: [0, 14, -8, 14, 0],
  transition: {
    duration: 1.8,
    repeat: Infinity,
    repeatDelay: 1.5,
  },
};

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16">
          <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-500" />
            About Me
            <span className="w-8 h-px bg-violet-500" />
          </span>
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            A passionate developer crafting digital experiences that matter.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Text */}
          {/* <div className="space-y-6">
            <SectionReveal delay={0.1}>
              <div className="glass border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Hi there! I&apos;m Pranto 👋
                </h3>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m a <span className="text-violet-400 font-medium">Full Stack Web Developer</span> based in Bangladesh, specializing in building exceptional digital experiences using the MERN stack and Next.js.
                  </p>
                  <p>
                    My journey began with a deep curiosity about how things work on the web, which evolved into a passion for creating clean, efficient, and scalable applications. I love turning complex problems into simple, elegant solutions.
                  </p>
                  <p>
                    I&apos;m currently pursuing my <span className="text-indigo-400 font-medium">B.Sc in Computer Science & Engineering</span> at Green University of Bangladesh, where I continue to deepen my technical foundation while working on real-world projects.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or designing UI concepts. I believe <span className="text-cyan-400 font-medium">great software is an art form</span> — it should be beautiful, functional, and purposeful.
                  </p>
                </div>

                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-display font-semibold rounded-xl glow-sm transition-all duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </SectionReveal>
          </div> */}
          <div className="space-y-6">
            <SectionReveal delay={0.1}>
              <div className="glass border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Hi there! I&apos;m Pranto{" "}
                  <motion.span
                    animate={waveAnimation}
                    style={{
                      display: "inline-block",
                      originX: 0.7,
                      originY: 0.7,
                    }}
                  >
                    👋
                  </motion.span>
                </h3>

                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m a{" "}
                    <span className="text-violet-400 font-medium">
                      Full Stack Web Developer
                    </span>{" "}
                    from Bangladesh, building modern, scalable web applications
                    using{" "}
                    <span className="text-indigo-400">
                      Next.js, React, Node.js, and MongoDB
                    </span>
                    .
                  </p>

                  <p>
                    I&apos;m a{" "}
                    <span className="text-indigo-400 font-medium">
                      B.Sc in Computer Science & Engineering graduate
                    </span>
                    , passionate about writing clean code and building
                    user-focused products.
                  </p>

                  <p>
                    My main focus is on{" "}
                    <span className="text-cyan-400">
                      frontend performance, backend APIs, and full-stack
                      architecture
                    </span>
                    . I enjoy turning complex problems into simple, fast, and
                    intuitive solutions.
                  </p>

                

                  <p>
                    Outside coding, I explore new technologies, improve UI/UX
                    design skills, and contribute to learning-based projects.
                  </p>
                </div>

                <motion.a
                  href="/Pranto_Dutta_Resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-display font-semibold rounded-xl glow-sm transition-all duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </SectionReveal>
          </div>

          {/* Right — Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <SectionReveal key={title} delay={i * 0.1 + 0.2}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass border border-white/10 hover:border-violet-500/30 rounded-2xl p-5 group cursor-default transition-all duration-300 border-gradient h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center mb-3 group-hover:from-violet-600/30 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-violet-400 group-hover:text-violet-300"
                    />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-1.5">
                    {title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

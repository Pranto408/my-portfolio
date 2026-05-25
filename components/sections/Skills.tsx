"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skills } from "@/lib/data";
import { Monitor, Server, Database, Wrench } from "lucide-react";

interface SkillBarProps { name: string; level: number; delay?: number; }

function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="font-mono text-xs text-violet-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, #7c3aed, #4f46e5, #06b6d4)",
          }}
        />
      </div>
    </div>
  );
}

const categories = [
  { key: "frontend", label: "Frontend", icon: Monitor, color: "violet" },
  { key: "backend", label: "Backend", icon: Server, color: "indigo" },
  { key: "database", label: "Database", icon: Database, color: "cyan" },
  { key: "tools", label: "Tools", icon: Wrench, color: "violet" },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-500" />
            Expertise
            <span className="w-8 h-px bg-violet-500" />
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            A snapshot of my technical proficiency across the full development stack.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(({ key, label, icon: Icon }, catI) => {
            const items = skills[key as keyof typeof skills];
            return (
              <SectionReveal key={key} delay={catI * 0.1}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="glass border border-white/10 hover:border-violet-500/20 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/20 flex items-center justify-center">
                      <Icon size={18} className="text-violet-400" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">{label}</h3>
                  </div>

                  <div className="space-y-4">
                    {items.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={i * 0.1 + catI * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

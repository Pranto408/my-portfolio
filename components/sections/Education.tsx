"use client";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { education } from "@/lib/data";
import { GraduationCap, BookOpen, School, CalendarDays } from "lucide-react";

const icons = [GraduationCap, BookOpen, School];

export function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-500" />
            Qualifications
            <span className="w-8 h-px bg-violet-500" />
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            The academic foundations that shaped my technical expertise.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line opacity-40 -translate-x-px hidden md:block" />

          <div className="space-y-8">
            {education.map(({ degree, institution, period, description }, i) => {
              const Icon = icons[i];
              const isLeft = i % 2 === 0;

              return (
                <SectionReveal key={degree} delay={i * 0.15} direction={isLeft ? "right" : "left"}>
                  <div className={`flex flex-col md:flex-row items-start gap-6 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                    {/* Timeline dot — desktop */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 items-center justify-center glow-sm border-4 border-background z-10"
                      style={{ top: `calc(${i * 33.33}% + 2rem)` }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`md:w-1/2 ${isLeft ? "md:pl-8 md:pr-0" : "md:pr-8 md:pl-0 md:ml-auto"} group`}
                    >
                      <div className="glass border border-white/10 hover:border-violet-500/30 rounded-2xl p-6 transition-all duration-300 border-gradient">
                        {/* Mobile icon */}
                        <div className="flex items-center gap-3 mb-3 md:hidden">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center glow-sm">
                            <Icon size={18} className="text-white" />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <CalendarDays size={14} className="text-violet-400" />
                          <span className="font-mono text-xs text-violet-400">{period}</span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-foreground mb-1">{degree}</h3>
                        <p className="font-body font-medium text-indigo-400 text-sm mb-3">{institution}</p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
                      </div>
                    </motion.div>

                    {/* Spacer for other side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Line 1-22 — replace with:
"use client";
import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-600/6 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex gap-6"
          >
            {/* Social Icons Vertical */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden sm:flex flex-col items-center gap-4 pt-4"
            >
              {[
                { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
                {
                  icon: FaLinkedin,
                  href: socialLinks.linkedin,
                  label: "LinkedIn",
                },
                { icon: Mail, href: socialLinks.email, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:border-violet-500/30 hover:glow-sm transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
              <div className="w-px h-16 bg-gradient-to-b from-violet-500/50 to-transparent mt-1" />
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden sm:flex flex-col items-center gap-4 pt-4"
            >
              {[
                {
                  icon: FaGithub,
                  href: socialLinks.github,
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: socialLinks.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: socialLinks.email,
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Icon */}
                  <Icon size={18} className="relative z-10" />
                </motion.a>
              ))}

              {/* Vertical Line */}
              <div className="w-px h-20 bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent mt-2" />
            </motion.div>

            {/* Text Content */}
            <div className="flex-1">
              <motion.div variants={fadeUp} className="mb-3">
                <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center gap-2">
                  <span className="w-8 h-px bg-violet-500 inline-block" />
                  Hello, I&apos;m
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-4 tracking-tight"
              >
                {" "}
                <span className="block">Pranto</span>{" "}
                <span className="gradient-text block">Dutta</span>{" "}
              </motion.h1>

              <motion.div variants={fadeUp} className="mb-6 h-8">
                <span className="font-display text-xl md:text-2xl font-semibold text-muted-foreground">
                  I&apos;m a{" "}
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "MERN Stack Developer",
                      2000,
                      "Next.js Developer",
                      2000,
                    ]}
                    repeat={Infinity}
                    className="text-violet-400"
                  />
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
              >
                I build modern, scalable, responsive, and high-performance web
                applications with beautiful user experiences that leave a
                lasting impression.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="flex gap-8 mt-10 pt-8 border-t border-white/8"
              >
                {[
                  { num: "3+", label: "Years Learning" },
                  { num: "20+", label: "Projects Built" },
                  { num: "100%", label: "Passion" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="font-display text-2xl font-bold gradient-text">
                      {num}
                    </div>
                    <div className="font-body text-xs text-muted-foreground mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Developer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-cyan-600/20 blur-2xl animate-glow-pulse" />

            {/* Spinning border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full p-0.5 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-600 via-transparent via-transparent to-indigo-600 opacity-60" />
              </div>

              {/* Inner circle with image */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 rounded-full overflow-hidden border-2 border-violet-500/30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(79,70,229,0.2) 100%)",
                }}
              >
                {/* Developer avatar placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-violet-900/50 to-indigo-900/50 flex items-center justify-center relative">
                  {/* SVG Developer Illustration */}
                  <img
                    src="/portfolio_image.png"
                    alt="Pranto Dutta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 top-1/4 glass border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-foreground whitespace-nowrap">
                  Available for hire
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-8 bottom-1/4 glass border border-white/15 rounded-xl px-3 py-2"
              >
                <div className="font-mono text-xs text-violet-400">
                  {"<MERN />"}
                </div>
                <div className="font-body text-xs text-muted-foreground">
                  Stack
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}

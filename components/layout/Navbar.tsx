"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import PremiumLogo from "../ui/PremiumLogo";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "instant" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass border-b border-white/10 py-3" : "py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="w-10 h-10 rounded-xl  flex items-center justify-center  group-hover:glow transition-all duration-300">
              <span className="font-display text-xl font-bold text-white">
                <PremiumLogo />
              </span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <motion.button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.3 }}
                  className={cn(
                    "relative px-4 py-2 font-body text-sm font-medium rounded-lg transition-all duration-300",
                    isActive
                      ? "text-violet-400"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-violet-600/10 rounded-lg border border-violet-500/20"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-72 z-40 glass border-l border-white/10 p-8 pt-24 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link, i) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl font-body font-medium transition-all duration-300",
                    isActive
                      ? "bg-violet-600/20 text-violet-400 border border-violet-500/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                  )}
                >
                  {link.name}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

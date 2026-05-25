"use client";
import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, socialLinks } from "@/lib/data";
import PremiumLogo from "../ui/PremiumLogo";

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "instant" });
    }
  };

  return (
    <footer className="border-t border-white/8 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo + desc */}
          <div>
            <div className="flex items-center  gap-8 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <span className="font-display text-xl font-bold text-white"><PremiumLogo/></span>
              </div>
              <span className="font-display text-lg font-bold gradient-text">Pranto Dutta</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer crafting modern, scalable web applications with passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-sm text-muted-foreground hover:text-violet-400 text-left transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
                { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: Mail, href: socialLinks.email, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 <span className="text-violet-400">Pranto Dutta</span>. All Rights Reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1.5">
            Crafted with <Heart size={14} className="text-red-400 fill-red-400" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/data";
import emailjs from "@emailjs/browser";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");

    try {
      await emailjs.send(
        "service_ne6s9qo",
        "template_6i3ps78",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "Q-gKshqA2n_37BccI",
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "prantodatta408@gmail.com", href: socialLinks.email },
    { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/prantodutta", href: socialLinks.linkedin },
    { icon: FaGithub, label: "GitHub", value: "github.com/prantodutta", href: socialLinks.github },
    { icon: MapPin, label: "Location", value: "Bangladesh 🇧🇩", href: null },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-mono text-violet-400 text-sm tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-500" />
            Get In Touch
            <span className="w-8 h-px bg-violet-500" />
          </span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Contact info */}
          <SectionReveal delay={0.1} className="lg:col-span-2">
            <div className="glass border border-white/10 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                Let&apos;s talk!
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
                I&apos;m currently open to freelance projects, full-time positions, and collaborations. Drop a message and I&apos;ll respond within 24 hours.
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-600/25 transition-colors">
                      <Icon size={18} className="text-violet-400" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted-foreground">{label}</div>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-violet-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="font-body text-sm text-foreground">{value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal delay={0.2} className="lg:col-span-3">
            <div className="glass border border-white/10 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-body text-sm font-medium text-muted-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.name ? "border-red-500/50 focus:ring-red-500/30" : "border-white/10 focus:border-violet-500/50 focus:ring-violet-500/20"}`}
                  />
                  {errors.name && <p className="mt-1 font-body text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-sm font-medium text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 ${errors.email ? "border-red-500/50 focus:ring-red-500/30" : "border-white/10 focus:border-violet-500/50 focus:ring-violet-500/20"}`}
                  />
                  {errors.email && <p className="mt-1 font-body text-xs text-red-400">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-sm font-medium text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${errors.message ? "border-red-500/50 focus:ring-red-500/30" : "border-white/10 focus:border-violet-500/50 focus:ring-violet-500/20"}`}
                  />
                  {errors.message && <p className="mt-1 font-body text-xs text-red-400">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-70 text-white font-display font-semibold rounded-xl glow-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </motion.button>

                {/* Toast */}
                <AnimatePresence>
                  {(status === "success" || status === "error") && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center gap-3 p-4 rounded-xl border font-body text-sm ${status === "success" ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-red-500/10 border-red-500/30 text-red-400"}`}
                    >
                      {status === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                      {status === "success" ? "Message sent successfully! I'll get back to you soon." : "Something went wrong. Please try again."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

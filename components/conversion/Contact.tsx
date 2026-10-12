"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { ArrowUpRight, X, Send, Check, ShieldCheck, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Full-Time Engineering Role");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setFormError("Please enter your name."); return; }
    if (!email.trim() || !email.includes("@")) { setFormError("Please enter a valid email address."); return; }
    if (!message.trim()) { setFormError("Please enter a message or project outline."); return; }

    setFormError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9d486076-991c-45ee-8d44-836942c01f16",
          name, email,
          subject: `[Portfolio Inquiry] ${category} from ${name}`,
          message: `Inquiry Type: ${category}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}\n\n---\nSent via sonubuilds.github.io`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setName(""); setEmail(""); setPhone(""); setMessage("");
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${category} from ${name}`);
      const body = encodeURIComponent(`Hello Sonu,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nInquiry Type: ${category}\n\nMessage:\n${message}\n\n---\nSent via sonubuilds.github.io`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 scroll-mt-12 relative overflow-hidden">
        <div className="container-x max-w-2xl relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 hairline-border text-center relative overflow-hidden card-3d-tilt border-cyan-400/35 shadow-[0_0_45px_rgba(0,245,212,0.18)]">
            {/* Luminous Bokeh Glow Blobs from Ref/stitch_sonu_kumar_portfolio_modernization */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center justify-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Start A Project
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 mb-3 tracking-tight">
              Got an idea? Let&apos;s build together.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
              Whether you need a full-scale web product, React Native application, or high-performance frontend architecture, my inbox is open.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:from-white hover:to-cyan-200 text-zinc-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_28px_rgba(0,245,212,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 shimmer-action cursor-pointer"
              >
                <span>Send a Message</span>
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  alert("Email copied to clipboard!");
                }}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] text-zinc-200 font-semibold text-xs sm:text-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-glass"
              >
                <Mail size={15} className="text-cyan-400" />
                <span>Copy Email</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
              <a 
                href={`https://github.com/${profile.social.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-zinc-800/80 border border-white/10 text-zinc-300 text-xs font-medium hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <span>GitHub Profile</span>
                <span className="text-cyan-400 text-[10px]">↗</span>
              </a>
              <a 
                href={`https://linkedin.com/in/${profile.social.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-zinc-800/80 border border-white/10 text-zinc-300 text-xs font-medium hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <span>LinkedIn Profile</span>
                <span className="text-cyan-400 text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#06080d]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#0b0f17] p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,212,0.2)]"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 p-2 text-foreground-muted hover:text-foreground-primary transition-colors">
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-bold text-foreground-primary mb-2">Send a Message</h3>
              <p className="text-sm text-foreground-secondary mb-6 border-b border-border-subtle pb-6">Direct inquiry or role invitation</p>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground-primary">Message Sent Successfully!</h4>
                  <p className="mt-2 text-sm text-foreground-secondary mb-8">I will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 px-6 py-2.5 text-sm font-medium text-zinc-950 transition hover:opacity-90 shadow-[0_0_20px_rgba(0,245,212,0.35)]">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Your Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,212,0.2)]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,212,0.2)]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Contact Number (Optional)</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 00000 00000" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-cyan-400 placeholder:text-zinc-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Inquiry Type</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-cyan-400">
                      <option>Full-Time Engineering Role</option>
                      <option>Contract / Freelance Project</option>
                      <option>Technical Advisory / Architecture</option>
                      <option>General Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground-muted mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-foreground-primary outline-none transition focus:border-cyan-400 resize-none" />
                  </div>
                  
                  {formError && <p className="text-xs text-rose-500 font-medium">{formError}</p>}

                  <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:from-white hover:to-cyan-200 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:opacity-95 disabled:opacity-50 shadow-[0_0_20px_rgba(0,245,212,0.35)] cursor-pointer">
                    <Send size={16} /> <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                  <p className="text-center text-xs text-foreground-muted mt-4">
                    <ShieldCheck size={14} className="inline mr-1 text-emerald-400" /> Zero spam. Secure connection.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Printer, Copy, Check, FileText, Files, ShieldCheck } from "lucide-react";
import ResumeDocument from "@/components/ResumeDocument";
import { profile, skills, experience, projects, education, keyAchievements } from "@/data/portfolio";

export default function ResumePage() {
  const [layout, setLayout] = useState<"single" | "detailed">(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search).get("layout");
      if (p === "detailed") return "detailed";
    }
    return "single";
  });
  const [mode, setMode] = useState<"ats" | "modern">(() => {
    if (typeof window !== "undefined") {
      const m = new URLSearchParams(window.location.search).get("mode");
      if (m === "ats") return "ats";
      if (m === "modern") return "modern";
    }
    return "modern";
  });
  const [font, setFont] = useState("Inter");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const l = params.get("layout");
    if (l === "detailed" || l === "single") {
      setLayout(l);
    }
    const m = params.get("mode");
    if (m === "modern" || m === "ats") {
      setMode(m);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    const isDark = mode === "modern";
    const targetSourcePdf = layout === "single"
      ? (isDark ? "Sonu_Kumar_Resume_Dark.pdf" : "Sonu_Kumar_Resume.pdf")
      : (isDark ? "Sonu_Kumar_Detailed_CV_Dark.pdf" : "Sonu_Kumar_Detailed_CV.pdf");

    const professionalDownloadName = layout === "single"
      ? "Sonu_Kumar_Resume.pdf"
      : "Sonu_Kumar_Detailed_CV.pdf";

    const pdfUrl = `/${targetSourcePdf}`;

    try {
      setDownloading(true);
      const res = await fetch(pdfUrl);
      if (!res.ok) throw new Error("Download request failed");
      const buffer = await res.arrayBuffer();
      const blob = new Blob([buffer], { type: "application/pdf" });
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = professionalDownloadName;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      }, 500);
    } catch {
      window.open(pdfUrl, "_blank");
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const copyPlainTextResume = () => {
    const isSingle = layout === "single";

    const text = isSingle
      ? `
${profile.name.toUpperCase()}
${profile.role} • ${profile.location}
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: https://linkedin.com/in/${profile.social.linkedin}
GitHub: https://github.com/${profile.social.github}

==================================================
PROFILE SUMMARY
==================================================
${profile.summary}

==================================================
TECHNICAL SKILLS
==================================================
- Languages: ${skills.languages.join(", ")}
- Frontend: ${skills.frontend.join(", ")}
- Backend: ${skills.backend.join(", ")}
- Databases: ${skills.databases.join(", ")}
- Other: ${skills.other.join(", ")}
- Tools & Concepts: ${skills.toolsAndConcepts.join(", ")}

==================================================
WORK EXPERIENCE
==================================================
FULL-STACK DEVELOPER | REACT NATIVE | REACT | NODE
SPODS Technologies • Delhi, India (08/2025 — Present)
• Developing and maintaining the Pick A Pro marketplace ecosystem across web, React Native mobile, admin dashboard, and Partner app.
• Implemented secure role-based access control (RBAC) and authorization workflows across users, partners, and admin modules.
• Built cross-platform architecture with React, Next.js, and React Native with modular components and Redux Toolkit (RTK).
• Integrated REST APIs, Google Maps geolocation services, and Firebase push notifications.
• Optimized web and mobile performance, cutting re-renders and improving responsiveness.

SOFTWARE DEVELOPER
NOYT INDIA • Delhi, India (06/2025 — 08/2025)
• Managed independent project modules end-to-end; integrated third-party APIs to significantly elevate functionality and user experience.

SOFTWARE DEVELOPER
3FITECH COMMUNICATIONS PVT LTD • Delhi, India (02/2025 — 06/2025)
• Collaborated with cross-functional teams to engineer scalable, maintainable code ensuring high software reliability.

FRONTEND DEVELOPER | REACT
EDUMITRAM PVT LTD • Delhi, India (11/2023 — 01/2025)
• Developed user-friendly web interfaces for enterprise clients including Educomp Solutions Limited, EbixCash, and Hem Aunty Publications.

FRONTEND DEVELOPER | REACT
SLOG Solutions Pvt. Ltd • Delhi, India (04/2021 — 10/2023)
• Reduced defects by 20% through systematic debugging in Angular/React apps; trained students in Python and modern web development.

==================================================
KEY PROJECTS
==================================================
• Pick A Pro (On-Demand Marketplace Ecosystem) - 4 production apps · 99.8% crash-free
  Stack: React.js, Next.js, React Native, Redux Toolkit, Node.js, Express, Firebase, Google Maps API
  Summary: Comprehensive service marketplace spanning customer web, mobile apps, admin dashboard, and partner app with real-time updates.

• PropertyWorks (Real Estate Intelligence & Advisory Platform) - Full-Stack Advisory · OTP Admin & Lead Engine
  Stack: React.js, Next.js, TypeScript, Tailwind CSS, Node.js, REST APIs, Lead Management, SEO
  Summary: Full-stack real estate advisory platform with dedicated Admin Panel, project directory, OTP-based admin actions, and lead capture.

• Memory Caravan (QR-Based Digital Media & Keepsake Platform) - End-to-End Platform · Secure R2 Video Streaming
  Stack: Next.js, React, TypeScript, Tailwind CSS, Supabase, Cloudflare R2, Video Streaming, QR Routing
  Summary: End-to-end QR keepsake platform with private video streaming via Cloudflare R2, short-lived tokens, and Supabase.

• Grasberg International (Forex Platform & Role-Based CRM) - Multi-Role CRM · MT5 Trading Integration
  Stack: Next.js, React.js, TypeScript, Tailwind CSS, REST APIs, MetaTrader 5 (MT5), Role-Based CRM
  Summary: Enterprise forex platform with informational portal and multi-tenant CRM for User, Partner, and Admin roles integrating MT5 trading APIs.

==================================================
EDUCATION & ACHIEVEMENTS
==================================================
• B.Tech in Information Technology - Government Engineering College Ajmer, Rajasthan (2020)
• Intermediate (T P Verma College, 2015) • Matric (High School Harinagar, 2012)
Key Highlights:
${keyAchievements.map((k) => `• ${k}`).join("\n")}
      `.trim()
      : `
${profile.name.toUpperCase()}
${profile.role} • ${profile.location}
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: https://linkedin.com/in/${profile.social.linkedin}
GitHub: https://github.com/${profile.social.github}

==================================================
PROFILE
==================================================
${profile.summary}

==================================================
SKILLS
==================================================
- Languages: ${skills.languages.join(", ")}
- Frontend: ${skills.frontend.join(", ")}
- Backend: ${skills.backend.join(", ")}
- Databases: ${skills.databases.join(", ")}
- Other: ${skills.other.join(", ")}
- Tools & Concepts: ${skills.toolsAndConcepts.join(", ")}

==================================================
WORK EXPERIENCE
==================================================
${experience
  .map(
    (exp) => `
${exp.role.toUpperCase()}
${exp.company} • ${exp.location} (${exp.period})
${exp.bullets.map((b) => `• ${b}`).join("\n")}
`
  )
  .join("\n")}

==================================================
PROJECTS
==================================================
${projects
  .map(
    (p) => `
• ${p.title} (${p.category}) - ${p.result}
  Stack: ${p.stack.join(", ")}
  Summary: ${p.description}
`
  )
  .join("\n")}

==================================================
EDUCATION
==================================================
${education.map((e) => `• ${e.degree} - ${e.institution}, ${e.location} (${e.year})`).join("\n")}

==================================================
KEY ACHIEVEMENTS
==================================================
${keyAchievements.map((k) => `• ${k}`).join("\n")}
      `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="resume-page-wrapper min-h-screen bg-transparent pt-24 pb-12 sm:pt-28 sm:pb-16 text-white selection:bg-cyan-400 selection:text-black relative overflow-x-hidden print:bg-white print:py-0 print:m-0 print:p-0 print:min-h-0 print:text-black">
      {/* Ambient Holographic Floating Glow Orbs with Obsidian Void theme from stitch modernization */}
      <div aria-hidden="true" className="no-print fixed top-1/4 -left-20 w-[24rem] h-[24rem] rounded-full bg-cyan-400/20 blur-[100px] orb-1 pointer-events-none -z-10" />
      <div aria-hidden="true" className="no-print fixed top-2/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-600/20 blur-[110px] orb-2 pointer-events-none -z-10" />
      <div aria-hidden="true" className="no-print fixed top-1/2 left-1/3 w-[22rem] h-[22rem] rounded-full bg-emerald-500/15 blur-[90px] orb-3 pointer-events-none -z-10" />
      <div aria-hidden="true" className="no-print fixed inset-0 cyber-scanlines opacity-40 pointer-events-none -z-10" />
      <div aria-hidden="true" className="no-print fixed inset-0 grid-lines pointer-events-none -z-10" />
      <div aria-hidden="true" className="no-print absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[750px] bg-radial-hero pointer-events-none opacity-90 -z-10" />

      {/* CONTROL TOOLBAR (HIDDEN IN PRINT) */}
      <div className="no-print container-x max-w-[900px] mb-8">
        <div className="rounded-3xl p-4 sm:p-5 flex flex-col gap-4 bg-zinc-900/80 border border-white/10 shadow-glass backdrop-blur-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 sm:pb-4">
            {/* Back button */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 transition-colors hover:text-cyan-300 font-medium"
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>

            {/* ATS Verified Badge */}
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>ATS-Optimized &amp; Verified</span>
            </div>

            {/* View Mode Toggle: Dark Modern vs Classic White */}
            <div className="flex rounded-full border border-white/10 bg-black/60 p-1 text-[11px] sm:text-xs">
              <button
                type="button"
                onClick={() => setMode("modern")}
                className={`rounded-full px-3 py-1 font-semibold transition-all ${
                  mode === "modern" 
                    ? "bg-gradient-to-r from-cyan-400 to-teal-300 text-zinc-950 shadow-[0_0_12px_rgba(0,245,212,0.4)]" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Dark Modern
              </button>
              <button
                type="button"
                onClick={() => setMode("ats")}
                className={`rounded-full px-3 py-1 font-semibold transition-all ${
                  mode === "ats" 
                    ? "bg-white text-zinc-950 shadow-md" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Classic White
              </button>
            </div>
          </div>

          {/* SECOND BAR: FORMAT, FONT & ACTIONS */}
          <div className="flex flex-wrap items-center justify-between gap-3.5">
            {/* Format Selector: Single Page vs Detailed */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline">Format:</span>
              <div className="flex rounded-full border border-white/10 bg-black/60 p-1 text-[11px] sm:text-xs">
                <button
                  type="button"
                  onClick={() => setLayout("single")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-semibold transition-all ${
                    layout === "single"
                      ? "bg-gradient-to-r from-cyan-400 to-teal-300 text-zinc-950 shadow-[0_0_12px_rgba(0,245,212,0.4)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <FileText size={13} />
                  <span>Single Page</span>
                  <span className={`ml-1 rounded px-1.5 py-0.2 text-[9px] font-bold ${layout === "single" ? "bg-black/20 text-zinc-950" : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"}`}>Rec</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("detailed")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-semibold transition-all ${
                    layout === "detailed"
                      ? "bg-gradient-to-r from-cyan-400 to-teal-300 text-zinc-950 shadow-[0_0_12px_rgba(0,245,212,0.4)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Files size={13} />
                  <span>Detailed CV</span>
                </button>
              </div>
            </div>

            {/* FONT SELECTOR */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline">Font:</span>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="bg-black/60 border border-white/15 rounded-full px-3.5 py-1.5 text-xs text-zinc-200 outline-none cursor-pointer hover:border-cyan-400/40 transition appearance-none font-mono"
                style={{ paddingRight: "1.75rem", backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2322d3ee%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", backgroundRepeat: "no-repeat", backgroundPosition: "right .6rem top 50%", backgroundSize: ".6rem auto" }}
              >
                <option value="Inter">Inter (Sans)</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Lato">Lato</option>
                <option value="Merriweather">Merriweather (Serif)</option>
                <option value="Fira Code">Fira Code (Mono)</option>
              </select>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Copy Plain Text */}
              <button
                type="button"
                onClick={copyPlainTextResume}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-800/80 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                title="Copy plain text formatted for job application forms"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : "Copy Text"}</span>
              </button>

              {/* Direct Download PDF File */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-white hover:to-cyan-300 text-zinc-950 px-4 py-1.5 text-xs font-bold transition-all shadow-[0_0_18px_rgba(0,245,212,0.35)] active:scale-95 disabled:opacity-70 cursor-pointer"
                title="Directly download high-resolution PDF"
              >
                {downloading ? (
                  <>
                    <span className="inline-block w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-800/80 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                title="Save as PDF via browser print"
              >
                <Printer size={14} />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Informative helper note */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-zinc-400 font-mono">
          <p>
            {layout === "single"
              ? "⚡ Single Page: High-impact executive summary optimized for 1-minute HR screen."
              : "📋 Detailed CV: Complete comprehensive multi-page format showcasing in-depth architecture."}
          </p>
          <p className="hidden md:block text-zinc-500">
            Press <kbd className="rounded border border-white/15 bg-black/60 px-1.5 py-0.5 text-[10px] text-cyan-300">⌘ + P</kbd> to save PDF directly.
          </p>
        </div>
      </div>

      {/* THE ACTUAL RESUME DOCUMENT */}
      <main className="container-x max-w-[900px] overflow-x-auto pb-4 print:overflow-visible print:max-w-none print:w-full print:m-0 print:p-0">
        <ResumeDocument mode={mode} layout={layout} fontFamily={font} />
      </main>

      {/* FOOTER CALLOUT (HIDDEN IN PRINT) */}
      <div className="no-print container-x max-w-[900px] mt-12 text-center text-xs text-zinc-500 font-mono">
        <p>Sonu Kumar — Full-Stack Developer • Professional Curriculum Vitae</p>
      </div>
    </div>
  );
}

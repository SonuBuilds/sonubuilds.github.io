import { profile, skills, experience, projects, education, keyAchievements } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

interface ResumeDocumentProps {
  mode?: "ats" | "modern";
  layout?: "single" | "detailed";
  fontFamily?: string;
}

export default function ResumeDocument({ mode = "ats", layout = "single", fontFamily = "Inter" }: ResumeDocumentProps) {
  const isSingle = layout === "single";
  const isModern = mode === "modern";

  // For single page, select the top marquee items with compact high-impact bullets
  const singlePageExperience = [
    {
      ...experience[0], // SPODS Technologies
      bullets: [
        "Developing and maintaining the Pick A Pro ecosystem across customer web platform, React Native mobile apps, admin dashboard, and Partner app.",
        "Implemented secure role-based access control (RBAC) and authorization workflows managing permissions for customers, service partners, and admins.",
        "Architected cross-platform apps with React, Next.js, and React Native using Redux Toolkit (RTK), Google Maps geolocation, and Firebase FCM.",
        "Optimized web and mobile application performance, reducing redundant re-renders and improving responsiveness across mobile viewports."
      ]
    },
    {
      ...experience[1], // NOYT INDIA
      bullets: [
        "Managed independent project modules end-to-end from architectural design to deployment ahead of business milestones.",
        "Integrated complex third-party REST APIs to extend product capabilities, elevate functionality, and streamline data exchange."
      ]
    },
    {
      ...experience[2], // 3FITECH
      bullets: [
        "Collaborated with cross-functional engineering teams to build scalable, maintainable code ensuring high software reliability and uptime.",
        "Applied clean coding standards, structured debugging, and comprehensive code reviews to maintain production stability."
      ]
    },
    {
      ...experience[3], // EDUMITRAM
      bullets: [
        "Developed user-friendly web interfaces for enterprise clients including Educomp Solutions Limited, EbixCash, and Hem Aunty Publications.",
        "Elevated user satisfaction and retention by delivering accessible, responsive UI/UX designs and low-latency API integrations."
      ]
    },
    {
      ...experience[4], // SLOG Solutions
      bullets: [
        "Reduced defects by 20% through systematic debugging in Angular/React apps; conducted performance audits and structured testing.",
        "Mentored students and junior developers in Python programming fundamentals, modern JavaScript, and web development best practices."
      ]
    }
  ];

  const singlePageProjects = projects.slice(0, 4); // Pick A Pro, PropertyWorks, Memory Caravan, Grasberg International
  const displayExp = isSingle ? singlePageExperience : experience;
  const displayProj = isSingle ? singlePageProjects : projects;
  const displayEdu = isSingle ? education.slice(0, 1) : education;

  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}:wght@400;500;600;700;800&display=swap`;

  // Function to highlight key technologies in text
  const highlightTech = (text: string) => {
    return text.replace(
      /(React\.js|Next\.js|React Native|Node\.js|Express\.js|REST API|REST APIs|Firebase|Google Maps|Redux Toolkit|HTML5|CSS3|JavaScript)/gi,
      "<strong>$1</strong>"
    );
  };

  return (
    <>
      {fontFamily !== "Inter" && (
        <style dangerouslySetInnerHTML={{ __html: `@import url('${fontUrl}');` }} />
      )}
      
      {/* Dynamic Bullets & Print Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-bullets { list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: ${isSingle ? "1.5px" : "2px"}; margin-top: 1px; }
        .custom-bullets li { font-size: ${isSingle ? "10.5px" : "11px"}; color: ${isModern ? "#cbd5e1" : "#334155"}; padding-left: 14px; position: relative; line-height: ${isSingle ? "1.36" : "1.42"}; }
        .custom-bullets li::before { content: '•'; position: absolute; left: 2px; top: -1px; color: ${isModern ? "#00f5d4" : "#1d4ed8"}; font-size: 13px; text-shadow: ${isModern ? "0 0 6px rgba(0,245,212,0.6)" : "none"}; }
        .custom-bullets li strong { color: ${isModern ? "#ffffff" : "#0f172a"}; font-weight: 600; }
      ` }} />

      <article
        style={{ fontFamily: `'${fontFamily}', -apple-system, BlinkMacSystemFont, sans-serif` }}
        className={`resume-paper ${
          isModern
            ? "dark-modern-mode bg-[#0b0f17]/95 text-slate-200 border-cyan-500/25 shadow-[0_0_60px_rgba(0,245,212,0.08),0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden backdrop-blur-md"
            : "bg-white text-slate-800 border-slate-200 shadow-lg"
        } mx-auto w-full ${
          isSingle
            ? "single-page-resume max-w-[840px] px-6 sm:px-8 pt-5 pb-5 text-[10.8px] leading-[1.38]"
            : "detailed-resume max-w-[840px] px-7 sm:px-10 pt-7 pb-6 sm:pt-9 sm:pb-8 text-[11.5px] leading-[1.45]"
        } rounded-2xl border transition-all duration-300`}
        aria-label={`Sonu Kumar ${isSingle ? "1-Page" : "Detailed"} Professional Resume`}
      >
        {isModern && (
          <div aria-hidden="true" className="no-print absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 pointer-events-none" />
        )}

        {/* HEADER SECTION */}
        <header className={`text-center border-b-[2px] ${isModern ? "border-cyan-500/30" : "border-slate-900"} ${isSingle ? "pb-2.5 mb-2.5" : "pb-3 mb-3.5"}`}>
          <h1 className={`${isSingle ? "text-[25px]" : "text-[28px]"} font-black ${isModern ? "text-white tracking-wide" : "text-slate-900"} tracking-[-0.5px] leading-[1.1] uppercase`}>
            {profile.name}
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-2 mt-1.5">
            <span className={`text-[13px] font-bold ${isModern ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(0,245,212,0.4)]" : "text-blue-700"}`}>
              {profile.role}
            </span>
            <span className={`${isModern ? "text-slate-600" : "text-slate-400"} font-bold select-none`}>•</span>
            <span className={`${isModern ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(0,245,212,0.15)]" : "bg-blue-50 text-blue-700 border-blue-200"} border text-[10.5px] font-bold px-2.5 py-[1px] rounded-full`}>
              5+ Years Experience
            </span>
            <span className={`${isModern ? "text-slate-600" : "text-slate-400"} font-bold select-none`}>•</span>
            <span className={`text-[11.5px] font-semibold ${isModern ? "text-slate-300" : "text-slate-600"}`}>
              React.js | React Native | Next.js | Node.js | TypeScript
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 mt-2.5 text-[11.2px]">
            {/* Direct Contact: Location, Mobile, Email */}
            <div className={`flex items-center justify-center flex-wrap gap-x-3.5 gap-y-1 ${isModern ? "text-slate-300" : "text-slate-700"}`}>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className={`w-3.5 h-3.5 ${isModern ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
                {profile.location}
              </span>
              <span className={`${isModern ? "text-slate-600" : "text-slate-300"} select-none`}>•</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className={`inline-flex items-center gap-1.5 font-medium ${isModern ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-800"} hover:underline`}>
                <Phone className={`w-3.5 h-3.5 ${isModern ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
                {profile.phone}
              </a>
              <span className={`${isModern ? "text-slate-600" : "text-slate-300"} select-none`}>•</span>
              <a href={`mailto:${profile.email}`} className={`inline-flex items-center gap-1.5 font-medium ${isModern ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-800"} hover:underline`}>
                <Mail className={`w-3.5 h-3.5 ${isModern ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
                {profile.email}
              </a>
            </div>

            {/* Online Presence: LinkedIn, GitHub, Portfolio */}
            <div className={`flex items-center justify-center flex-wrap gap-x-3.5 gap-y-1 ${isModern ? "text-slate-300" : "text-slate-700"}`}>
              <a href={`https://linkedin.com/in/${profile.social.linkedin}`} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 font-medium ${isModern ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-800"} hover:underline`}>
                <Linkedin className={`w-3.5 h-3.5 ${isModern ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
                linkedin.com/in/{profile.social.linkedin}
              </a>
              <span className={`${isModern ? "text-slate-600" : "text-slate-300"} select-none`}>•</span>
              <a href={`https://github.com/${profile.social.github}`} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 font-medium ${isModern ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-800"} hover:underline`}>
                <Github className={`w-3.5 h-3.5 ${isModern ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
                github.com/{profile.social.github}
              </a>
              <span className={`${isModern ? "text-slate-600" : "text-slate-300"} select-none`}>•</span>
              <a href="https://sonubuilds.github.io/" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 font-medium ${isModern ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-800"} hover:underline`}>
                <Globe className={`w-3.5 h-3.5 ${isModern ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
                sonubuilds.github.io
              </a>
            </div>
          </div>
        </header>

        {/* PROFILE SUMMARY */}
        <section className={isSingle ? "mb-2" : "mb-3"}>
          <h2 className={`${isSingle ? "text-[12px] pb-[2px] mb-1.5" : "text-[12.5px] pb-[3px] mb-2"} font-extrabold uppercase tracking-[1.4px] flex items-center gap-2 ${isModern ? "text-white border-cyan-500/25" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            {isModern && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] inline-block" />}
            Profile Summary
          </h2>
          <p 
            className={`text-[11.8px] ${isModern ? "text-slate-300" : "text-slate-700"} text-justify leading-[1.45]`}
            dangerouslySetInnerHTML={{ __html: highlightTech(profile.summary) }}
          />
        </section>

        {/* TECHNICAL SKILLS */}
        <section className={isSingle ? "mb-2" : "mb-3"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[2px] mb-1.5" : "text-[12px] pb-[3px] mb-2"} font-extrabold uppercase tracking-[1.4px] flex items-center gap-2 ${isModern ? "text-white border-cyan-500/25" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            {isModern && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] inline-block" />}
            Technical Skills
          </h2>
          <div className="flex flex-col gap-1.5">
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-cyan-300" : "text-slate-900"}`}>Frontend & Core:</span>
              <div className={`flex-1 ${isModern ? "text-slate-300" : "text-slate-700"}`}>
                {skills.languages.concat(skills.frontend).map(s => {
                  const isHighlight = ['React.js', 'Next.js', 'React Native', 'Redux Toolkit', 'TypeScript'].includes(s);
                  return (
                    <span
                      key={s}
                      className={`px-2 py-0.5 rounded-md text-[10.5px] font-medium whitespace-nowrap inline-block my-[1.5px] mx-[2px] border transition-all ${
                        isHighlight
                          ? isModern
                            ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-200 font-semibold shadow-[0_0_8px_rgba(0,245,212,0.12)]"
                            : "bg-blue-50 border-blue-200 text-blue-700 font-semibold"
                          : isModern
                            ? "bg-white/[0.04] border-white/10 text-slate-300"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-cyan-300" : "text-slate-900"}`}>Backend & APIs:</span>
              <div className={`flex-1 ${isModern ? "text-slate-300" : "text-slate-700"}`}>
                {skills.backend.map(s => {
                  const isHighlight = ['Node.js', 'Express.js', 'RESTful APIs'].includes(s);
                  return (
                    <span
                      key={s}
                      className={`px-2 py-0.5 rounded-md text-[10.5px] font-medium whitespace-nowrap inline-block my-[1.5px] mx-[2px] border transition-all ${
                        isHighlight
                          ? isModern
                            ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-200 font-semibold shadow-[0_0_8px_rgba(0,245,212,0.12)]"
                            : "bg-blue-50 border-blue-200 text-blue-700 font-semibold"
                          : isModern
                            ? "bg-white/[0.04] border-white/10 text-slate-300"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex text-[10.8px] items-baseline gap-2">
              <span className={`w-[130px] shrink-0 font-bold ${isModern ? "text-cyan-300" : "text-slate-900"}`}>Databases & Cloud:</span>
              <div className={`flex-1 ${isModern ? "text-slate-300" : "text-slate-700"}`}>
                {skills.databases.concat(skills.other).concat(skills.toolsAndConcepts).map(s => (
                  <span
                    key={s}
                    className={`px-2 py-0.5 rounded-md text-[10.5px] font-medium whitespace-nowrap inline-block my-[1.5px] mx-[2px] border ${
                      isModern
                        ? "bg-white/[0.04] border-white/10 text-slate-300"
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className={isSingle ? "mb-2" : "mb-3"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[2px] mb-1.5" : "text-[12px] pb-[3px] mb-2"} font-extrabold uppercase tracking-[1.4px] flex items-center gap-2 ${isModern ? "text-white border-cyan-500/25" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            {isModern && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] inline-block" />}
            Work Experience
          </h2>
          <div className={`flex flex-col ${isSingle ? "gap-2" : "gap-3"}`}>
            {displayExp.map((item, idx) => {
              const isCurrent = item.period.toLowerCase().includes('present');
              return (
                <div key={idx} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-[3px] flex-wrap gap-1">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className={`text-[13px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>{item.company}</span>
                      <span className={`text-[12px] font-semibold ${isModern ? "text-cyan-400" : "text-blue-700"}`}>• {item.role}</span>
                    </div>
                    <span className={`text-[10.5px] font-semibold whitespace-nowrap px-2 py-[1px] rounded-full border ${
                      isCurrent
                        ? isModern
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.2)]"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : isModern
                          ? "bg-white/[0.04] text-slate-400 border-white/10"
                          : "bg-slate-50 text-slate-500 border-slate-200"
                    }`}>
                      {item.period}
                    </span>
                  </div>
                  <ul className="custom-bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: highlightTech(b) }} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* KEY PROJECTS */}
        <section className={isSingle ? "mb-2" : "mb-3"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[2px] mb-1.5" : "text-[12px] pb-[3px] mb-2"} font-extrabold uppercase tracking-[1.4px] flex items-center gap-2 ${isModern ? "text-white border-cyan-500/25" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            {isModern && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] inline-block" />}
            Key Projects
          </h2>
          <div className={`flex flex-col ${isSingle ? "gap-2" : "gap-3"}`}>
            {displayProj.map((proj, idx) => (
              <div key={idx} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-[2px] flex-wrap gap-1">
                  <span className={`text-[13px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>
                    {proj.url ? (
                      <a href={proj.url} target="_blank" rel="noreferrer" className="hover:underline inline-flex items-center gap-1">
                        {proj.title}
                        <span className={`text-[10px] font-semibold ${isModern ? "text-cyan-400" : "text-blue-700"}`}>[Live ↗]</span>
                      </a>
                    ) : (
                      proj.title
                    )} <span className={`${isModern ? "text-slate-400" : "text-slate-500"} font-normal`}>– {proj.result}</span>
                  </span>
                </div>
                <div className={`font-mono text-[9.8px] ${isModern ? "bg-cyan-950/60 text-cyan-300 border-cyan-800/60" : "bg-sky-50 text-sky-700 border-sky-200"} border px-2 py-[1px] rounded-md inline-block mb-[3px]`}>
                  {proj.stack.join(" · ")}
                </div>
                <ul className="custom-bullets">
                  {isSingle ? (
                    <li>{proj.resumeDesc || proj.description}</li>
                  ) : (
                    proj.bullets && proj.bullets.length > 0 ? (
                      proj.bullets.map((b, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: highlightTech(b) }} />
                      ))
                    ) : (
                      <li>{proj.description}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className={isSingle ? "mb-1.5" : "mb-3"}>
          <h2 className={`${isSingle ? "text-[11.5px] pb-[2px] mb-1.5" : "text-[12px] pb-[3px] mb-2"} font-extrabold uppercase tracking-[1.4px] flex items-center gap-2 ${isModern ? "text-white border-cyan-500/25" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            {isModern && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] inline-block" />}
            Education
          </h2>
          <div className="flex flex-col gap-1.5">
            {displayEdu.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline flex-wrap gap-1 text-[11px] break-inside-avoid">
                <div>
                  <span className={`text-[13px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>{edu.institution}</span>
                  <span className={`text-[12px] font-semibold ${isModern ? "text-cyan-400" : "text-blue-700"}`}> • {edu.degree}</span>
                  <span className={`text-[10.5px] ${isModern ? "text-slate-400" : "text-slate-500"}`}> — {edu.location}</span>
                </div>
                <span className={`text-[10.5px] font-semibold ${isModern ? "text-slate-400" : "text-slate-500"}`}>{edu.year}</span>
              </div>
            ))}
            {isSingle && (
              <div className="flex justify-between items-baseline flex-wrap gap-1 text-[11px] break-inside-avoid">
                 <div>
                  <span className={`text-[13px] font-bold ${isModern ? "text-white" : "text-slate-900"}`}>T P Verma College / High School Harinagar</span>
                  <span className={`text-[12px] font-semibold ${isModern ? "text-cyan-400" : "text-blue-700"}`}> • Intermediate / Matric</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* KEY ACHIEVEMENTS */}
        <section className="mb-0">
          <h2 className={`${isSingle ? "text-[11.5px] pb-[2px] mb-1.5" : "text-[12px] pb-[3px] mb-2"} font-extrabold uppercase tracking-[1.4px] flex items-center gap-2 ${isModern ? "text-white border-cyan-500/25" : "text-slate-900 border-slate-200"} border-b-[1.5px]`}>
            {isModern && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5d4] inline-block" />}
            Key Achievements
          </h2>
          <ul className="custom-bullets">
            {keyAchievements.slice(0, isSingle ? 3 : 4).map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </section>

      </article>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Check, Copy, Menu, Moon, Sun, X } from "lucide-react";
import { experience, profile, projects, skillGroups } from "@/data/portfolio";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

function SectionTitle({ id, number, label, title, intro }: { id: string; number: string; label: string; title: string; intro?: string }) {
  return <div className="section-heading" data-reveal>
    <div className="section-heading-label"><span>{number}</span><span>{label}</span></div>
    <div><h2 id={id}>{title}</h2>{intro && <p>{intro}</p>}</div>
  </div>;
}

function ProjectVisual({ visual, name, type }: { visual: string; name: string; type: string }) {
  const image = visual === "commerce" ? "/projects/ecommerce.jpg" : visual === "oasis" ? "/projects/wild-oasis.jpg" : visual === "phoenix" ? "/projects/phoenix.jpg" : null;
  return <div className={`project-visual project-visual-${visual}`}>
    {image && <Image src={image} alt={`${name} project visual`} fill sizes="(max-width: 760px) 100vw, 60vw" />}
    <div className="project-visual-shade" />
    <div className="project-visual-meta"><span>SELECTED WORK / {type.toUpperCase()}</span><span>↗</span></div>
    <div className="project-visual-title">{name}</div>
    <div className="project-visual-bottom"><span>TYLNZGR / GITHUB</span><span>0{visual === "phoenix" ? 1 : visual === "commerce" ? 2 : visual === "oasis" ? 3 : 4}</span></div>
  </div>;
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("motion-ready");
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-20% 0px -56% 0px", threshold: [0, .25, .5, 1] });
    navItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) sectionObserver.observe(el); });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
    return () => { sectionObserver.disconnect(); revealObserver.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setTheme(document.documentElement.classList.contains("theme-dark") ? "dark" : "light"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("theme-dark", next === "dark");
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  }

  return <main>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>T<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => <a key={item.id} className={active === item.id ? "nav-active" : ""} href={`#${item.id}`}>{item.label}</a>)}
      </nav>
      <div className="header-controls">
        <a className="header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button className="theme-toggle" type="button" aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"} aria-pressed={theme === "dark"} onClick={toggleTheme}>{theme === "light" ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}</button>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
      <nav className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation" inert={!menuOpen}>
        {navItems.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}
        <div className="mobile-nav-social"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
      </nav>
    </header>

    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-mark" /> FRONTEND ENGINEER <span className="eyebrow-rule" /> ISTANBUL, TR</div>
        <h1 id="hero-title">Taylan Özgür<br />Taşkırdı<span className="name-period">.</span><br /><em>Frontend Engineer</em></h1>
        <p className="hero-lead">I build responsive interfaces for logistics, enterprise, and commerce products using React, Next.js, and TypeScript.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} aria-hidden="true" /></a><a className="button button-quiet" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="hero-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a></div>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="art-topline"><span>01 / THE INTERFACE</span><span>EST. 2021</span></div><div className="art-orbit art-orbit-outer" /><div className="art-orbit art-orbit-inner" /><div className="art-cross art-cross-one">+</div><div className="art-cross art-cross-two">+</div><div className="art-center"><span className="art-center-small">THOUGHTFUL BY DESIGN</span><span className="art-center-big">FE<span>/</span>UI</span><span className="art-center-foot">ENGINEERED FOR PEOPLE</span></div><div className="art-bottomline"><span>REACT · TYPESCRIPT · PRODUCT</span><span>↗</span></div></div>
      <div className="hero-index"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
    </section>

    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title" number="01" label="ABOUT ME" title="Engineering the details that make products work." />
      <div className="about-grid">
        <div className="about-main" data-reveal><p className="about-statement">I work where <span>frontend engineering</span> meets thoughtful product design.</p><p>Since 2021, I&apos;ve helped shape logistics, enterprise, and commerce interfaces. I enjoy turning complex workflows into clear systems: component by component, interaction by interaction.</p><p>My daily toolkit centers on React, Next.js, and TypeScript. My public commerce projects also span API and data-layer work with ASP.NET Core, Prisma, and PostgreSQL.</p></div>
        <aside className="about-side" data-reveal><div><span className="mini-label">CURRENT FOCUS</span><p>Complex workflows.<br />Clearer interfaces.</p></div><div><span className="mini-label">BASED IN</span><p>{profile.location}</p></div><div><span className="mini-label">PHONE</span><p><a href={profile.phoneHref}>{profile.phone}</a></p></div><div><span className="mini-label">EDUCATION</span><p>B.Sc. Computer Engineering<br /><small>Gazi University · 2015–2020</small></p></div></aside>
      </div>
    </section>

    <section className="experience-section section-shell" id="experience" aria-labelledby="experience-title">
      <SectionTitle id="experience-title" number="02" label="EXPERIENCE" title="Built in real product environments." intro="A focused path through logistics, enterprise software, and cross-platform interfaces." />
      <div className="timeline">
        {experience.map((job, index) => <article className="timeline-item" key={job.company} data-reveal>
          <div className="timeline-index">0{index + 1}<span /></div>
          <div className="timeline-meta"><span>{job.period}</span><span>{job.company}</span></div>
          <div className="timeline-content"><h3>{job.role}</h3><p className="timeline-summary">{job.summary}</p><ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tag-list">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}
      </div>
    </section>

    <section className="projects-section section-shell" id="projects" aria-labelledby="projects-title">
      <SectionTitle id="projects-title" number="03" label="SELECTED WORK" title="Projects with something to say." intro="A selection from my public GitHub, spanning modern storefronts, booking flows, and API-driven interfaces." />
      <div className="project-list">
        {projects.map((project, index) => <article className={`project-row ${index % 2 ? "project-row-reverse" : ""}`} key={project.name} data-reveal>
          <ProjectVisual visual={project.visual} name={project.name} type={project.type} />
          <div className="project-info"><div className="project-top"><span>{project.number} / {project.type}</span><span>↗</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-contribution"><span>MY FOCUS</span><p>{project.contribution}</p></div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noopener noreferrer">View repository <ArrowUpRight size={16} aria-hidden="true" /></a>{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}</div></div>
        </article>)}
      </div>
      <div className="github-band" data-reveal><div><span className="mini-label">BEYOND THE HIGHLIGHTS</span><h3>More work lives on GitHub.</h3><p>Explore repositories, experiments, and the code behind these projects.</p></div><a className="button button-quiet" href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub profile <ArrowUpRight size={17} aria-hidden="true" /></a></div>
    </section>

    <section className="skills-section section-shell" id="skills" aria-labelledby="skills-title">
      <SectionTitle id="skills-title" number="04" label="TOOLKIT" title="The tools behind the work." intro="Technologies I use across frontend, backend, and product integration." />
      <div className="skills-list">{skillGroups.map((group, index) => <div className="skill-group" key={group.title} data-reveal><div className="skill-group-title"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-items">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
    </section>

    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-top" data-reveal><span className="section-kicker">05 / LET&apos;S CONNECT</span><span>{profile.location}</span></div>
      <div className="contact-content" data-reveal><h2 id="contact-title">Have something<br /><em>worth building?</em></h2><p>Whether it&apos;s a complex product flow or a new interface from the ground up, I&apos;d be glad to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={30} aria-hidden="true" /></a><button className="copy-email" type="button" onClick={copyEmail} aria-live="polite">{copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}{copied ? "Email copied" : "Copy email address"}</button></div>
      <footer className="footer"><span>© {new Date().getFullYear()} {profile.name}</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="#home">Back to top ↑</a></div></footer>
    </section>
  </main>;
}

import { Download, FolderGit2, Mail, Linkedin, Github } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-16"
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-600/8 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Profile photo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-cyan-400/30 bg-navy-800 overflow-hidden animate-float">
              <img
                src="/profile.png"
                alt={`${personal.name} profile photo`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none" />
          </div>
        </div>

        {/* Name & title */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 animate-fade-up">
          {personal.name}
        </h1>
        <p className="font-heading text-lg sm:text-xl lg:text-2xl text-gradient font-semibold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {personal.title}
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {personal.intro}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => {
              const el = document.querySelector('#projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-navy-950 font-semibold rounded-xl hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
          >
            <FolderGit2 className="w-5 h-5" />
            View Projects
          </button>
          <a
            href={personal.resumePath}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-800 text-cyan-300 font-semibold rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-navy-700 transition-all active:scale-95"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 justify-center mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={`mailto:${personal.email}`}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-navy-800/60 border border-cyan-400/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedinUrl || '#'}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-navy-800/60 border border-cyan-400/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
            aria-label="LinkedIn"
            aria-disabled={!personal.linkedinUrl}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.githubUrl}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-navy-800/60 border border-cyan-400/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
            aria-label="GitHub"
            aria-disabled={!personal.githubUrl}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

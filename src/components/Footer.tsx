import { Code2, Mail, Linkedin, Github } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-cyan-400/10 bg-navy-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 font-heading font-bold text-white hover:text-cyan-300 transition-colors"
          >
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Gajapriya S.</span>
          </button>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-800/60 border border-cyan-400/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedinUrl || '#'}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-800/60 border border-cyan-400/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.githubUrl}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-800/60 border border-cyan-400/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-400/5 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Gajapriya S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

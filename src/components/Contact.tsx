import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
  ];

  const socialItems = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personal.linkedinUrl || 'Link to be added',
      href: personal.linkedinUrl || undefined,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personal.githubUrl,
      href: personal.githubUrl,
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            Contact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Open to opportunities in data analytics and AI. Feel free to reach out — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="card-glow flex items-center gap-4 p-5 bg-navy-850/60 rounded-2xl border border-cyan-400/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-slate-200 font-medium">{item.value}</p>
                </div>
              </a>
            );
          })}

          {socialItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-slate-200 font-medium">{item.value}</p>
                </div>
              </>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-center gap-4 p-5 bg-navy-850/60 rounded-2xl border border-cyan-400/10 group"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 bg-navy-850/40 rounded-2xl border border-cyan-400/10 opacity-80"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="reveal flex items-center justify-center gap-2 mt-8 text-sm text-slate-500">
          <MapPin className="w-4 h-4" />
          <span>Trichy, Tamil Nadu, India</span>
        </div>
      </div>
    </section>
  );
}

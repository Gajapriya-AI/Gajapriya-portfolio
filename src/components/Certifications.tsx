import { BadgeCheck, Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-900/40">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            Certifications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Certifications & Credentials
          </h2>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card-glow bg-navy-850/60 rounded-2xl border border-cyan-400/10 p-6 text-center"
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-cyan-400/10 items-center justify-center mb-4">
                <BadgeCheck className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            Internship & Training
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Practical Experience
          </h2>
        </div>

        <div className="reveal relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-16">
                <div className="absolute left-3 top-1 w-7 h-7 rounded-full bg-navy-800 border-2 border-cyan-400/40 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="card-glow bg-navy-850/60 rounded-2xl border border-cyan-400/10 p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-300 text-sm font-medium mb-2">
                    {exp.organization}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-900/40">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            Education
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Academic Background
          </h2>
        </div>

        <div className="reveal relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-16">
                {/* Node */}
                <div className="absolute left-3 top-1 w-7 h-7 rounded-full bg-navy-800 border-2 border-cyan-400/40 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="card-glow bg-navy-850/60 rounded-2xl border border-cyan-400/10 p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 rounded-xl border border-cyan-400/20">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span className="font-heading font-semibold text-cyan-200">
                        CGPA {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

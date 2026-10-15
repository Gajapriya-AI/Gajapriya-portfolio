import { Code2, BarChart3, Brain, Wrench } from 'lucide-react';
import { skills } from '@/data/portfolio';

const categoryIcons = [Code2, BarChart3, Brain, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            Technical Skills
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A growing toolkit for data analysis, machine learning, and building intelligent applications.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-6">
          {skills.map((skillGroup, i) => {
            const Icon = categoryIcons[i] ?? Code2;
            return (
              <div
                key={i}
                className="card-glow bg-navy-850/60 rounded-2xl border border-cyan-400/10 p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium text-cyan-200 bg-navy-700/50 rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 hover:bg-navy-700 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

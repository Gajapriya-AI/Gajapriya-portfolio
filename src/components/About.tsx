import { Sparkles, TrendingUp, Lightbulb } from 'lucide-react';
import { about } from '@/data/portfolio';

const highlightIcons = [TrendingUp, Sparkles, Lightbulb];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            About Me
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
            Getting to Know Me
          </h2>
        </div>

        <div className="reveal grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base sm:text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-4">
            {about.highlights.map((highlight, i) => {
              const Icon = highlightIcons[i] ?? Sparkles;
              return (
                <div
                  key={i}
                  className="card-glow flex items-center gap-4 p-5 bg-navy-850/60 rounded-2xl border border-cyan-400/10"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="font-medium text-slate-200">{highlight}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

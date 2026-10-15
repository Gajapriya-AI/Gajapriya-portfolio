import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4">
            Projects
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects spanning machine learning, deep learning, NLP, and data visualization.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                key={i}
                className="card-glow group bg-navy-850/60 rounded-2xl border border-cyan-400/10 p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="font-heading font-semibold text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium text-cyan-200/80 bg-navy-700/40 rounded-md border border-cyan-400/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

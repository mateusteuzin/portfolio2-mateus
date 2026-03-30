import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fluxen — Sistema de Gestão",
    problem: "Dificuldade em centralizar vendas, estoque e CRM em uma única plataforma intuitiva.",
    tools: ["React", "TypeScript", "Tailwind"],
    result: "Eficiência SaaS",
    link: "https://fluxen-sistema-de-vendas.vercel.app/",
    image: "/fluxen_preview.png",
  },
  {
    title: "Análise de Churn Rate",
    problem: "Alta taxa de cancelamento sem identificação de padrões comportamentais.",
    tools: ["SQL", "Python", "Excel"],
    result: "-12% Churn",
    image: "/churn_preview.png",
  },
  {
    title: "Automação de Relatórios ITIL",
    problem: "Processos manuais de SLA gerando atrasos e inconsistências nos indicadores.",
    tools: ["VBA", "Power Query", "ITIL"],
    result: "8h/sem economizadas",
    image: "/itil_preview.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Projetos em Destaque
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                duration: 0.6,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group relative surface-card border-subtle rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-active hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl"
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden border-b border-foreground/[0.06]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground font-mono text-xs">Sem prévia</span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow justify-between relative">
                {/* Result badge */}
                <div className="absolute top-6 right-6">
                  <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                    {project.result}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground pr-16 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {project.problem}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-foreground/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider bg-secondary px-2 py-0.5 rounded-sm border border-foreground/[0.03]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <ExternalLink
                    size={14}
                    strokeWidth={2}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

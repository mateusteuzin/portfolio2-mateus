import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dashboard de Vendas Mensais",
    problem: "Falta de visibilidade sobre performance regional e sazonalidade nas vendas.",
    tools: ["Power BI", "DAX", "SQL"],
    result: "+14% ROI",
  },
  {
    title: "Análise de Churn Rate",
    problem: "Alta taxa de cancelamento sem identificação de padrões comportamentais.",
    tools: ["SQL", "Python", "Excel"],
    result: "-12% Churn",
  },
  {
    title: "Automação de Relatórios ITIL",
    problem: "Processos manuais de SLA gerando atrasos e inconsistências nos indicadores.",
    tools: ["VBA", "Power Query", "ITIL"],
    result: "8h/sem economizadas",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
              className="group relative surface-card border-subtle rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:border-active hover:-translate-y-1 cursor-pointer"
            >
              {/* Result badge */}
              <div className="absolute top-4 right-4">
                <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-sm">
                  {project.result}
                </span>
              </div>

              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold text-foreground pr-20 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-foreground/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider bg-secondary px-2 py-0.5 rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <ExternalLink
                  size={14}
                  strokeWidth={1.5}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

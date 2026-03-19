import { motion } from "framer-motion";
import { Database, BarChart3, FileSpreadsheet, Shield, MessageSquare } from "lucide-react";

const skills = [
  {
    name: "SQL",
    description: "Queries complexas, CTEs, Window Functions, Modelagem de dados",
    icon: Database,
    size: "large" as const,
  },
  {
    name: "Power BI",
    description: "DAX, Dashboards interativos, Modelagem dimensional, ETL",
    icon: BarChart3,
    size: "large" as const,
  },
  {
    name: "Excel / VBA",
    description: "Power Query, Automação de relatórios, Análise avançada",
    icon: FileSpreadsheet,
    size: "medium" as const,
  },
  {
    name: "ITIL / COBIT",
    description: "Governança de TI, Gestão de serviços, Frameworks de controle",
    icon: Shield,
    size: "medium" as const,
  },
  {
    name: "Data Storytelling",
    description: "Narrativa com dados, Apresentações executivas",
    icon: MessageSquare,
    size: "small" as const,
  },
];

const sizeClasses = {
  large: "col-span-2 row-span-2",
  medium: "col-span-2 row-span-1",
  small: "col-span-2 sm:col-span-2 row-span-1",
};

const SkillsGrid = () => {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
            Stack Técnica
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Ferramentas & Competências
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className={`${sizeClasses[skill.size]} surface-card border-subtle rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:border-active group`}
              >
                <div>
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200 mb-4"
                  />
                  <h3 className="font-mono text-sm font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;

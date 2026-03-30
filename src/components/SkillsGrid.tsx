import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const skills = [
  {
    name: "MySQL / SQL",
    description: "Queries complexas, CTEs, Window Functions, Modelagem de dados",
    iconUrl: "https://cdn.simpleicons.org/mysql/4479A1",
    size: "large" as const,
  },
  {
    name: "Power BI",
    description: "DAX, Dashboards interativos, Modelagem dimensional, ETL",
    iconUrl: "https://img.icons8.com/color/96/power-bi.png",
    size: "large" as const,
  },
  {
    name: "Excel / VBA",
    description: "Power Query, Automação de relatórios, Análise avançada",
    iconUrl: "https://img.icons8.com/color/96/microsoft-excel-2019.png",
    size: "medium" as const,
  },
  {
    name: "ITIL / COBIT",
    description: "Governança de TI, Gestão de serviços, Controle operacional",
    iconUrl: "https://cdn.simpleicons.org/docsdotrs/002E3F",
    size: "medium" as const,
  },
  {
    name: "HTML5 & CSS3",
    description: "Criação de interfaces web e layouts básicos",
    iconUrl: "https://cdn.simpleicons.org/html5/E34F26",
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
                  <div className="mb-4 h-10 w-10 flex items-center">
                    {skill.iconUrl && (
                      <img 
                        src={skill.iconUrl} 
                        alt={skill.name} 
                        className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    )}
                  </div>
                  
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
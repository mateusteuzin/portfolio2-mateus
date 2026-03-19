import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const metrics = [
  { label: "Precisão de Processos", value: "98%", suffix: "" },
  { label: "Dashboards Entregues", value: "15", suffix: "+" },
  { label: "Redução de Custos", value: "23", suffix: "%" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="space-y-8"
        >
          {/* Status badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              Disponível para novos projetos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            Transformando Dados em{" "}
            <span className="text-primary">ROI Operacional.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-[65ch] leading-relaxed">
            Estudante de Gestão de Tecnologia da Informação especializado em
            conectar datasets complexos a decisões estratégicas de negócio.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:brightness-110"
            >
              Ver Projetos
              <ArrowDown size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-subtle text-foreground font-medium text-sm transition-all duration-200 hover:border-active"
            >
              <Mail size={16} />
              Contato
            </a>
          </div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-8 pt-12 border-t border-foreground/[0.08]"
          >
            {metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <p className="font-mono text-3xl md:text-4xl font-semibold tabular-nums text-primary">
                  {m.value}
                  {m.suffix}
                </p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

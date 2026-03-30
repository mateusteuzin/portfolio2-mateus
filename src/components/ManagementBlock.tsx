import { motion } from "framer-motion";

const ManagementBlock = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="surface-card border-subtle rounded-lg p-12 md:p-20 text-center"
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
            Visão de Gestão
          </p>
          <blockquote className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            "Não apenas analiso números —{" "}
            <span className="text-primary">otimizo os sistemas</span> que os
            geram."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-8 max-w-[50ch] mx-auto leading-relaxed">
            Combinando frameworks de governança (ITIL/COBIT) com análise de dados
            para gerar impacto mensurável em operações de TI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagementBlock;

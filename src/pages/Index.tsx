import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsSection from "@/components/ProjectsSection";
import ManagementBlock from "@/components/ManagementBlock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* --- SEÇÃO QUEM SOU EU --- */}
      <section id="sobre" className="px-6 py-24 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LADO DA FOTO */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-muted">
                {/* AJUSTADO: Agora apontando corretamente para perfil.png */}
                <img 
                  src="/perfil.png" 
                  alt="Mateus Alves" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 group-hover:border-primary/50 transition-colors"></div>
            </motion.div>

            {/* LADO DO TEXTO */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Especialista em TI</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Mateus Alves</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Sou um Etudante focado em **Gestão de TI e Inteligência de Dados**, transformando processos complexos em soluções automatizadas e estratégicas.
                </p>
                <p>
                  Com domínio em frameworks como **ITIL e COBIT**, busco alinhar a tecnologia aos objetivos de negócio, garantindo que os dados tragam clareza para a tomada de decisão.
                </p>
                <p>
                  Especialista na criação de Dashboards e otimização de SLAs, focado em eliminar gargalos operacionais e garantir a máxima eficiência dos KPIs.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* --- FIM DA SEÇÃO QUEM SOU EU --- */}

      <SkillsGrid />
      <ProjectsSection />
      <ManagementBlock />
      <Footer />
    </div>
  );
};

export default Index;
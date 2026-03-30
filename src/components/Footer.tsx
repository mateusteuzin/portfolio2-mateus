import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="px-6 py-12 border-t border-foreground/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {/* LINK DO LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mateus-alves-1b4a28312" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>

          {/* LINK DO GITHUB */}
          <a
            href="https://github.com/mateusteuzin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>

          {/* LINK DO EMAIL */}
          <a
            href="mailto:ma2664223@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>

          {/* LINK DO WHATSAPP (ÍCONE DE TELEFONE) */}
          <a
            href="https://wa.me/5588999592580"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <Phone size={18} strokeWidth={1.5} />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Disponível para projetos
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

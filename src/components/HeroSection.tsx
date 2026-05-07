import { ArrowDown, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-1.avif";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Anshul Parmar</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          Flutter Developer | Aspiring Software Engineer
        </p>

        <p className="text-sm md:text-base text-muted-foreground/70 max-w-md mb-10 font-mono">
          Building scalable mobile apps using Clean Architecture & BLoC
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
          
          {/* Glow Layer */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

          {/* Image */}
          <img
            src={""}
            alt="Anshul Parmar"
            className="relative w-full h-full rounded-full object-cover border border-primary/30"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap md:justify-start justify-center gap-4">

        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          View Projects
        </a>
        <a
          href="https://github.com/anshulparmar353"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors flex items-center gap-2"
        >
          <Github size={16} /> GitHub
        </a>
      </motion.div>
      
    </div>
  </section>
);

export default HeroSection;

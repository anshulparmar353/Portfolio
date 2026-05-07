import { Smartphone, Layers, Plug } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Smartphone,

    title: "Mobile App Development",

    desc:
      "Developing scalable cross-platform mobile applications using Flutter with responsive UI and optimized performance.",
  },

  {
    icon: Layers,

    title: "Scalable App Architecture",

    desc:
      "Designing maintainable application structures using Clean Architecture and BLoC state management patterns.",
  },

  {
    icon: Plug,

    title: "API & Backend Integration",

    desc:
      "Integrating REST APIs, authentication systems, and structured data flow for production-ready applications.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">

      <SectionHeading
        tag="Expertise"
        title="What I Focus On"
        subtitle="Core development areas centered around scalable architecture, clean engineering practices, and modern mobile applications."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={0.1 * i}>

            <div className="card-gradient rounded-2xl p-7 md:p-8 border border-border text-center hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 h-full">

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">

                <service.icon
                  className="text-primary group-hover:scale-110 transition-transform duration-300"
                  size={28}
                />

              </div>

              <h3 className="font-semibold text-xl mb-4">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>

            </div>

          </AnimatedSection>
        ))}

      </div>

    </div>
  </section>
);

export default ServicesSection;
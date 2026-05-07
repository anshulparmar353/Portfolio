import { Code2, Brain, Rocket, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Building scalable and maintainable applications using structured engineering practices.",
  },

  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Strengthening algorithmic thinking through DSA and interview-focused practice.",
  },

  {
    icon: Rocket,
    title: "Production Mindset",
    desc: "Focused on performance, reliability, and real-world software quality.",
  },

  {
    icon: Target,
    title: "Continuous Learning",
    desc: "Consistently improving development skills and engineering fundamentals.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">

      <SectionHeading
        tag="About Me"
        title="Building Scalable Digital Experiences"
        subtitle="Computer Science student focused on mobile app development, scalable architecture, and modern software engineering practices."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-14">

        <AnimatedSection delay={0.1}>

          <div className="card-gradient rounded-2xl p-6 md:p-8 border border-border hover:border-primary/20 transition-all duration-300 h-full">

            <h3 className="text-2xl font-semibold mb-5">
              Who I Am
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-5">
              I'm a B.Tech Computer Science student at
              <span className="text-primary font-medium">
                {" "}IPS IES Academy, Indore
              </span>
              , focused on building scalable mobile applications using
              <span className="text-primary font-medium">
                {" "}Flutter
              </span>,
              Clean Architecture, and BLoC state management.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy transforming ideas into real-world applications with clean UI,
              maintainable codebases, and performance-focused engineering practices.
              My approach combines strong technical foundations with product-oriented thinking.
            </p>

          </div>

        </AnimatedSection>

        <AnimatedSection delay={0.2}>

          <div className="card-gradient rounded-2xl p-6 md:p-8 border border-border hover:border-primary/20 transition-all duration-300 h-full">

            <h3 className="text-2xl font-semibold mb-5">
              My Focus
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-5">
              Currently strengthening my understanding of
              <span className="text-primary font-medium">
                {" "}Data Structures & Algorithms
              </span>
              , software design principles, and scalable application architecture.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to contribute to impactful software products while continuously
              improving as a software engineer through hands-on development and real-world projects.
            </p>

          </div>

        </AnimatedSection>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

        {highlights.map((item, i) => (
          <AnimatedSection key={item.title} delay={0.1 * i}>

            <div className="card-gradient rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 h-full">

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">

                <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />

              </div>

              <h4 className="font-semibold text-base mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>

            </div>

          </AnimatedSection>
        ))}

      </div>

    </div>
  </section>
);

export default AboutSection;
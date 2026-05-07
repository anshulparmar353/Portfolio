import { GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <SectionHeading
        tag="Education & Experience"
        title="My Background"
        subtitle="Academic foundation and project-based development experience."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="card-gradient rounded-xl p-6 md:p-8 border border-border h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="border-l-2 border-primary/30 pl-5 space-y-1">
              <p className="font-semibold">B.Tech Computer Science Engineering</p>
              <p className="text-sm text-muted-foreground">IPS IES Academy, Indore</p>
              <p className="text-xs text-primary font-mono">2024 – 2028 · Pursuing</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card-gradient rounded-xl p-6 md:p-8 border border-border h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Experience</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Fresher with hands-on project-based development experience:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Flutter Dev", "Clean Architecture", "BLoC", "REST APIs", "Auth Systems", "Performance Optimization"].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Dart", "Kotlin"],
  },

  {
    category: "Mobile Development",
    skills: [
      "Flutter",
      "Responsive UI",
      "Cross-Platform Development",
      "Material Design",
    ],
  },

  {
    category: "Architecture & State Management",
    skills: [
      "Clean Architecture",
      "MVVM",
      "BLoC Pattern",
    ],
  },

  {
    category: "Backend & APIs",
    skills: [
      "REST APIs",
      "JSON Parsing",
      "JWT Authentication",
      "API Integration",
    ],
  },

  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOPs",
      "Problem Solving",
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "VS Code",
      "Postman",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">

      <SectionHeading
        tag="Skills"
        title="Technical Skills"
        subtitle="Technologies, tools, and engineering practices I use to build scalable applications."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skillGroups.map((group, i) => (
          <AnimatedSection key={group.category} delay={0.1 * i}>

            <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 h-full">

              <div className="mb-5">

                <h3 className="font-semibold text-sm text-primary uppercase tracking-[0.2em]">
                  {group.category}
                </h3>

                <div className="w-12 h-[2px] bg-primary/40 mt-3 rounded-full" />

              </div>

              <div className="flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </AnimatedSection>
        ))}

      </div>

    </div>
  </section>
);

export default SkillsSection;
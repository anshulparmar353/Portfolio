import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Med Guard – Offline-First Medicine Reminder",
    status: "Featured Project",
    description:
      "An offline-first medicine reminder application designed for reliable medication tracking, adherence monitoring, and future cloud synchronization.",

    features: [
      "Offline-first architecture using Hive as the local source of truth",
      "Interactive medicine reminders with Taken/Skip actions",
      "Daily dose tracking with adherence analytics",
      "Scalable sync queue system for future Firebase integration",
      "Elderly-friendly UI focused on accessibility and simplicity",
    ],

    tech: [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Hive",
      "Local Notifications",
      "Firebase",
    ],

    link: "https://github.com/anshulparmar353/Med-Guard",
  },

  {
    title: "AI Assistant App",
    status: "Active Development",

    description:
      "A scalable AI-powered assistant application focused on real-time conversations, markdown rendering, and multimodal interaction.",

    features: [
      "Integrated Gemini API for real-time AI responses",
      "Markdown rendering with conversational UI support",
      "Multi-image input with preview and validation",
      "Structured Clean Architecture using BLoC state management",
      "Optimized API handling and error management",
    ],

    tech: [
      "Flutter",
      "BLoC",
      "Dio",
      "Gemini API",
      "Clean Architecture",
    ],

    link: "https://github.com/anshulparmar353/Chat-Bot",
  },

  {
    title: "Data Structures & Algorithms",
    status: "Interview Preparation",

    description:
      "A structured collection of DSA implementations and problem-solving approaches focused on coding interviews and optimization techniques.",

    features: [
      "Topic-wise implementations using STL",
      "Optimized algorithms with complexity analysis",
      "LeetCode-style interview problem practice",
      "Clean and modular C++ code structure",
      "Continuous learning and repository updates",
    ],

    tech: ["C++", "STL", "Algorithms", "Problem Solving"],

    link:
      "https://github.com/anshulparmar353/Data-Structures-and-Algorithms",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-muted/30">
    <div className="container mx-auto">

      <SectionHeading
        tag="Projects"
        title="What I've Built"
        subtitle="Projects focused on scalable architecture, performance optimization, and real-world problem solving."
      />

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={0.15 * i}>

            <div className="card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 group h-full flex flex-col hover:-translate-y-1">

              <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />

              <div className="p-6 md:p-8 flex-1 flex flex-col">

                <div className="flex items-start justify-between mb-5">

                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>

                    {project.status && (
                      <span className="text-xs font-medium text-primary px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">

                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="p-2 rounded-lg border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-all"
                    >
                      <Github size={17} />
                    </button>

                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="p-2 rounded-lg border border-border hover:border-primary/40 text-muted-foreground hover:text-primary transition-all"
                    >
                      <ExternalLink size={17} />
                    </button>

                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-6 flex-1">

                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-border">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>
            </div>

          </AnimatedSection>
        ))}

      </div>
    </div>
  </section>
);

export default ProjectsSection;
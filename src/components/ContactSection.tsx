import { Mail, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:anshulparmar353@gmail.com",
    value: "anshulparmar353@gmail.com",
  },

  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/anshulparmar353",
    value: "github.com/anshulparmar353",
  },

  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anshulparmar353/",
    value: "linkedin.com/in/anshulparmar353",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-padding scroll-mt-24"
    >
      <div className="container mx-auto">

        <SectionHeading
          tag="Contact"
          title="Let's Connect"
          subtitle="Open to internship opportunities, collaborations, and software engineering discussions."
        />

        <AnimatedSection>

          <div className="max-w-5xl mx-auto mt-14">

            <div className="grid md:grid-cols-3 gap-6">

              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-border
                    bg-card/40 backdrop-blur-md
                    p-7
                    transition-all duration-300
                    hover:border-primary/40
                    hover:-translate-y-1
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                  <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">

                    <social.icon
                      size={28}
                      className="text-primary group-hover:scale-110 transition-transform duration-300"
                    />

                  </div>

                  <div className="relative">

                    <h3 className="text-lg font-semibold mb-2">
                      {social.label}
                    </h3>

                    <p className="text-sm text-muted-foreground break-all">
                      {social.value}
                    </p>

                  </div>

                </a>
              ))}

            </div>

          </div>

        </AnimatedSection>

      </div>
    </section>
  );
};

export default ContactSection;
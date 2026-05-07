import AnimatedSection from "./AnimatedSection";

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ tag, title, subtitle }: Props) => (
  <AnimatedSection className="text-center mb-14">
    <span className="text-primary font-mono text-sm tracking-wider uppercase">
      {tag}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{title}</h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </AnimatedSection>
);

export default SectionHeading;

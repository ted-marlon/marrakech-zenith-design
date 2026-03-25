import aboutHero from "@/assets/about-hero.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Home, Smile, Award, TrendingUp, Heart, Shield, Target, Star } from "lucide-react";

const stats = [
  { icon: Home, value: "350+", label: "Properties Sold" },
  { icon: Smile, value: "1785+", label: "Happy Clients" },
  { icon: Award, value: "254+", label: "Project Complete" },
  { icon: TrendingUp, value: "116", label: "Winning Awards" },
];

const values = [
  {
    icon: Heart,
    title: "Client-Centered",
    description: "Your vision is our compass. Every recommendation, every negotiation is tailored to your singular ambitions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Absolute transparency and discretion in every transaction — because trust is the foundation of lasting partnerships.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We accept nothing less than perfection, delivering a standard of service worthy of the properties we represent.",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "Cutting-edge market intelligence and digital tools that give our clients a decisive advantage.",
  },
];

const About = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="relative h-[50vh] overflow-hidden">
      <img src={aboutHero} alt="Marrakech skyline" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h1 className="section-title text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/70 font-light leading-relaxed text-sm md:text-base">
            Where discerning taste meets unparalleled expertise. At GateOne, we curate extraordinary properties for an exclusive clientele who demand nothing less than perfection.
          </p>
        </div>
      </div>
    </section>

    {/* Our Mission */}
    <section className="section-padding max-w-4xl mx-auto">
      <AnimatedSection className="text-center">
        <h2 className="section-title text-foreground mb-6">Our Mission</h2>
        <div className="luxury-divider mb-10" />
        <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
          For over a decade, GateOne has been the preferred address for distinguished investors and connoisseurs seeking
          the finest properties Marrakech has to offer. From centuries-old riads nestled within the Medina's storied walls
          to contemporary architectural masterpieces in the Palmeraie, we unlock doors that remain closed to others.
        </p>
        <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
          Our elite team of advisors possesses an intimate understanding of Marrakech's most coveted addresses. We don't
          simply sell properties — we orchestrate seamless acquisitions, providing bespoke counsel on every aspect of your
          investment, from due diligence and legal frameworks to interior design and property management.
        </p>
        <p className="text-base font-light leading-relaxed text-muted-foreground">
          Discretion, excellence, and an unwavering commitment to our clients define everything we do. In a market where
          the most exceptional opportunities are never publicly listed, GateOne's privileged network ensures you always
          have first access to Marrakech's most prestigious addresses.
        </p>
      </AnimatedSection>
    </section>

    {/* Our Track Record */}
    <section className="bg-muted section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="section-title text-foreground mb-3">Our Track Record</h2>
          <p className="text-muted-foreground font-light mb-12">Numbers that reflect our commitment to excellence</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-lg p-6 border border-border hover-lift">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-border flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-3xl text-foreground mb-1">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="section-padding max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <h2 className="section-title text-foreground mb-3">Our Values</h2>
        <p className="text-muted-foreground font-light">The principles that guide everything we do and shape<br />how we serve our clients</p>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-background rounded-lg border border-border p-6 text-center hover-lift">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-border flex items-center justify-center">
                <v.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{v.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-charcoal section-padding">
      <AnimatedSection className="text-center max-w-xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Work With Us?</h2>
        <p className="text-primary-foreground/60 font-light mb-8 leading-relaxed">
          Whether you're buying, selling, or investing, our team is here to guide you through every step of your real estate journey.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-sans text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </AnimatedSection>
    </section>
  </div>
);

export default About;

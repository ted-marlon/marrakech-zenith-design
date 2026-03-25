import aboutHero from "@/assets/about-hero.jpg";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="relative h-[50vh] overflow-hidden">
      <img src={aboutHero} alt="Marrakech" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
        <div className="text-center">
          <p className="section-subtitle text-primary-foreground/60 mb-4">About Us</p>
          <h1 className="section-title text-primary-foreground">Our Story</h1>
        </div>
      </div>
    </section>

    <section className="section-padding max-w-4xl mx-auto">
      <AnimatedSection className="text-center">
        <div className="luxury-divider mb-10" />
        <p className="text-lg font-light leading-relaxed text-foreground/80 mb-8">
          Founded in 2008, Dar·Marrakech was born from a passion for Moroccan architecture and a desire to share the magic
          of Marrakech with the world. What began as a small boutique agency has grown into the city's most trusted name in
          luxury real estate.
        </p>
        <p className="text-lg font-light leading-relaxed text-foreground/80 mb-8">
          Our team of seasoned experts combines deep local knowledge with international sophistication. We understand that
          acquiring a property in Marrakech is more than a transaction — it's the beginning of a love affair with a city that
          has captivated travelers, artists, and visionaries for centuries.
        </p>
        <p className="text-lg font-light leading-relaxed text-foreground/80">
          Whether you seek a traditional riad in the heart of the Medina, a contemporary villa in the Palmeraie, or a
          profitable investment opportunity, we offer a level of service that is as exceptional as the properties we represent.
        </p>
      </AnimatedSection>
    </section>

    {/* Stats */}
    <section className="bg-charcoal text-primary-foreground section-padding">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {[
          { value: "15+", label: "Years of Experience" },
          { value: "200+", label: "Properties Sold" },
          { value: "€500M+", label: "Total Transactions" },
          { value: "30+", label: "Countries Served" },
        ].map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <p className="font-serif text-4xl text-accent mb-2">{s.value}</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50">{s.label}</p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default About;

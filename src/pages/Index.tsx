import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Key, TrendingUp, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";
import PropertyCard from "@/components/PropertyCard";
import AnimatedSection from "@/components/AnimatedSection";
import { properties } from "@/data/properties";

const Index = () => {
  const featured = properties.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury villa in Marrakech"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subtitle text-primary-foreground/70 mb-6"
          >
            Luxury Real Estate
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground tracking-wide leading-tight"
          >
            Exceptional Properties
            <br />
            <span className="italic">in Marrakech</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-light hover:bg-primary-foreground hover:text-charcoal transition-all duration-500"
            >
              Explore Properties
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding">
        <AnimatedSection className="text-center mb-16">
          <p className="section-subtitle mb-4">Portfolio</p>
          <h2 className="section-title">Featured Properties</h2>
          <div className="luxury-divider mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>

        <AnimatedSection className="text-center mt-14">
          <Link
            to="/properties"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-light text-foreground hover:text-accent transition-colors"
          >
            View All Properties <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>

      {/* About */}
      <section className="bg-charcoal text-primary-foreground section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-subtitle text-primary-foreground/40 mb-4">Our Story</p>
            <h2 className="section-title text-primary-foreground">A Legacy of Excellence</h2>
            <div className="luxury-divider mt-6 mb-10" />
            <p className="font-light text-primary-foreground/70 leading-relaxed text-lg max-w-2xl mx-auto">
              For over fifteen years, GateOne has been the trusted partner for international clients
              seeking the finest properties in Morocco's most enchanting city. Our intimate knowledge of the
              local market, combined with an uncompromising dedication to discretion, ensures every acquisition
              is truly exceptional.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-[0.2em] font-light text-accent hover:text-primary-foreground transition-colors"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="section-padding">
        <AnimatedSection className="text-center mb-16">
          <p className="section-subtitle mb-4">Experience</p>
          <h2 className="section-title">The Marrakech Lifestyle</h2>
          <div className="luxury-divider mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: lifestyle1, label: "Fine Dining" },
            { img: lifestyle2, label: "World-Class Golf" },
            { img: lifestyle3, label: "Desert Adventures" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative overflow-hidden aspect-[4/3] group cursor-pointer">
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover image-zoom group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-foreground font-serif text-xl font-light">{item.label}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-card section-padding">
        <AnimatedSection className="text-center mb-16">
          <p className="section-subtitle mb-4">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <div className="luxury-divider mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Home, title: "Buying", desc: "Find your dream property with our curated selection and expert guidance." },
            { icon: Key, title: "Selling", desc: "Maximize your property's value with our discreet and effective approach." },
            { icon: TrendingUp, title: "Investment", desc: "Strategic consulting for profitable real estate investments in Morocco." },
            { icon: Building2, title: "Management", desc: "Comprehensive property management and concierge services." },
          ].map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <s.icon size={28} className="mx-auto text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-light mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <AnimatedSection className="text-center mb-16">
          <p className="section-subtitle mb-4">Testimonials</p>
          <h2 className="section-title">Client Stories</h2>
          <div className="luxury-divider mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            { quote: "GateOne found us a riad beyond our wildest dreams. Their expertise and discretion made the entire process effortless.", author: "Sophie Laurent", origin: "Paris, France" },
            { quote: "An unparalleled level of service. They understood exactly what we were looking for and delivered perfection.", author: "James Whitfield", origin: "London, UK" },
          ].map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <blockquote className="border-l-2 border-accent pl-6">
                <p className="font-serif text-lg italic font-light leading-relaxed text-foreground/80">"{t.quote}"</p>
                <footer className="mt-4">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.origin}</p>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-primary-foreground section-padding text-center">
        <AnimatedSection>
          <h2 className="section-title text-primary-foreground mb-6">Begin Your Journey</h2>
          <p className="font-light text-primary-foreground/60 mb-10 max-w-md mx-auto">
            Let us help you find the perfect property in Marrakech.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-accent text-accent px-8 py-4 text-sm uppercase tracking-[0.2em] font-light hover:bg-accent hover:text-charcoal transition-all duration-500"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Index;

import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => (
  <div className="pt-24">
    <section className="section-padding">
      <AnimatedSection className="text-center mb-16">
        <p className="section-subtitle mb-4">Get in Touch</p>
        <h1 className="section-title">Contact Us</h1>
        <div className="luxury-divider mt-6" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Form */}
        <AnimatedSection>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="First Name" className="w-full px-4 py-4 bg-card border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-4 bg-card border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-4 py-4 bg-card border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-4 bg-card border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
            <select className="w-full px-4 py-4 bg-card border border-border text-sm font-light text-muted-foreground focus:outline-none focus:border-accent transition-colors">
              <option>I'm interested in...</option>
              <option>Buying a property</option>
              <option>Selling a property</option>
              <option>Investment consulting</option>
              <option>Property management</option>
            </select>
            <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-4 bg-card border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors resize-none" />
            <button type="submit" className="w-full bg-foreground text-background py-4 text-sm uppercase tracking-[0.2em] font-light hover:bg-accent hover:text-charcoal transition-all duration-500">
              Send Message
            </button>
          </form>
        </AnimatedSection>

        {/* Info */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-2xl font-light mb-6">Visit Our Office</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We welcome you to visit our office in the heart of Gueliz, Marrakech's modern quarter,
                where our team is ready to guide you through every step of your property journey.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: MapPin, text: "Avenue Mohammed V, Gueliz\nMarrakech 40000, Morocco" },
                { icon: Phone, text: "+212 524 000 000" },
                { icon: Mail, text: "contact@darmarrakech.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <item.icon size={20} className="text-accent mt-1 shrink-0" strokeWidth={1.5} />
                  <p className="text-sm font-light text-foreground/80 whitespace-pre-line">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] bg-card border border-border flex items-center justify-center">
              <p className="text-muted-foreground text-sm font-light">Map Integration</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Contact;

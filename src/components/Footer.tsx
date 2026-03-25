import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground">
    <div className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <h3 className="font-serif text-2xl font-light mb-4">
            Dar<span className="text-accent">·</span>Marrakech
          </h3>
          <p className="text-primary-foreground/60 font-light text-sm leading-relaxed max-w-xs">
            Curating exceptional properties in Marrakech for the world's most discerning clients since 2008.
          </p>
        </div>

        <div>
          <h4 className="section-subtitle text-primary-foreground/40 mb-6">Navigation</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Properties", href: "/properties" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-light"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="section-subtitle text-primary-foreground/40 mb-6">Contact</h4>
          <div className="flex flex-col gap-3 text-sm font-light text-primary-foreground/60">
            <p>Gueliz, Avenue Mohammed V</p>
            <p>Marrakech 40000, Morocco</p>
            <p className="text-accent">+212 524 000 000</p>
            <p>contact@darmarrakech.com</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-primary-foreground/30 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Dar·Marrakech — All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

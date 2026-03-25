import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isHome ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"}`}>
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <Link to="/" className="font-serif text-2xl md:text-3xl font-light tracking-wide">
          <span className={isHome ? "text-primary-foreground" : "text-foreground"}>Dar</span>
          <span className="text-accent">·</span>
          <span className={isHome ? "text-primary-foreground" : "text-foreground"}>Marrakech</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm uppercase tracking-[0.2em] font-light transition-colors duration-300 hover:text-accent ${isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <X className={isHome ? "text-primary-foreground" : "text-foreground"} size={24} />
          ) : (
            <Menu className={isHome ? "text-primary-foreground" : "text-foreground"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-light text-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

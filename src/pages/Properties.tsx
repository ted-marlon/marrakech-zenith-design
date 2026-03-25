import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import AnimatedSection from "@/components/AnimatedSection";
import { properties } from "@/data/properties";

const Properties = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const types = ["All", ...Array.from(new Set(properties.map((p) => p.type)))];
  const locations = ["All", ...Array.from(new Set(properties.map((p) => p.location)))];

  const filtered = properties.filter((p) => {
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    if (locationFilter !== "All" && p.location !== locationFilter) return false;
    return true;
  });

  return (
    <div className="pt-24">
      <section className="section-padding">
        <AnimatedSection className="text-center mb-12">
          <p className="section-subtitle mb-4">Portfolio</p>
          <h1 className="section-title">Our Properties</h1>
          <div className="luxury-divider mt-6" />
        </AnimatedSection>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Type</span>
            <div className="flex gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${typeFilter === t ? "bg-foreground text-background" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Location</span>
            <div className="flex gap-2">
              {locations.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocationFilter(l)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${locationFilter === l ? "bg-foreground text-background" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-light py-20">No properties match your criteria.</p>
        )}
      </section>
    </div>
  );
};

export default Properties;

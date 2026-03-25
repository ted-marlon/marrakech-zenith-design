import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="pt-24 section-padding text-center">
        <h1 className="section-title mb-6">Property Not Found</h1>
        <Link to="/properties" className="text-accent hover:underline">Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="section-padding">
        <Link to="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-8">
          <ArrowLeft size={16} /> Back to Properties
        </Link>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          <div className="lg:col-span-2 overflow-hidden aspect-[16/10]">
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={property.images[selectedImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`overflow-hidden aspect-[4/3] lg:aspect-auto ${selectedImage === i ? "ring-2 ring-accent" : "opacity-60 hover:opacity-100"} transition-opacity`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <p className="section-subtitle mb-2">{property.type} · {property.location}</p>
              <h1 className="font-serif text-3xl md:text-5xl font-light mb-2">{property.title}</h1>
              <p className="text-accent font-serif text-2xl mb-8">{property.price}</p>

              <div className="flex gap-8 mb-10 py-6 border-y border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bed size={18} strokeWidth={1.5} /> {property.bedrooms} Bedrooms
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bath size={18} strokeWidth={1.5} /> {property.bathrooms} Bathrooms
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Maximize size={18} strokeWidth={1.5} /> {property.area}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={18} strokeWidth={1.5} /> {property.location}
                </div>
              </div>

              <p className="text-foreground/80 font-light leading-relaxed text-lg mb-10">{property.description}</p>

              <h3 className="font-serif text-xl mb-4">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" /> {f}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Contact form */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="bg-card p-8 sticky top-28">
                <h3 className="font-serif text-xl mb-6">Inquire About This Property</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-background border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-background border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-background border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors" />
                  <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 bg-background border border-border text-sm font-light focus:outline-none focus:border-accent transition-colors resize-none" />
                  <button type="submit" className="w-full bg-foreground text-background py-4 text-sm uppercase tracking-[0.2em] font-light hover:bg-accent hover:text-charcoal transition-all duration-500">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}

const PropertyCard = ({ id, image, title, location, price, type, bedrooms, bathrooms, area }: PropertyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    <Link to={`/properties/${id}`} className="group block">
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover image-zoom group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <p className="section-subtitle text-xs">{type} · {location}</p>
        <h3 className="font-serif text-xl font-light">{title}</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-light">
          <span>{bedrooms} beds</span>
          <span className="text-border">|</span>
          <span>{bathrooms} baths</span>
          <span className="text-border">|</span>
          <span>{area}</span>
        </div>
        <p className="text-accent font-serif text-lg">{price}</p>
      </div>
    </Link>
  </motion.div>
);

export default PropertyCard;

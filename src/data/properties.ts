import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  image: string;
  images: string[];
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  {
    id: "riad-al-amir",
    image: property1,
    images: [property1, property3, property5],
    title: "Riad Al Amir",
    location: "Medina",
    price: "€1,850,000",
    type: "Riad",
    bedrooms: 5,
    bathrooms: 5,
    area: "450 m²",
    description: "An exquisitely restored riad in the heart of the Medina, featuring traditional craftsmanship, a serene courtyard with fountain, and rooftop terrace with Atlas Mountain views.",
    features: ["Private courtyard", "Rooftop terrace", "Hammam", "Zellige tilework", "Carved cedar ceilings", "Fountain"],
  },
  {
    id: "villa-atlas-panorama",
    image: property2,
    images: [property2, property6, property4],
    title: "Villa Atlas Panorama",
    location: "Palmeraie",
    price: "€3,200,000",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 7,
    area: "800 m²",
    description: "A contemporary masterpiece nestled in the Palmeraie, offering breathtaking views of the Atlas Mountains, infinity pool, and lush gardens spanning over 2 hectares.",
    features: ["Infinity pool", "Mountain views", "Private garden", "Home cinema", "Staff quarters", "Garage"],
  },
  {
    id: "dar-el-yasmine",
    image: property3,
    images: [property3, property1, property5],
    title: "Dar el Yasmine",
    location: "Medina",
    price: "€950,000",
    type: "Riad",
    bedrooms: 4,
    bathrooms: 4,
    area: "320 m²",
    description: "A charming boutique riad with elegant interiors, offering the perfect blend of traditional Moroccan architecture and modern luxury comforts.",
    features: ["Plunge pool", "Traditional hammam", "Garden courtyard", "Fireplace", "Air conditioning"],
  },
  {
    id: "villa-jardin-secret",
    image: property4,
    images: [property4, property2, property6],
    title: "Villa Jardin Secret",
    location: "Route de l'Ourika",
    price: "€2,750,000",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: "650 m²",
    description: "A stunning villa surrounded by manicured gardens and olive groves, featuring Moroccan-inspired architecture with contemporary interior design.",
    features: ["Swimming pool", "Olive grove", "Guest house", "Tennis court", "Outdoor kitchen", "Security system"],
  },
  {
    id: "riad-noor",
    image: property5,
    images: [property5, property3, property1],
    title: "Riad Noor",
    location: "Kasbah",
    price: "€1,200,000",
    type: "Riad",
    bedrooms: 3,
    bathrooms: 3,
    area: "280 m²",
    description: "A jewel of Moroccan craftsmanship located in the prestigious Kasbah district, featuring a private spa, marble hammam, and intimate plunge pool.",
    features: ["Private spa", "Marble hammam", "Plunge pool", "Zellige details", "Roof terrace"],
  },
  {
    id: "villa-oasis",
    image: property6,
    images: [property6, property4, property2],
    title: "Villa Oasis",
    location: "Amelkis",
    price: "€4,500,000",
    type: "Villa",
    bedrooms: 7,
    bathrooms: 8,
    area: "1,200 m²",
    description: "The pinnacle of luxury living in Marrakech. This grand estate features soaring ceilings, museum-quality interiors, and resort-style outdoor spaces overlooking a championship golf course.",
    features: ["Golf course views", "Heated pool", "Wine cellar", "Library", "Private gym", "Staff apartment"],
  },
];

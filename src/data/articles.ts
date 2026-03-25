import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import journal4 from "@/assets/journal-4.jpg";
import journal5 from "@/assets/journal-5.jpg";
import journal6 from "@/assets/journal-6.jpg";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "the-art-of-the-riad",
    title: "The Art of the Riad: Timeless Moroccan Living",
    excerpt: "Discover why the traditional riad remains the most coveted architectural form in Marrakech — and how to find one worthy of your collection.",
    content: [
      "The riad is more than a home — it is a philosophy of living. For centuries, these inward-facing sanctuaries have offered their inhabitants a private paradise, shielded from the world by unassuming façades that conceal courtyards of extraordinary beauty.",
      "At GateOne, we have curated some of the Medina's most exceptional riads, each a testament to the artisans who crafted them. From intricately carved cedar ceilings to hand-laid zellige tilework in over forty traditional patterns, every surface tells a story of generations of mastery.",
      "The most sought-after riads combine this heritage with contemporary refinement — discreet climate control, reimagined hammams, and rooftop terraces that frame the Atlas Mountains. These are not merely properties; they are living works of art.",
    ],
    image: journal1,
    category: "Architecture",
    date: "March 2026",
    readTime: "5 min read",
  },
  {
    id: "investment-outlook-2026",
    title: "Marrakech Real Estate: The 2026 Investment Outlook",
    excerpt: "Why savvy international investors are turning to Marrakech as the premier destination for luxury property portfolios.",
    content: [
      "Marrakech's luxury real estate market has demonstrated remarkable resilience and growth over the past decade. With property values in prime locations appreciating at an average of 8–12% annually, the Red City has firmly established itself as a compelling alternative to saturated European markets.",
      "The expansion of Marrakech-Menara Airport, new direct routes from major capitals, and Morocco's favorable tax framework for foreign investors have created a confluence of factors that make 2026 a particularly strategic moment to acquire.",
      "Our analysis identifies the Palmeraie and Route de l'Ourika corridors as the areas with the highest growth potential, while heritage properties in the Medina continue to command premium prices that reflect their irreplaceable character.",
    ],
    image: journal2,
    category: "Investment",
    date: "February 2026",
    readTime: "7 min read",
  },
  {
    id: "marrakech-unveiled",
    title: "Marrakech Unveiled: A City That Captivates",
    excerpt: "Beyond the souks and minarets lies a city of extraordinary depth — a place where ancient tradition and modern luxury coexist in perfect harmony.",
    content: [
      "Marrakech has always been a city of contrasts. The call to prayer echoes across rooftops where infinity pools shimmer in the golden light. Donkey carts navigate lanes just moments from Michelin-worthy restaurants. It is this duality that makes the Red City so irresistible.",
      "For our international clients, Marrakech offers something no European capital can — a sense of genuine discovery. Every visit reveals a new layer: a hidden garden behind a crumbling wall, a master craftsman working in techniques unchanged for five hundred years, a sunset over the Medina that makes time feel irrelevant.",
      "Living here is not simply owning property. It is becoming part of a story that has been unfolding for a thousand years.",
    ],
    image: journal3,
    category: "Lifestyle",
    date: "January 2026",
    readTime: "4 min read",
  },
  {
    id: "moroccan-design-renaissance",
    title: "The Moroccan Design Renaissance",
    excerpt: "How a new generation of architects and designers is redefining luxury interiors by honoring tradition while embracing the contemporary.",
    content: [
      "A quiet revolution is transforming Marrakech's design landscape. Young Moroccan architects, many trained in Paris, London, and Milan, are returning home to create spaces that marry ancestral techniques with bold modernism.",
      "Tadelakt — the ancient waterproof plaster — is being reimagined in unexpected colors. Traditional moucharabieh screens are laser-cut into geometric abstractions. The result is an aesthetic that is unmistakably Moroccan yet thoroughly of this moment.",
      "At GateOne, we work closely with these visionaries to present properties where every detail has been considered. For our clients, this means acquiring homes that are not only beautiful but culturally significant — pieces of Morocco's creative future.",
    ],
    image: journal4,
    category: "Design",
    date: "December 2025",
    readTime: "6 min read",
  },
  {
    id: "golf-and-leisure",
    title: "The Golfer's Paradise: Marrakech's World-Class Courses",
    excerpt: "With championship courses designed by legends and year-round sunshine, Marrakech has become the discerning golfer's ultimate retreat.",
    content: [
      "Marrakech now boasts over a dozen championship golf courses, many designed by the sport's most celebrated architects — Jack Nicklaus, Robert Trent Jones II, and Kyle Phillips among them. The combination of dramatic Atlas Mountain backdrops and impeccable year-round playing conditions has made the city a magnet for the global golfing elite.",
      "Properties adjacent to courses like Royal Palm, Amelkis, and Al Maaden command significant premiums, and for good reason. These residences offer a lifestyle where a morning round is followed by lunch in a private garden shaded by century-old olive trees.",
      "Our portfolio includes a curated selection of golf-adjacent villas, each offering direct course access and the exclusivity that defines the GateOne experience.",
    ],
    image: journal5,
    category: "Lifestyle",
    date: "November 2025",
    readTime: "5 min read",
  },
  {
    id: "palmeraie-living",
    title: "The Palmeraie: Marrakech's Most Exclusive Address",
    excerpt: "An oasis of palatial villas and private estates, the Palmeraie represents the pinnacle of luxury living in Morocco.",
    content: [
      "Stretching across 13,000 hectares northeast of the Medina, the Palmeraie is home to Marrakech's most extraordinary private estates. Originally a palm grove planted in the 12th century by the Almoravid dynasty, it has evolved into an enclave of staggering luxury.",
      "Here, properties are measured not in square meters but in hectares. Walled compounds contain multiple pavilions, Olympic-sized pools, private hammams, and gardens designed by the world's foremost landscape architects. Privacy is absolute; discretion is guaranteed.",
      "GateOne maintains privileged access to Palmeraie estates that never reach the open market. For clients seeking the ultimate expression of luxury in Marrakech, this is where the journey begins.",
    ],
    image: journal6,
    category: "Neighborhoods",
    date: "October 2025",
    readTime: "6 min read",
  },
];

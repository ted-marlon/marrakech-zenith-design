import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import AnimatedSection from "@/components/AnimatedSection";
import aboutHero from "@/assets/about-hero.jpg";

const Journal = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="relative h-[40vh] overflow-hidden">
      <img src={aboutHero} alt="Marrakech" className="w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
        <div className="text-center">
          <p className="section-subtitle text-primary-foreground/60 mb-4">Insights & Inspiration</p>
          <h1 className="section-title text-primary-foreground">Journal</h1>
        </div>
      </div>
    </section>

    {/* Featured Article */}
    <section className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <Link to={`/journal/${articles[0].id}`} className="group block">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-sm">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-[350px] object-cover image-zoom group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={960}
                height={640}
              />
            </div>
            <div>
              <p className="section-subtitle text-accent mb-3">{articles[0].category}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 group-hover:text-accent transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{articles[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>{articles[0].readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      </AnimatedSection>
    </section>

    {/* Article Grid */}
    <section className="bg-muted section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.slice(1).map((article, i) => (
            <AnimatedSection key={article.id} delay={i * 0.1}>
              <Link to={`/journal/${article.id}`} className="group block">
                <div className="bg-background rounded-sm overflow-hidden border border-border hover-lift">
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-52 object-cover image-zoom group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={960}
                      height={640}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-accent mb-2">{article.category}</p>
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground/60">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Journal;

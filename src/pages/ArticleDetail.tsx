import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="pt-24 section-padding text-center min-h-screen">
        <h1 className="section-title text-foreground mb-4">Article Not Found</h1>
        <Link to="/journal" className="text-accent hover:underline">Return to Journal</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" width={960} height={640} />
        <div className="absolute inset-0 bg-charcoal/40" />
      </section>

      {/* Content */}
      <section className="section-padding max-w-3xl mx-auto">
        <AnimatedSection>
          <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Journal
          </Link>

          <p className="section-subtitle text-accent mb-3">{article.category}</p>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">{article.title}</h1>

          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-10">
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>{article.readTime}</span>
          </div>

          <div className="luxury-divider mb-10" />

          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-base font-light leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-muted section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-foreground text-center mb-12">Continue Reading</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((a, i) => (
                <AnimatedSection key={a.id} delay={i * 0.1}>
                  <Link to={`/journal/${a.id}`} className="group block">
                    <div className="bg-background rounded-sm overflow-hidden border border-border hover-lift">
                      <div className="overflow-hidden">
                        <img src={a.image} alt={a.title} className="w-full h-48 object-cover image-zoom group-hover:scale-105 transition-transform duration-700" loading="lazy" width={960} height={640} />
                      </div>
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-widest text-accent mb-2">{a.category}</p>
                        <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors leading-snug">{a.title}</h3>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;

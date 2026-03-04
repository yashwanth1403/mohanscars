import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const RatingHighlight = () => (
  <section className="py-14 sm:py-20 bg-muted">
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 max-w-3xl mx-auto text-center sm:text-left">
        <div className="space-y-3">
          <div className="flex items-center justify-center sm:justify-start gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-4xl font-extrabold text-foreground">4.8 <span className="text-muted-foreground text-2xl font-semibold">/ 5</span></p>
          <p className="text-muted-foreground font-medium">Average Rating · 100+ Happy Customers</p>
        </div>

        <div className="h-px sm:h-16 w-full sm:w-px bg-border" />

        <div className="space-y-3 max-w-xs">
          <p className="text-foreground font-bold text-lg">Trusted by Hyderabad car buyers</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Consistent 5-star experiences built on honest pricing, verified cars, and helpful service.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 w-full sm:w-auto">
            <Link to="/contact">Contact Dealer</Link>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default RatingHighlight;

import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Rajesh Kumar", review: "Bought a Swift from Siri Auto Cars. Best price in Hyderabad and the car was in mint condition. Highly recommended!" },
  { name: "Priya Sharma", review: "The team helped me get a loan approved in just 2 days. Very professional and transparent throughout the process." },
  { name: "Mohammed Irfan", review: "Sold my old Creta through them. Got a fair price and the payment was instant. No hassle at all." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
    ))}
  </div>
);

const TestimonialsPreviewSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-muted">
      <Container className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold sm:text-3xl">What Our Customers Say</h2>
          <p className="text-muted-foreground">Real reviews from real buyers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="border-none shadow-sm">
              <CardContent className="p-6 space-y-3">
                <Stars />
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.review}"</p>
                <p className="font-semibold text-sm">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button asChild variant="outline" size="lg">
            <Link to="/testimonials">View All Testimonials</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsPreviewSection;

import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /testimonials — Testimonials Page
 * Objective: Social proof page with real customer reviews and ratings.
 */
const Testimonials = () => {
  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Customer Testimonials
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Dedicated social proof page. Rich testimonial cards, aggregate rating, Google reviews embed, and video testimonials.
        </p>

        <Placeholder label="⭐ Aggregate Rating Banner — Overall stars, total reviews count" />
        <Placeholder label="💬 Testimonial Cards Grid — Customer name, photo, car purchased, rating, review text" />
        <Placeholder label="🎥 Video Testimonials — Embedded or hosted short-form video reviews" />
        <Placeholder label="🔗 Google Reviews Widget — Embedded live Google Business reviews" />
        <Placeholder label="📣 Leave a Review CTA — Link to Google / WhatsApp to submit review" />
      </Container>
    </SiteLayout>
  );
};

export default Testimonials;

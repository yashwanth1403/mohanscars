import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /contact — Contact Page
 * Objective: Multiple channels for visitors to reach the dealership.
 */
const Contact = () => {
  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Contact Us
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Contact page with form, direct phone/WhatsApp links, showroom address, Google Maps embed, and working hours.
        </p>

        <Placeholder label="📞 Quick Contact Strip — Call / WhatsApp / Email buttons (large, tap-friendly)" />
        <Placeholder label="📝 Contact Form — Name, Phone, Email, Message, Submit" />
        <Placeholder label="🗺️ Google Maps Embed — Showroom location pinned on map" />
        <Placeholder label="📍 Address & Hours — Physical address, weekday/weekend timings" />
        <Placeholder label="🤝 Social Links — Facebook, Instagram, YouTube (if applicable)" />
      </Container>
    </SiteLayout>
  );
};

export default Contact;

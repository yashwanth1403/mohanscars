import { useParams } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /cars/[slug] — Single Car Detail Page
 * Objective: Deep-dive view for one car — gallery, specs, price, EMI calculator, CTAs.
 */
const CarDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <p className="text-xs font-mono text-muted-foreground">
          Route param: slug = <strong>{slug ?? "undefined"}</strong>
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Car Detail Page
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Loads a single car by slug/ID. Shows full photo gallery, all specs table, price, EMI calc, seller notes, and lead capture CTAs.
        </p>

        <Placeholder label="🖼️ Photo Gallery — Main image + thumbnail strip (lightbox on click)" />
        <Placeholder label="📋 Car Info Header — Title, year, price badge, mileage, fuel, transmission" />
        <Placeholder label="📊 Specifications Table — Engine, seating, colour, registration, owners, insurance" />
        <Placeholder label="💰 EMI Calculator — Loan amount, tenure, interest rate → monthly EMI display" />
        <Placeholder label="🤝 Lead Capture Panel — Call / WhatsApp / Enquiry Form" />
        <Placeholder label="🚗 Similar Cars — Horizontal scroll of related inventory" />
      </Container>
    </SiteLayout>
  );
};

export default CarDetail;

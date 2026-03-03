import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /sell-car — Sell Your Car Page
 * Objective: Capture seller leads with a multi-step form and build trust.
 */
const SellCar = () => {
  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Sell Your Car
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Guide sellers through a multi-step form: car details → owner details → schedule inspection → confirmation. Submits to backend in Phase 3.
        </p>

        <Placeholder label="📣 Hero / Value Prop — 'Get the best price for your car in Hyderabad' + key benefits" />
        <Placeholder label="📝 Multi-Step Lead Form — Step 1: Car info | Step 2: Contact details | Step 3: Schedule inspection" />
        <Placeholder label="✅ How It Works — 3-step visual process (Submit → Inspection → Get Paid)" />
        <Placeholder label="💡 Why Sell With Us — Trust points: quick payment, free valuation, hassle-free paperwork" />
        <Placeholder label="📞 Instant Callback CTA — Phone / WhatsApp strip" />
      </Container>
    </SiteLayout>
  );
};

export default SellCar;

import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /cars — Car Listings Page
 * Objective: Display full inventory with filters, sorting, and pagination.
 */
const Cars = () => {
  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Browse Cars
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Full inventory grid with filters (make, model, year, price, fuel type, transmission) and sorting. Connects to inventory DB in Phase 3.
        </p>

        <Placeholder label="🔧 Filter Sidebar / Filter Bar — Make, Model, Price Range, Year, Fuel Type, Transmission" />
        <Placeholder label="↕️ Sort Controls — Price: Low→High, High→Low | Newest First | Mileage" />
        <Placeholder label="🚗 Car Cards Grid — Responsive grid of car listing cards (image, title, price, km, fuel, CTA)" />
        <Placeholder label="📄 Pagination — Previous / Next / Page numbers" />
        <Placeholder label="❌ Empty State — 'No cars found' illustration when filters return 0 results" />
      </Container>
    </SiteLayout>
  );
};

export default Cars;

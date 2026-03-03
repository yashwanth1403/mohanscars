import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * / — Home Page
 * Objective: Welcome visitors, showcase hero with CTA, surface featured cars,
 * build trust with quick stats and testimonials snippet, drive leads.
 */
const Home = () => {
  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Welcome to Siri Auto Cars
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Home page: hero with search/CTA → featured cars → trust stats → testimonials snippet → contact strip.
        </p>

        <Placeholder label="🏠 Hero Section — Full-width banner with headline, sub-headline, and primary CTA buttons (Browse Cars / Sell Your Car)" />
        <Placeholder label="🔍 Quick Search Bar — Make / Model / Budget / Year filters" />
        <Placeholder label="🚗 Featured Cars Grid — 6–8 highlighted inventory cards" />
        <Placeholder label="📊 Trust Stats Strip — Total cars sold, years in business, happy customers" />
        <Placeholder label="💬 Testimonials Snippet — 2–3 preview cards + link to /testimonials" />
        <Placeholder label="📞 Contact CTA Strip — Call / WhatsApp / Visit showroom" />
      </Container>
    </SiteLayout>
  );
};

export default Home;

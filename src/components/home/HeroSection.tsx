import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-16 sm:py-24">
      <Container className="flex flex-col items-center text-center space-y-6 animate-[fadeIn_150ms_ease-in]">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl max-w-2xl">
          Trusted Used Cars in Hyderabad
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Budget-friendly. Verified. Ready to Drive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
          <Button asChild size="lg" className="w-full sm:w-auto text-base px-8">
            <Link to="/cars">View Cars</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
            <Link to="/sell-car">Sell Your Car</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

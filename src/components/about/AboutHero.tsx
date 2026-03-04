import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const AboutHero = () => (
  <section className="bg-muted py-14 sm:py-20">
    <Container>
      <div className="max-w-2xl mx-auto text-center sm:text-left sm:mx-0 space-y-5">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          About Siri Auto Cars
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Trusted Used Car Dealer in Hyderabad
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
          Siri Auto Cars helps Hyderabad customers buy and sell used cars with honest pricing, verified vehicles, and easy finance options.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8">
            <Link to="/cars">View Cars</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            <Link to="/sell-car">Sell Your Car</Link>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutHero;

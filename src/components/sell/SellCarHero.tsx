import { ArrowDown } from "lucide-react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const SellCarHero = () => {
  const scrollToForm = () => {
    document.getElementById("sell-car-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary">
            Free Evaluation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-primary-foreground leading-tight">
            Sell Your Car in Hyderabad
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-lg">
            Get the best price for your car with a quick and simple evaluation. No hidden fees.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold h-12 px-8 rounded-xl text-base gap-2"
          >
            Get Free Evaluation <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SellCarHero;

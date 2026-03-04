import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919000000000";
const WHATSAPP_MSG = encodeURIComponent("Hello! I'm interested in buying a car from Siri Auto Cars.");

const AboutCTA = () => (
  <section className="py-14 sm:py-20 bg-primary">
    <Container>
      <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-foreground">
          Looking for your next car?
        </h2>
        <p className="text-primary-foreground/75 text-base">
          Browse our verified inventory or get in touch with our team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8">
            <Link to="/cars">Browse Cars</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" className="bg-[hsl(142,70%,40%)] text-white hover:bg-[hsl(142,70%,34%)] font-bold px-8">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutCTA;

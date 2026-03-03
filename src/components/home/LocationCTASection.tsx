import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const PHONE = "+919000000000";
const WHATSAPP = "919000000000";
const MAPS_URL = "https://maps.google.com/?q=Siri+Auto+Cars+Hyderabad";

const LocationCTASection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container className="text-center space-y-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Visit Our Hyderabad Showroom Today</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Walk in anytime to explore our latest collection. We're open 7 days a week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button asChild size="lg" className="w-full sm:w-auto gap-2">
            <a href={`tel:${PHONE}`}>
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto gap-2">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white">
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to visit your showroom.")}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default LocationCTASection;

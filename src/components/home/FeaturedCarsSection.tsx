import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SAMPLE_CARS = [
  { name: "Maruti Swift VXI", year: 2021, km: "28,000", fuel: "Petrol", transmission: "Manual", price: "₹5.25 Lakh", slug: "maruti-swift-vxi-2021" },
  { name: "Hyundai Creta SX", year: 2020, km: "35,000", fuel: "Diesel", transmission: "Automatic", price: "₹11.50 Lakh", slug: "hyundai-creta-sx-2020" },
  { name: "Honda City ZX", year: 2022, km: "18,000", fuel: "Petrol", transmission: "CVT", price: "₹12.75 Lakh", slug: "honda-city-zx-2022" },
  { name: "Tata Nexon EV", year: 2023, km: "12,000", fuel: "Electric", transmission: "Automatic", price: "₹14.00 Lakh", slug: "tata-nexon-ev-2023" },
];

const WHATSAPP_NUMBER = "919000000000";

const FeaturedCarsSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold sm:text-3xl">Featured Cars</h2>
          <p className="text-muted-foreground">Hand-picked deals ready for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_CARS.map((car) => (
            <Card key={car.slug} className="overflow-hidden">
              <AspectRatio ratio={16 / 10}>
                <div className="flex h-full w-full items-center justify-center bg-muted">
                  <span className="text-4xl">🚗</span>
                </div>
              </AspectRatio>
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-base">{car.name}</h3>
                  <p className="text-xs text-muted-foreground">{car.year} · {car.km} km · {car.fuel} · {car.transmission}</p>
                </div>
                <p className="text-xl font-extrabold text-primary">{car.price}</p>
                <div className="flex gap-2">
                  <Button asChild variant="default" size="sm" className="flex-1 text-xs">
                    <Link to={`/cars/${car.slug}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 text-xs border-[hsl(142,70%,40%)] text-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,40%)] hover:text-white">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${car.name} (${car.year})`)}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button asChild variant="secondary" size="lg">
            <Link to="/cars">View All Cars →</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCarsSection;

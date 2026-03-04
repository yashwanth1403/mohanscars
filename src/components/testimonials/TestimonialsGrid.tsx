import Container from "@/components/Container";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    location: "Kukatpally, Hyderabad",
    review: "Siri Auto Cars helped me find a great Maruti Swift within my budget. The process was smooth, transparent, and the car was in excellent condition. Highly recommended!",
    car: "Maruti Swift VXI 2020",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Ameerpet, Hyderabad",
    review: "The team was extremely helpful in getting my loan approved in just 2 days. I was worried about financing but they made it so easy. Very professional service.",
    car: "Hyundai i20 Sportz 2019",
    rating: 5,
  },
  {
    name: "Mohammed Irfan",
    location: "Tolichowki, Hyderabad",
    review: "Sold my old Honda City through them. Got a fair price and the payment was instant. No hassle at all. Will definitely come back when I want to buy a new car.",
    car: "Sold: Honda City 2016",
    rating: 5,
  },
  {
    name: "Swetha Reddy",
    location: "LB Nagar, Hyderabad",
    review: "I was nervous about buying a used car but the staff explained every detail about the car's history and condition. I feel very confident in my purchase.",
    car: "Honda Amaze S 2021",
    rating: 5,
  },
  {
    name: "Anil Verma",
    location: "Secunderabad",
    review: "Great selection of cars in one place. Pricing is fair and there are no hidden charges. The RC transfer was handled entirely by them — very convenient.",
    car: "Toyota Innova Crysta 2018",
    rating: 4,
  },
  {
    name: "Deepika Nair",
    location: "Madhapur, Hyderabad",
    review: "Bought a Tata Nexon for my husband. They arranged insurance same day. The entire experience from test drive to delivery was very smooth. Thank you team!",
    car: "Tata Nexon XZ 2022",
    rating: 5,
  },
];

const TestimonialsGrid = () => (
  <section className="py-14 sm:py-20 bg-background">
    <Container className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Customer Experiences</h2>
        <p className="text-muted-foreground">Trusted by buyers and sellers across Hyderabad</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </Container>
  </section>
);

export default TestimonialsGrid;

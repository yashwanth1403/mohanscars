import { BUSINESS_NAME } from "@/config/business";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, BadgeIndianRupee, Car, Handshake } from "lucide-react";

const FEATURES = [
  { icon: Handshake, title: "Easy Loan Assistance", desc: "We connect you with trusted banks and NBFCs for hassle-free car financing." },
  { icon: ShieldCheck, title: "Insurance Support", desc: "Get comprehensive or third-party insurance arranged before you drive away." },
  { icon: Car, title: "Verified Cars", desc: "Every car undergoes a multi-point inspection for your peace of mind." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "No hidden charges. The price you see is the price you pay." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-muted">
      <Container className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Choose {BUSINESS_NAME}?</h2>
          <p className="text-muted-foreground">Trusted by 500+ happy customers across Hyderabad</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURES.map((f) => (
            <Card key={f.title} className="text-center border-none shadow-sm">
              <CardContent className="p-5 sm:p-6 space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;

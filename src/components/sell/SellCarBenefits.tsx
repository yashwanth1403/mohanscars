import { BadgeIndianRupee, Zap, MessageCircle, FileCheck } from "lucide-react";
import { BUSINESS_NAME } from "@/config/business";
import Container from "@/components/Container";

const benefits = [
  {
    icon: BadgeIndianRupee,
    title: "Best Price Evaluation",
    description: "We assess your car fairly and offer the best market price.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Our team will contact you within 2 hours of submission.",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp",
    description: "Communicate directly via WhatsApp for quick updates.",
  },
  {
    icon: FileCheck,
    title: "Hassle-Free RC Transfer",
    description: "We handle all paperwork and RC transfer formalities.",
  },
];

const SellCarBenefits = () => (
  <section className="py-12 sm:py-16 bg-background">
    <Container>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
        Why Sell With {BUSINESS_NAME}?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-3 rounded-xl bg-card border border-border p-5 shadow-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-semibold text-foreground text-sm sm:text-base">{title}</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default SellCarBenefits;

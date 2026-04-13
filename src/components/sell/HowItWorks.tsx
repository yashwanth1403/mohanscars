import { ClipboardList, PhoneCall, BadgeIndianRupee } from "lucide-react";
import { BUSINESS_NAME } from "@/config/business";
import Container from "@/components/Container";

const getSteps = () => [
  { icon: ClipboardList, step: "01", title: "Submit Car Details", description: "Fill in your car info and contact details. Takes less than 60 seconds." },
  { icon: PhoneCall, step: "02", title: "Our Team Contacts You", description: `A ${BUSINESS_NAME} executive will call or WhatsApp you within 2 hours.` },
  { icon: BadgeIndianRupee, step: "03", title: "Get Best Price Offer", description: "Receive a fair, transparent price offer with no hidden deductions." },
];

const HowItWorks = () => {
  const steps = getSteps();
  return (
  <section className="py-12 sm:py-16 bg-background">
    <Container>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">How It Works</h2>
      <div className="relative flex flex-col sm:flex-row gap-8 sm:gap-0">
        {/* connector line – desktop only */}
        <div className="hidden sm:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-border" />

        {steps.map(({ icon: Icon, step, title, description }) => (
          <div key={step} className="relative flex flex-row sm:flex-col items-start sm:items-center gap-4 sm:gap-4 flex-1 sm:px-4">
            {/* Step circle */}
            <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-extrabold text-lg shadow-md">
              <Icon className="w-7 h-7" />
            </div>
            <div className="sm:text-center">
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Step {step}</span>
              <h3 className="font-bold text-foreground mt-0.5 mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
  );
};

export default HowItWorks;

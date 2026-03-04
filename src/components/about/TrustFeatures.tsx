import Container from "@/components/Container";
import { ShieldCheck, BadgeIndianRupee, Handshake, Car, FileCheck } from "lucide-react";

const FEATURES = [
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden charges. The price you see is what you pay — no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Used Cars",
    desc: "Multi-point inspection on every car before it's listed for sale.",
  },
  {
    icon: Handshake,
    title: "Loan Assistance",
    desc: "We connect you with trusted banks and NBFCs for hassle-free financing.",
  },
  {
    icon: Car,
    title: "Insurance Support",
    desc: "Comprehensive or third-party insurance arranged before you drive away.",
  },
  {
    icon: FileCheck,
    title: "RC Transfer Support",
    desc: "We handle all paperwork and RC transfer so you don't have to worry.",
  },
];

const TrustFeatures = () => (
  <section className="py-14 sm:py-20 bg-muted">
    <Container className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Why Customers Trust Us</h2>
        <p className="text-muted-foreground">Everything you need for a smooth car buying experience</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="bg-card rounded-xl p-5 shadow-sm flex flex-col items-center text-center gap-3 border border-border"
          >
            <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-sm text-foreground leading-snug">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default TrustFeatures;

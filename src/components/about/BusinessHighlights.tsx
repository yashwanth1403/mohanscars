import Container from "@/components/Container";

const HIGHLIGHTS = [
  { metric: "10+", label: "Cars Available Weekly", desc: "Fresh inventory added every week" },
  { metric: "100+", label: "Happy Customers", desc: "Buyers and sellers who trust us" },
  { metric: "2 Days", label: "Avg. Loan Approval", desc: "Quick approvals via partner banks" },
  { metric: "5★", label: "Trusted Hyderabad Dealer", desc: "Consistently rated by our customers" },
];

const BusinessHighlights = () => (
  <section className="py-14 sm:py-20 bg-background">
    <Container className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Our Track Record</h2>
        <p className="text-muted-foreground">Numbers that reflect our commitment to customers</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.label}
            className="bg-card rounded-xl p-6 shadow-sm border border-border text-center space-y-1"
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-primary">{h.metric}</p>
            <p className="font-bold text-sm text-foreground">{h.label}</p>
            <p className="text-xs text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default BusinessHighlights;

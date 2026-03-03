import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinanceSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Card className="bg-primary text-primary-foreground border-none">
          <CardContent className="p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <h2 className="text-2xl font-bold sm:text-3xl">Get Easy EMI Options</h2>
              <p className="text-primary-foreground/80 max-w-md">
                Drive your dream car home today with flexible EMI plans starting at ₹4,999/month. We partner with leading banks to get you approved fast.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-dark w-full sm:w-auto text-base px-8 shrink-0"
              onClick={() => window.open(`https://wa.me/919000000000?text=${encodeURIComponent("Hi, I want to check my EMI eligibility.")}`, "_blank")}
            >
              Check EMI Eligibility
            </Button>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default FinanceSection;

import { BUSINESS_NAME } from "@/config/business";
import Container from "@/components/Container";

const OurStory = () => (
  <section className="py-14 sm:py-20 bg-background">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="space-y-5 order-2 lg:order-1">
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            Our Story
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Born to make car buying simple in Hyderabad
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {BUSINESS_NAME} was started with one goal: to make buying a reliable used car in Hyderabad easy, transparent, and stress-free. We saw too many buyers getting stuck with overpriced or poorly-maintained cars sold through complicated middlemen chains.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe every budget buyer deserves a quality vehicle. That's why every car we sell goes through a thorough inspection and is priced fairly — no hidden costs, no pressure tactics.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're buying your first car or upgrading, our team is here to guide you from browsing to driving away happy.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-2xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <svg className="w-12 h-12 opacity-30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A2.25 2.25 0 0023.25 18V6A2.25 2.25 0 0021 3.75H3A2.25 2.25 0 00.75 6v12A2.25 2.25 0 003 20.25z" />
            </svg>
            <p className="text-sm font-medium opacity-50">Showroom Photo</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default OurStory;

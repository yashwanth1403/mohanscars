import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /about — About Us Page
 * Objective: Build trust and brand credibility. Tell the dealership story.
 */
const About = () => {
  return (
    <SiteLayout>
      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          About Us
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Brand story, mission, team, milestones, and dealership values. Builds emotional trust with buyers.
        </p>

        <Placeholder label="🏢 Brand Story Section — Founding year, vision, mission statement" />
        <Placeholder label="📈 Milestones Timeline — Key achievements over the years" />
        <Placeholder label="👥 Team Section — Founder / key staff cards with photos and roles" />
        <Placeholder label="🏆 Certifications & Awards — Trust badges, affiliations, certifications" />
        <Placeholder label="📍 Showroom Info — Address, map embed, working hours" />
      </Container>
    </SiteLayout>
  );
};

export default About;

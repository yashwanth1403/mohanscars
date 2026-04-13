import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { ShowroomMap } from "@/components/contact/ShowroomMap";
import { ContactCTA } from "@/components/contact/ContactCTA";

/**
 * /contact — Contact Page
 * Objective: Multiple channels for visitors to reach the dealership.
 */
const Contact = () => {
  return (
    <SiteLayout>
      {/* Soft background for the entire page */}
      <div className="bg-muted/20 pb-20 pt-10 sm:pt-16 min-h-[calc(100vh-64px)]">
        <Container>
          {/* Header */}
          <ContactHeader />

          {/* Main content grid: Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Contact Form */}
            <div className="flex flex-col h-full w-full">
              <ContactForm />
            </div>

            {/* Right: Showroom Details & Map */}
            <div className="flex flex-col h-full w-full">
              <ShowroomMap />
            </div>
          </div>

          {/* Bottom Conversion Banner */}
          <ContactCTA />
        </Container>
      </div>
    </SiteLayout>
  );
};

export default Contact;

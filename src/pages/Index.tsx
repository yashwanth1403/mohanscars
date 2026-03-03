import SiteLayout from "@/components/SiteLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCarsSection from "@/components/home/FeaturedCarsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FinanceSection from "@/components/home/FinanceSection";
import TestimonialsPreviewSection from "@/components/home/TestimonialsPreviewSection";
import LocationCTASection from "@/components/home/LocationCTASection";

const Home = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <FeaturedCarsSection />
      <WhyChooseUsSection />
      <FinanceSection />
      <TestimonialsPreviewSection />
      <LocationCTASection />
    </SiteLayout>
  );
};

export default Home;

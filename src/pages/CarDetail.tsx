import { useParams } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Container from "@/components/Container";
import { CarGallery } from "@/components/car-detail/CarGallery";
import { CarOverview } from "@/components/car-detail/CarOverview";
import { CarSpecs } from "@/components/car-detail/CarSpecs";
import { CarDescription } from "@/components/car-detail/CarDescription";
import { EMICalculator } from "@/components/car-detail/EMICalculator";
import { SimilarCars } from "@/components/car-detail/SimilarCars";
import { StickyContactBar } from "@/components/car-detail/StickyContactBar";
import { useEffect } from "react";
import { CARS } from "@/data/cars";

// Placeholder data since doing no backend yet
const placeholderCar = {
  id: "1",
  name: "Mahindra Bolero Pickup 1.7",
  brand: "Mahindra",
  model: "Bolero Pickup",
  year: 2021,
  km: 45000,
  fuel: "Diesel",
  transmission: "Manual",
  price: 850000,
  owner: "1st",
  insurance: "Comprehensive (Valid till Dec 2024)",
  images: ["/images/bolero front.jpg"],
  description:
    "Well maintained commercial vehicle with clean cabin and excellent engine condition.\n\nSingle owner vehicle with valid comprehensive insurance. Non-accidental and fully serviced at authorized Mahindra workshop. Excellent load carrying capacity and high ground clearance.\n\nPrice is slightly negotiable for genuine buyers.",
};

const CarDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find car by id or generated slug
  const carFromData = CARS.find((c) => {
    const generatedSlug = `${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${c.year}`;
    const simpleSlug = c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return c.id === slug || generatedSlug === slug || simpleSlug === slug;
  });

  // Merge found car with  defaults for missing fields
  const activeCar = carFromData
    ? {
        ...placeholderCar,
        ...carFromData,
        images: carFromData.image
          ? [carFromData.image, ...placeholderCar.images.slice(1)]
          : placeholderCar.images,
      }
    : placeholderCar;

  // Reset scroll position on mounted/params changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <SiteLayout>
      {/* Detail Page Background */}
      <div className="bg-muted/20 min-h-[calc(100vh-64px)] pb-32 lg:pb-16 pt-4 sm:pt-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Gallery & Details */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6 lg:gap-8">
              {/* Image Gallery */}
              <CarGallery images={activeCar.images} />

              {/* Mobile Overview */}
              <div className="lg:hidden">
                <CarOverview car={activeCar} />
              </div>

              {/* Main Information Blocks */}
              <CarSpecs car={activeCar} />
              <CarDescription description={activeCar.description} />
              <EMICalculator carPrice={activeCar.price} />
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
              <div className="sticky top-24">
                <CarOverview car={activeCar} />
              </div>
            </div>
          </div>

          {/* Similar Cars Section */}
          <div className="mt-10 lg:mt-16">
            <SimilarCars />
          </div>
        </Container>

        {/* Mobile Sticky Contact Bar */}
        <StickyContactBar />
      </div>
    </SiteLayout>
  );
};

export default CarDetail;

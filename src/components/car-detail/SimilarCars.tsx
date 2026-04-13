import React from "react";
import CarCard from "@/components/cars/CarCard";
import { CARS } from "@/data/cars";

export const SimilarCars = () => {
  // Extracting first 4 cars as placeholder recommendations
  const recommendedCars = CARS.slice(0, 4);

  return (
    <div className="py-6 sm:py-8 mt-4 border-t border-border/60">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
          Similar Cars You May Like
        </h2>
        <button className="text-sm font-bold text-primary hover:underline underline-offset-4 hidden sm:block">
          View All Inventory
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {recommendedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <button className="w-full mt-6 py-3.5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors sm:hidden">
        View All Inventory
      </button>
    </div>
  );
};

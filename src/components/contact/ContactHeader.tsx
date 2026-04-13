import React from "react";
import { BUSINESS_NAME } from "@/config/business";

export const ContactHeader = () => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
        Contact {BUSINESS_NAME}
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground">
        We're here to help you find the right car in Hyderabad.
      </p>
    </div>
  );
};

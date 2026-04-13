export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  km: number;
  fuel: "Petrol" | "Diesel" | "CNG" | "Electric";
  transmission: "Manual" | "Automatic";
  price: number;
  emi: number;
  image: string;
}

export const CARS: Car[] = [
  {
    id: "1",
    name: "Mahindra Bolero Pickup 1.7",
    brand: "Mahindra",
    year: 2021,
    km: 45000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 850000,
    emi: 10000,
    image: "/images/Mahindra Bolero Pick-up 1.7.jpg",
  },
  {
    id: "2",
    name: "Maruti Swift ZXi",
    brand: "Maruti",
    year: 2020,
    km: 42000,
    fuel: "Petrol",
    transmission: "Manual",
    price: 620000,
    emi: 7200,
    image: "/images/Maruthi Swift vxi.avif",
  },
  {
    id: "3",
    name: "Honda City VX CVT",
    brand: "Honda",
    year: 2022,
    km: 18000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 1150000,
    emi: 13500,
    image: "/images/Honda City ZX.jpg",
  },
  {
    id: "4",
    name: "Toyota Innova Crysta G",
    brand: "Toyota",
    year: 2019,
    km: 65000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 1650000,
    emi: 19000,
    image: "/images/Toyota Innova Crysta G.jpeg",
  },
  {
    id: "5",
    name: "Tata Ace Gold",
    brand: "Tata",
    year: 2022,
    km: 35000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 550000,
    emi: 6000,
    image: "/images/tata-ace.jpg",
  },
  {
    id: "6",
    name: "Kia Seltos HTX G",
    brand: "Kia",
    year: 2021,
    km: 35000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 1280000,
    emi: 15000,
    image: "/images/Kia Seltos HTX G.avif",
  },
  {
    id: "7",
    name: "Maruti Ertiga VDI",
    brand: "Maruti",
    year: 2020,
    km: 55000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 870000,
    emi: 10200,
    image: "/images/Maruti Ertiga VDI.avif",
  },
  {
    id: "8",
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    year: 2023,
    km: 12000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 1540000,
    emi: 18000,
    image: "/images/Hyundai Creta SX.jpg",
  },
];

export const BRANDS = [
  "All",
  "Hyundai",
  "Maruti",
  "Honda",
  "Toyota",
  "Tata",
  "Kia",
  "Mahindra",
];
export const FUEL_TYPES = ["All", "Petrol", "Diesel", "CNG", "Electric"];
export const TRANSMISSIONS = ["All", "Manual", "Automatic"];
export const YEARS = ["All", "2023", "2022", "2021", "2020", "2019", "2018"];

export function formatPrice(price: number): string {
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)}L`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

export function formatKm(km: number): string {
  return `${km.toLocaleString("en-IN")} km`;
}

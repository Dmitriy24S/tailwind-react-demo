import { chicago, colorado, malibu, miami, seattle, toronto } from "../img";

const popularDestinationsData = [
  {
    city: "Toronto",
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: `${toronto}`,
    imageAlt: "Toronto skyline",
  },
  {
    city: "Malibu",
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: `${malibu}`,
    imageAlt: "Cliff in Malibu",
  },
  {
    city: "Chicago",
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: `${chicago}`,
    imageAlt: "Chicago skyline",
  },
  {
    city: "Seattle",
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: `${seattle}`,
    imageAlt: "Seattle skyline",
  },
  {
    city: "Colorado",
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: `${colorado}`,
    imageAlt: "Lake in Colorado",
  },
  {
    city: "Miami",
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: `${miami}`,
    imageAlt: "Beach in Miami",
  },
];

export default popularDestinationsData;

import React from "react";

import "./ProductList.scss";
import { ICar } from "@/app/utils/types";
import Product from "./ProductCard/Product";

interface IProductList {}

const ProductList: React.FC<IProductList> = () => {
  const cars: ICar[] = [
    {
      car_id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2022,
      price: 25000,
      mileage: 15000,
      color: "Silver",
      body_type: "Sedan",
      fuel_type: "Gasoline",
      transmission: "Automatic",
      engine: {
        displacement: 2.5,
        cylinders: 4,
      },
      description: "A reliable family sedan with great fuel efficiency.",
      image_urls: ["image1.jpg", "image2.jpg"],
      seller_id: 101,
      created_at: new Date("2023-01-15"),
      updated_at: new Date("2023-09-20"),
    },
    {
      car_id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: 22000,
      mileage: 18000,
      color: "Blue",
      body_type: "Sedan",
      fuel_type: "Gasoline",
      transmission: "Automatic",
      engine: {
        displacement: 2.0,
        cylinders: 4,
      },
      description: "Sporty and efficient compact sedan.",
      image_urls: ["image3.jpg", "image4.jpg"],
      seller_id: 102,
      created_at: new Date("2023-02-10"),
      updated_at: new Date("2023-08-25"),
    },
    {
      car_id: 3,
      make: "Ford",
      model: "Escape",
      year: 2020,
      price: 28000,
      mileage: 20000,
      color: "Red",
      body_type: "SUV",
      fuel_type: "Gasoline",
      transmission: "Automatic",
      engine: {
        displacement: 2.5,
        cylinders: 4,
      },
      description: "A versatile and spacious SUV for family adventures.",
      image_urls: ["image5.jpg", "image6.jpg"],
      seller_id: 103,
      created_at: new Date("2023-03-20"),
      updated_at: new Date("2023-07-15"),
    },
    {
      car_id: 4,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 45000,
      mileage: 8000,
      color: "White",
      body_type: "Sedan",
      fuel_type: "Electric",
      transmission: "Automatic",
      engine: {
        displacement: 0.0,
        cylinders: 0,
      },
      description: "An electric car with advanced technology and great range.",
      image_urls: ["image7.jpg", "image8.jpg"],
      seller_id: 104,
      created_at: new Date("2023-04-05"),
      updated_at: new Date("2023-10-01"),
    },
    {
      car_id: 5,
      make: "Jeep",
      model: "Wrangler",
      year: 2019,
      price: 35000,
      mileage: 25000,
      color: "Green",
      body_type: "SUV",
      fuel_type: "Gasoline",
      transmission: "Manual",
      engine: {
        displacement: 3.6,
        cylinders: 6,
      },
      description: "A rugged off-road SUV for outdoor enthusiasts.",
      image_urls: ["image9.jpg", "image10.jpg"],
      seller_id: 105,
      created_at: new Date("2023-05-12"),
      updated_at: new Date("2023-09-10"),
    },
  ];

  return (
    <div className="ProductList">
      {cars.map((car) => (
        <Product product={car} />
      ))}
    </div>
  );
};

export default ProductList;

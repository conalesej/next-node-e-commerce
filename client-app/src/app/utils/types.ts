export interface ICar {
  car_id?: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  body_type: string;
  fuel_type: string;
  transmission: string;
  engine: {
    displacement: number;
    cylinders: number;
  };
  description: string;
  image_urls: string[];
  seller_id: number;
  created_at: Date;
  updated_at: Date;
}

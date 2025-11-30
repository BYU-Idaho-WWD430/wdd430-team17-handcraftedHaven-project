import { Decimal } from "@prisma/client/runtime/library";

export type Users = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  user_type: "admin" | "seller" | "user";
};

export type SellerProfile = {
  firstname: string;
  lastname: string;
  user_id: string;
  image_url: string;
  category: string;
  phone: string;
  description: string;
};

export type Products = {
  product_id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
};

export type ProductWithSeller = {
  product_id: string;
  name: string;
  description: string;
  price: Decimal;
  image: string;
  category: string | null;
  user_id: string;
  seller: {
    firstname: string;
    lastname: string;
    profile: {
      category: string;
    } | null;
  };
};

export type Review = {
  review_id?: string;
  user_id: string;
  firstname?: string;
  lastname?: string;
  product_id: string;
  review?: string;
  rating: number;
  created_at: Date;
};
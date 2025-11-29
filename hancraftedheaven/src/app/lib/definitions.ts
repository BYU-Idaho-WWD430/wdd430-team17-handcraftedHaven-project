// src/app/lib/definitions.ts
export type ProductWithSeller = {
  product_id: string;
  name: string;
  description: string;
  price: number | string;
  image: string;
  category: string;
  user_id: string; // ID del vendedor
  seller_firstname: string;
  seller_lastname: string;
  seller_category: string; // Categoría del vendedor/artesano
};

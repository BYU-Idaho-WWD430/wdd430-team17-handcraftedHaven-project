// src/app/lib/actions.ts
"use server";

// Simula la obtención de estadísticas de un producto desde una base de datos.
// En un proyecto real, aquí harías una consulta a tu base de datos.
export async function fetchProductStats(productId: string) {
  console.log(`Fetching stats for product: ${productId}`);
  // Datos de ejemplo:
  return {
    average_rating: 4.5,
    review_count: 12,
  };
}

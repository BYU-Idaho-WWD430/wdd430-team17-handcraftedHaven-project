// 1. Importar el cliente de Prisma
import prisma from "../lib/prisma";

// 2. Convertir el componente en una función `async`
export default async function Page() {
  // 3. Realizar la consulta a la base de datos dentro del componente
  const products = await prisma.product.findMany({
    // Aquí puedes añadir condiciones, como `orderBy`, `where`, etc.
   /*  orderBy: {
      id: "desc", // Cambiado de 'createdAt' a 'id' para evitar el error.
    }, */
    take: 6, // Por ejemplo, para obtener los 6 productos más recientes
  });

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
      {products.length === 0 ? (
        <p>No hay productos para mostrar en este momento.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 4. Renderizar los datos obtenidos */}
          {products.map((product) => (
            <div key={product.product_id} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="mt-2 font-bold text-lg">${product.price.toString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

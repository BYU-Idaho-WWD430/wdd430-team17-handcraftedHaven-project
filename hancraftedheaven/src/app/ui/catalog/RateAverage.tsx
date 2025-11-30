import prisma from "../lib/prisma";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../ui/catalog/ProductCard";

export default async function Page() {
  const products = await prisma.product.findMany({
    include: {
      seller: {
        select: {
          firstname: true,
          lastname: true,
        },
      },
    },
    take: 6,
  });

  const pedroTorresId = "7baf7cfb-84b9-47ba-b554-a146daefec3e";
  
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section - Mejorada */}
      <section className="grid w-full grid-cols-1 bg-gradient-to-br from-white to-amber-50 lg:grid-cols-2 min-h-[80vh]">
        {/* Lado Izquierdo: Contenido de Texto */}
        <div className="flex items-center justify-center px-4 py-12 lg:px-12 lg:py-24 order-2 lg:order-1">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-amber-600 uppercase bg-amber-100 rounded-full">
                Where Every Piece Tells a Story
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Discover Authentic,{" "}
              <span className="text-amber-600">Artisan-Made</span> Creations
            </h1>
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              Connect with talented makers from around the world and find unique, 
              handcrafted treasures that bring soul and story to your everyday life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-amber-600 rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl hover:-translate-y-1"
              >
                Explore Collection
              </Link>
              <Link
                href="/profiles"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-600 transition-all duration-300 border-2 border-amber-600 rounded-lg hover:bg-amber-50 hover:shadow-md"
              >
                Meet Artisans
              </Link>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Imagen */}
        <div className="relative h-64 lg:h-auto min-h-[400px] order-1 lg:order-2">
          <Image
            alt="Artisan crafting a wooden bowl"
            src="/images/portada2.png"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay decorativo */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:to-amber-50/80" />
        </div>
      </section>

      {/* Featured Products Section - Mejorada */}
      <section className="py-16 bg-white sm:py-24">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Carefully selected handcrafted pieces that showcase the best of traditional craftsmanship and modern design.
            </p>
          </div>
          
          {/* Grid de productos mejorado */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
          
          {/* Botón para ver más productos */}
          <div className="flex justify-center mt-12">
            <Link
              href="/products"
              className="px-8 py-3 font-semibold text-amber-600 transition-all duration-300 border-2 border-amber-600 rounded-lg hover:bg-amber-600 hover:text-white hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Artisan Spotlight Section - Mejorada */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white sm:py-24">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Tarjeta del Artesano */}
            <div className="relative group">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sellers/vendedormadera.png"
                  alt="Pedro Torres - Wood Artisan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
                {/* Gradiente overlay mejorado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Contenido sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm font-semibold tracking-widest text-amber-300 uppercase">
                    Master Woodworker
                  </p>
                  <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
                    Pedro Torres
                  </h3>
                  <p className="mt-3 text-amber-100">
                    From the ancient forests of Liquiñe
                  </p>
                </div>
                
                {/* Botón flotante */}
                <Link
                  href={`/profiles/${pedroTorresId}`}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-amber-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-amber-800 transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Contenido de Texto */}
            <div className="lg:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-amber-600 uppercase bg-amber-100 rounded-full">
                    Artisan Spotlight
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Crafting Legacy from Ancient Woods
                </h2>
                <p className="mb-6 text-lg text-gray-500">
                  Wisdom from generations of craftsmanship
                </p>

                {/* Cita destacada */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-6xl text-amber-200 leading-none select-none">
                    &ldquo;
                  </div>
                  <blockquote className="relative text-xl italic leading-relaxed text-gray-700 border-l-4 border-amber-500 pl-8 py-2 bg-white/50 rounded-r-lg">
                    Wood artisan. Thanks to this craft I have the income to support
                    my home. I live in Panguipulli, in the town of Liquiñe—an area
                    with many ancient trees that I've seen grow from generation to
                    generation.
                  </blockquote>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-amber-200 leading-none text-right select-none">
                    &rdquo;
                  </div>
                </div>

                {/* Información adicional */}
                <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-amber-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Craft Specialization</h4>
                  <p className="text-gray-600">Traditional Woodworking & Carving</p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <span className="mr-4">📍 Liquiñe, Chile</span>
                    <span>👨‍👩‍👧‍👦 3rd Generation Artisan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
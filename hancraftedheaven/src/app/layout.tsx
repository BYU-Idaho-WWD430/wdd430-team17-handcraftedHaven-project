/* import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/styles/globals.css";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Your curated marketplace for authentic, artisan-made creations.",
}; 

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* <Header /> */
       /*  <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
} */
 
import { Inter } from "next/font/google";
import '@/app/ui/global.css';
/* import { inter } from '@/app/ui/fonts';  */
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <body suppressHydrationWarning={true}>{children}</body> */}
      {<body className={`${inter.className}  antialiased`} suppressHydrationWarning={true}>{children}</body>}
    </html>
  );
}
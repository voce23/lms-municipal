import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O la fuente que uses


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMS Municipal",
  description: "Plataforma de aprendizaje municipal",
};

export default async function RootLayout({
  children,
  // En Next.js 16, layout recibe children como prop
}: {
  children: React.ReactNode;
}) {
  
  // PRUEBA DE CONEXIÓN:
  // Intentamos conectar al cargar la aplicación.
  // Como esto es un Server Component, el console.log saldrá en tu TERMINAL, no en el navegador.
  // await connectDB(); 

  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Aquí irán tus componentes Navbar y Sidebar más adelante */}
        {children}
      </body>
    </html>
  );
}
import Hero from "@/components/Hero";       // Tu Hero con texto Municipal
import Features from "@/components/Features"; // La sección "Pon tu aprendizaje en práctica"
import Courses from "@/components/Courses";   // Tu listado de cursos
import Support from "@/components/Support";   // La nueva sección de soporte (Video 123)

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Encabezado Principal */}
      <Hero />

      {/* 2. Características (Video 122 - Recuperado) */}
      <Features />

      {/* 3. Listado de Cursos */}
      <Courses />

      {/* 4. Nueva Sección de Soporte (Video 123) */}
      <Support />
      
    </main>
  );
}
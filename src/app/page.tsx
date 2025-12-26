import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* -----------------------------------------------------------------------
        SECCIÓN 1: HERO (Encabezado Principal)
        -----------------------------------------------------------------------
      */}
      <section className="w-full bg-slate-900 py-20 text-white relative overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900/20 pointer-events-none" />

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Texto del Hero */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Plataforma de Aprendizaje <span className="text-blue-400">Municipal</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Capacitación tecnológica de alto nivel al alcance de todos.
              Accede a cursos actualizados y mejora tus habilidades profesionales hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                Explorar Cursos
              </button>
              <button className="px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-800 transition-colors text-slate-300">
                Saber Más
              </button>
            </div>
          </div>

          {/* Imagen del Hero */}
          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800">
               <Image
                  src="/encabezado-1.jpg"
                  alt="Tecnología y conexión global"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          </div>

        </div>
      </section>

      {/* -----------------------------------------------------------------------
        SECCIÓN 2: CARACTERÍSTICAS (Video 122)
        -----------------------------------------------------------------------
      */}
      <section className="w-full bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Imagen de la Característica */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
              <div className="relative w-full max-w-lg aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                 <Image
                  src="/feature-1.jpg"
                  alt="Estudiante programando"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Contenido de Texto */}
            <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase">
                Lecciones Paso a Paso
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Pon tu aprendizaje en <span className="text-blue-600">práctica real</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                No solo teoría. En nuestro LMS Municipal construirás proyectos reales
                utilizando las tecnologías más demandadas del mercado actual.
                Domina el stack completo de desarrollo web.
              </p>

              {/* Lista de Tecnologías */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                {[
                  "React 19", "Next.js 16", "TypeScript",
                  "Python", "Django", "Laravel 12",
                  "WordPress", "Tailwind CSS", "MongoDB"
                ].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2 bg-white p-2 rounded shadow-sm border border-slate-200 justify-center md:justify-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                    <span className="text-sm font-medium text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Botón ÚNICO */}
              <div className="pt-6">
                 <Link 
                   href="/courses" 
                   className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                 >
                   Ver Malla Curricular
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
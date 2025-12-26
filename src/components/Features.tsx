import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Imagen de la Característica - AHORA USA image.jpg */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-lg aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
               <Image
                src="/image.jpg"
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
  );
};

export default Features;
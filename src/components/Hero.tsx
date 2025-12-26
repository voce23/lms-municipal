import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
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

        {/* Imagen del Hero - AHORA USA image.jpg */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800">
             <Image
               src="/image.jpg"
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
  );
};

export default Hero;
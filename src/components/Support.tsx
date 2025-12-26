import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Support = () => {
  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Columna Izquierda: Texto y Botones */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                ¿Necesitas ayuda? <br />
                <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Estamos aquí para apoyarte
                </span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Si tienes dudas sobre el uso de la plataforma LMS Municipal o necesitas asistencia técnica, 
              nuestro equipo de soporte está disponible para resolver tus inquietudes y asegurar 
              tu aprendizaje continuo.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                Contáctanos
              </Link>

              <Link 
                href="/support" 
                className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-slate-900 shadow-sm transition-all duration-300"
              >
                Llamar a Soporte
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Imagen - AHORA USA image.jpg */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              <Image
                src="/image.jpg" 
                alt="Equipo de Soporte Municipal"
                fill
                className="object-cover rounded-2xl shadow-lg" // Agregué bordes redondeados y sombra
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Support;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Datos de prueba: Todos usan image.jpg por ahora
const coursesData = [
  {
    id: 1,
    title: "Atención al Ciudadano",
    category: "Gestión Pública",
    image: "/image.jpg", 
    price: "Gratuito",
  },
  {
    id: 2,
    title: "Excel Intermedio para Funcionarios",
    category: "Ofimática",
    image: "/image.jpg",
    price: "Gratuito",
  },
  {
    id: 3,
    title: "Seguridad y Salud en el Trabajo",
    category: "Recursos Humanos",
    image: "/image.jpg",
    price: "Gratuito",
  },
  {
    id: 4,
    title: "Introducción a la Administración Pública",
    category: "Administración",
    image: "/image.jpg",
    price: "Gratuito",
  },
];

const Courses = () => {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Cursos Disponibles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explora nuestra oferta académica diseñada para fortalecer las competencias de los servidores públicos y ciudadanos.
          </p>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 overflow-hidden group"
            >
              {/* Imagen del Curso ACTIVADA */}
              <div className="relative h-48 w-full bg-slate-200">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> 
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-5 space-y-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
                
                <h3 className="font-bold text-slate-900 line-clamp-2 min-h-[3rem]">
                  {course.title}
                </h3>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-slate-600 font-medium text-sm">
                    {course.price}
                  </span>
                  <Link 
                    href={`/course/${course.id}`}
                    className="text-blue-700 text-sm font-semibold hover:text-blue-900"
                  >
                    Ver detalles &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Todos */}
        <div className="mt-12 text-center">
          <Link 
            href="/search" 
            className="inline-block px-8 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
          >
            Ver catálogo completo
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Courses;
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-slate-900 py-20 lg:py-32 overflow-hidden">
      {/* Elemento decorativo de fondo (opcional, para dar profundidad) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge o Etiqueta superior */}
        <span className="inline-block py-1 px-3 rounded-full bg-blue-800/30 border border-blue-700 text-blue-300 text-sm font-semibold mb-6">
          Plataforma Oficial de Capacitación
        </span>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          LMS <span className="text-blue-500">Municipal</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
          Bienvenido al portal de aprendizaje para funcionarios. 
          Desarrolla tus competencias, accede a cursos actualizados y mejora 
          tu servicio a la comunidad.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/courses" 
            className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-900/20 text-center"
          >
            Ver Cursos Disponibles
          </Link>
          
          <Link 
            href="/about" 
            className="px-8 py-4 rounded-lg bg-slate-800 text-slate-200 font-semibold hover:bg-slate-700 transition-all border border-slate-700 text-center"
          >
            Más Información
          </Link>
        </div>

      </div>
    </section>
  );
}
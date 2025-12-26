import Image from "next/image";

export default function FeatureHighlight() {
  return (
    <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          
          {/* COLUMNA IZQUIERDA: Texto */}
          <div className="flex flex-col items-start space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h3 className="text-blue-700 font-semibold text-lg tracking-wide uppercase">
                Capacitación Municipal
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Aprende con la <span className="text-blue-600">Práctica</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Nuestra metodología se enfoca en casos reales de la gestión pública. 
              Accede a herramientas y conocimientos que podrás aplicar inmediatamente 
              en tu labor diaria para mejorar el servicio al ciudadano.
            </p>

            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300">
              Ver catálogo de cursos
            </button>
          </div>

          {/* COLUMNA DERECHA: Imagen */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              {/* CAMBIO: Usamos una imagen remota de Unsplash para asegurar que se vea */}
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" 
                alt="Funcionarios trabajando en equipo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
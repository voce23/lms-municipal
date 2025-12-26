import Link from "next/link";
import Image from "next/image";

// Definimos qué datos espera recibir esta tarjeta
interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
  price: number;
}

const CourseCard = ({ id, title, category, imageUrl, price }: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-lg transition overflow-hidden border border-slate-200 rounded-lg h-full flex flex-col bg-white">
        
        {/* 1. Imagen del Curso (O un color base si no hay imagen) */}
        <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
          {imageUrl ? (
            <Image
              fill
              className="object-cover"
              alt={title}
              src={imageUrl}
            />
          ) : (
            // Fallback: Si no hay imagen, mostramos un recuadro azul institucional
            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500">
              <span className="text-sm">Sin imagen</span>
            </div>
          )}
        </div>

        {/* 2. Contenido de la Tarjeta */}
        <div className="flex flex-col p-4 gap-y-2 h-full">
          {/* Categoría pequeña */}
          <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md w-fit">
            {category}
          </div>
          
          {/* Título */}
          <h3 className="text-lg font-bold text-slate-800 line-clamp-2 group-hover:text-blue-700 transition">
            {title}
          </h3>

          {/* Pie de tarjeta: Precio o "Gratis" */}
          <div className="mt-auto pt-2 flex items-center justify-between text-sm text-slate-500">
             {price === 0 ? (
               <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">
                 GRATUITO
               </span>
             ) : (
               <p className="font-bold text-slate-700">
                 Bs. {price}
               </p>
             )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
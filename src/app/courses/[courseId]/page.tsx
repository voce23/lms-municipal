import { getCourseById } from "@/lib/actions/course.actions";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  // Desempaquetamos los parámetros (Next.js 16)
  const resolvedParams = await params;
  const course = await getCourseById(resolvedParams.courseId);

  // Si el ID no existe o se borró, mostrar error 404
  if (!course) return notFound();

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Botón Volver */}
      <Link 
        href="/" 
        className="text-sm text-slate-500 hover:text-blue-600 mb-6 inline-block"
      >
        ← Volver a los cursos
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* === COLUMNA IZQUIERDA (Info + Temario + Reseñas) === */}
        <div className="md:col-span-2 space-y-8">
          
          {/* 1. Encabezado del Curso */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {course.category?.name || "General"}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              {course.title}
            </h1>
            <p className="text-slate-600 mt-4 text-lg leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* 2. Instructor */}
          <div className="border-y border-slate-200 py-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-xl overflow-hidden border border-slate-300">
               {course.instructor?.picture ? (
                 <img src={course.instructor.picture} alt="Instructor" />
               ) : (
                 "👨‍🏫"
               )}
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold">Instructor:</p>
              <p className="font-semibold text-slate-800">{course.instructor?.name}</p>
            </div>
          </div>

          {/* 3. Temario del Curso (Video 118) */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Temario del Curso
            </h3>
            
            {course.lessons && course.lessons.length > 0 ? (
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                {course.lessons.map((lesson: any) => (
                  <div 
                    key={lesson._id} 
                    className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      {/* Ícono dinámico: Play (Gratis) o Candado (Pago) */}
                      <div className={`p-2 rounded-full ${lesson.isFree ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
                        {lesson.isFree ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        )}
                      </div>
                      <span className="text-slate-700 font-medium text-sm md:text-base">
                        {lesson.title}
                      </span>
                    </div>

                    {/* Etiqueta Vista Previa */}
                    {lesson.isFree && (
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        Vista Previa
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 italic p-4 bg-slate-50 rounded border border-slate-200">
                Próximamente se publicarán las lecciones.
              </div>
            )}
          </div>

          {/* 4. Reseñas / Testimonios (Video 117) */}
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Opiniones de Estudiantes
            </h3>
            
            {course.testimonials && course.testimonials.length > 0 ? (
              <div className="grid gap-4">
                {course.testimonials.map((review: any) => (
                  <div key={review._id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      {/* Avatar pequeño del estudiante */}
                      <div className="h-6 w-6 rounded-full bg-slate-300 overflow-hidden flex items-center justify-center text-xs">
                          {review.userId?.picture ? (
                              <img src={review.userId.picture} alt="User" />
                          ) : (
                              "U"
                          )}
                      </div>
                      <div className="font-bold text-slate-700 text-sm">
                        {review.userId?.name || "Estudiante"}
                      </div>
                      {/* Estrellitas */}
                      <div className="flex text-yellow-500 text-xs">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm italic">"{review.content}"</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm">Aún no hay reseñas para este curso.</p>
            )}
          </div>

        </div>

        {/* === COLUMNA DERECHA (Tarjeta de Precio - Sticky) === */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-6">
             <div className="mb-6">
               <p className="text-slate-500 text-sm mb-1">Costo de inscripción:</p>
               <div className="text-3xl font-bold text-slate-900">
                 {course.price === 0 ? "Gratis" : `Bs. ${course.price}`}
               </div>
             </div>

             <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition shadow-md">
               Inscribirse al Curso
             </button>
             
             <p className="text-xs text-center text-slate-400 mt-4">
               Acceso seguro mediante LMS Municipal
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
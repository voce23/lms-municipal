import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db/connect";
import User from "@/lib/db/models/user.model";
import Category from "@/lib/db/models/category.model";
import Course from "@/lib/db/models/course.model";
import Lesson from "@/lib/db/models/lesson.model";
import Testimonial from "@/lib/db/models/testimonial.model"; // <--- Importamos

export async function GET() {
  try {
    await connectToDB();

    // 1. Limpieza total
    await Testimonial.deleteMany({});
    await Lesson.deleteMany({});
    await Course.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});

    // 2. Crear Instructor y Estudiantes
    const instructor = await User.create({
      clerkId: "admin_muni",
      email: "capacitacion@municipio.gob",
      name: "Lic. Juan Pérez",
      role: "instructor",
      picture: "https://ui.shadcn.com/avatars/01.png"
    });

    const student1 = await User.create({
      clerkId: "student_01",
      email: "ciudadano1@mail.com",
      name: "María Gonzales",
      role: "student",
      picture: "https://ui.shadcn.com/avatars/02.png"
    });

    // 3. Crear Categorías
    const catAdmin = await Category.create({ name: "Administración Pública" });
    const catTech = await Category.create({ name: "Tecnología e Innovación" });
    const catUrban = await Category.create({ name: "Urbanismo y Obras" });

    // 4. Datos de Cursos
    const cursosData = [
      {
        title: "Inducción al Servidor Público",
        category: catAdmin._id,
        description: "Curso obligatorio sobre ética y funciones.",
        lessons: [{ title: "Bienvenida", isFree: true }, { title: "Ética", isFree: false }]
      },
      {
        title: "Microsoft Excel Intermedio",
        category: catTech._id,
        description: "Tablas dinámicas y reportes.",
        lessons: [{ title: "Conceptos", isFree: true }, { title: "Tablas", isFree: false }]
      },
      {
        title: "Seguridad Vial y Tránsito",
        category: catUrban._id,
        description: "Protocolos para inspectores.",
        lessons: [{ title: "Normativa", isFree: true }]
      },
      {
        title: "Atención al Ciudadano",
        category: catAdmin._id,
        description: "Calidad y calidez en ventanilla.",
        lessons: [{ title: "Protocolos", isFree: true }]
      },
      {
        title: "Ley de Contrataciones",
        category: catAdmin._id,
        description: "Normativa de compras estatales.",
        lessons: [{ title: "Intro Ley 1178", isFree: true }]
      },
      {
        title: "Gestión Documental",
        category: catTech._id,
        description: "Uso del sistema de trámites.",
        lessons: [{ title: "Digitalización", isFree: true }]
      }
    ];

    // 5. Crear Cursos, Lecciones y RESEÑAS
    for (const data of cursosData) {
      const newCourse = await Course.create({
        title: data.title,
        description: data.description,
        category: data.category,
        instructor: instructor._id,
        isPublished: true,
        price: 0
      });

      // Crear Lecciones
      const lessonIds = [];
      let pos = 1;
      for (const l of data.lessons) {
        const lesson = await Lesson.create({
          title: l.title,
          slug: `clase-${pos}`,
          courseId: newCourse._id,
          isFree: l.isFree,
          position: pos++
        });
        lessonIds.push(lesson._id);
      }

      // Crear 1 Reseña de prueba por curso
      const review = await Testimonial.create({
        content: "Excelente curso, muy claro para los funcionarios.",
        rating: 5,
        courseId: newCourse._id,
        userId: student1._id
      });

      newCourse.lessons = lessonIds;
      newCourse.testimonials = [review._id]; // Conectamos la reseña
      await newCourse.save();
    }

    return NextResponse.json({ message: "✅ DB Restaurada: Cursos, Lecciones y Testimonios." });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
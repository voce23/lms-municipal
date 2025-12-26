"use server";

import { connectToDB } from "@/lib/db/connect";
import Course from "@/lib/db/models/course.model";
import Category from "@/lib/db/models/category.model";
import User from "@/lib/db/models/user.model";
import Lesson from "@/lib/db/models/lesson.model";
import Testimonial from "@/lib/db/models/testimonial.model"; // <--- ESTE FALTABA

// 1. Obtener todos los cursos (Para el Home)
export async function getCourses() {
  try {
    await connectToDB();

    const courses = await Course.find({})
      .populate({ path: "category", model: Category })
      .populate({ path: "instructor", model: User })
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(courses));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// 2. Obtener UN curso con sus Lecciones y Testimonios (Para el Detalle)
export async function getCourseById(courseId: string) {
  try {
    await connectToDB();

    const course = await Course.findById(courseId)
      // A. Traer nombre de la categoría
      .populate({ path: "category", model: Category, select: "name" })
      
      // B. Traer datos del instructor
      .populate({ path: "instructor", model: User, select: "name picture bio" })
      
      // C. Traer lecciones (Video 118) - Ordenadas por posición 1, 2, 3...
      .populate({ 
        path: "lessons", 
        model: Lesson, 
        options: { sort: { position: 1 } } 
      })

      // D. Traer Testimonios (Video 117) - Y dentro de ellos, quién escribió (User)
      .populate({ 
        path: "testimonials", 
        model: Testimonial,
        populate: { path: "userId", model: User, select: "name picture" } 
      })
      
      .lean();

    if (!course) return null;

    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
    return null;
  }
}
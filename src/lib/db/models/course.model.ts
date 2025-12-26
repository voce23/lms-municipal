import { Schema, model, models, Document } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description?: string;
  instructor: Schema.Types.ObjectId;
  category: Schema.Types.ObjectId;
  lessons: Schema.Types.ObjectId[];
  testimonials: Schema.Types.ObjectId[]; // <--- ¡ESTA ES LA LÍNEA CLAVE!
  price: number;
  isPublished: boolean;
  createdAt: Date;
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  
  // Relación con Lecciones
  lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  
  // Relación con Testimonios (¡Sin esto da el error StrictPopulateError!)
  testimonials: [{ type: Schema.Types.ObjectId, ref: "Testimonial" }], 

  price: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Evita recompilar el modelo si ya existe
const Course = models.Course || model<ICourse>("Course", CourseSchema);

export default Course;
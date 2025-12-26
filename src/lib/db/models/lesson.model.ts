import { Schema, model, models, Document } from "mongoose";

export interface ILesson extends Document {
  title: string;
  slug: string; // Para la URL amigable (ej: leccion-1-introduccion)
  content?: string; // Descripción texto de la clase
  videoUrl?: string; // Link del video (YouTube/Mux)
  duration?: number; // Duración en segundos
  isFree: boolean; // ¿Es una clase de vista previa gratuita?
  position: number; // Para ordenar (Clase 1, Clase 2...)
  courseId: Schema.Types.ObjectId; // A qué curso pertenece
}

const LessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  content: { type: String },
  videoUrl: { type: String },
  duration: { type: Number, default: 0 },
  isFree: { type: Boolean, default: false },
  position: { type: Number },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true }
});

const Lesson = models.Lesson || model<ILesson>("Lesson", LessonSchema);

export default Lesson;
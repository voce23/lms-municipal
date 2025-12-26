import { Schema, model, models, Document } from "mongoose";

export interface ITestimonial extends Document {
  content: string;
  rating: number; // 1 a 5 estrellas
  courseId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>({
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now }
});

const Testimonial = models.Testimonial || model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
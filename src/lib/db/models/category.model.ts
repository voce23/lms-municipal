import { Schema, model, models, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description?: string;
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true }, // Ej: "Gestión Pública"
  description: { type: String },
});

const Category = models.Category || model<ICategory>("Category", CategorySchema);

export default Category;
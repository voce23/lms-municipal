import { Schema, model, models, Document } from "mongoose";

// 1. Definimos la interfaz TypeScript (Tipado estricto)
export interface IUser extends Document {
  clerkId: string; // Importante para Auth (Clerk) más adelante
  email: string;
  name: string;
  picture: string;
  role: "admin" | "instructor" | "student"; // Roles municipales
  bio?: string;
  joinedAt: Date;
}

// 2. Definimos el Schema de Mongoose
const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String },
  role: { type: String, default: "student" },
  bio: { type: String },
  joinedAt: { type: Date, default: Date.now },
});

// 3. Exportamos con el "Truco Next.js" para evitar recompilación de modelos
const User = models.User || model<IUser>("User", UserSchema);

export default User;
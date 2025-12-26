// Definición preliminar de la estructura de datos para el LMS Municipal

export interface Category {
  _id: string;
  name: string;      // Ej: "Gestión Pública"
  description?: string;
}

export interface Course {
  _id: string;
  title: string;     // Ej: "Seguridad Ciudadana 101"
  description: string;
  thumbnail: string; // URL de la imagen
  price: number;     // 0 para cursos gratuitos municipales
  active: boolean;   // Si está visible o no
  categoryId: string; // Relación con Category
  modules: string[];  // Array de IDs de módulos
  attachments?: string[];
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "student" | "instructor"; // Importante para el LMS
  enrolledCourses: string[]; // Historial de cursos
}
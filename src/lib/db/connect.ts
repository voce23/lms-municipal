import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Definimos una interfaz para el caché global
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extendemos el objeto global de NodeJS para añadir nuestra propiedad mongoose
declare global {
  var mongoose: MongooseCache | undefined;
}

// Verificación de seguridad
if (!MONGODB_URI) {
  throw new Error(
    "⚠️ Por favor define MONGODB_URI en tu archivo .env.local"
  );
}

/**
 * Global es utilizado aquí para mantener una conexión en caché a través de
 * recargas en caliente (hot reloads) en desarrollo. Esto previene que se
 * creen conexiones infinitas.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDB = async () => {
  if (cached!.conn) {
    console.log("🟢 Usando conexión existente a MongoDB");
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "lms-municipal" // O el nombre que prefieras para tu DB local
    };

    console.log("🟡 Creando nueva conexión a MongoDB...");
    
    cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      console.log("✅ Nueva conexión establecida");
      return mongoose;
    });
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
};
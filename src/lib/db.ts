import mongoose from "mongoose";

// Definimos la URL de la base de datos
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "❌ Error: Por favor define la variable MONGODB_URI en tu archivo .env.local"
  );
}

// ESTO ES ESPECÍFICO PARA NEXT.JS (Evita múltiples conexiones en desarrollo)
// Extendemos el objeto global de NodeJS para añadir nuestra caché de Mongoose
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongoose: MongooseCache;
}

// Si ya existe una conexión en memoria, la usamos. Si no, la inicializamos.
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  // 1. Si ya estamos conectados, devolver la conexión existente.
  if (cached.conn) {
    console.log("🚀 Usando conexión existente a MongoDB");
    return cached.conn;
  }

  // 2. Si no hay promesa de conexión, crear una nueva.
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "lms-municipal-db", // Forzamos el nombre de la BD aquí para seguridad
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ Nueva conexión a MongoDB establecida");
      return mongoose.connection;
    });
  }

  // 3. Esperar a que la promesa se resuelva y guardar la conexión
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};
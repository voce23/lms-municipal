// src/lib/format-price.ts

/**
 * Formatea un número como moneda.
 * Por defecto usa USD, pero puedes cambiarlo a 'BOB' (Bolivianos) si prefieres.
 */
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-BO", { // Cambié a formato regional Bolivia/Latam
    style: "currency",
    currency: "USD", // O usa 'BOB' para Bolivianos
  }).format(price);
};
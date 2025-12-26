// Este archivo contiene componentes visuales pequeños para limpiar la estructura de carpetas

export const Support = () => {
  return (
    <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 bg-slate-100 p-2 rounded-md">
      {/* Icono de ejemplo (puedes usar Lucide React) */}
      <span>🤝</span>
      <span>Soporte Municipal 24/7</span>
    </div>
  );
};

export const Element = () => {
  // Elemento decorativo sutil
  return (
    <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
  );
};
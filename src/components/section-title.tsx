import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ title, children, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-8 space-y-4", className)}>
      <h2 className="text-2xl font-bold text-slate-800 md:text-3xl uppercase tracking-tight">
        {title}
      </h2>
      {children && (
        <div className="text-slate-600">
          {children}
        </div>
      )}
    </div>
  );
};
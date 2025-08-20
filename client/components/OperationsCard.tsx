import { ReactNode } from "react";

interface OperationsCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  iconColor: string;
}

export function OperationsCard({ icon, title, subtitle, iconColor }: OperationsCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  bgColor: string;
  iconBg: string;
}

export function StatCard({ title, value, subtitle, icon, bgColor, iconBg }: StatCardProps) {
  return (
    <div className={cn("rounded-xl p-3 relative overflow-hidden", bgColor)}>
      <div className="flex items-start justify-between">
        <div className="text-white">
          <p className="text-sm font-medium opacity-90">{title}</p>
          <p className="text-xl font-bold mt-1">{value}</p>
          <p className="text-sm opacity-75 mt-1">{subtitle}</p>
        </div>
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", iconBg)}>
          {icon}
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Radio,
  Store,
  Package,
  ShoppingCart,
  BarChart3,
  Briefcase,
  Layers,
  Settings,
  Bell,
  HelpCircle,
  User,
} from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Radio, label: "Live", href: "/live" },
  { icon: Store, label: "Shop", href: "/shop" },
  { icon: Package, label: "Commodity", href: "/commodity" },
  { icon: ShoppingCart, label: "Order", href: "/order" },
  { icon: BarChart3, label: "Data", href: "/data" },
  { icon: Briefcase, label: "Assets", href: "/assets" },
  { icon: Layers, label: "Application", href: "/application" },
  { icon: Settings, label: "Set up", href: "/setup" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-48 flex-col bg-gray-50">
      {/* Logo */}
      <div className="flex items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Aoki's shop</h1>
            <p className="text-sm text-pink-500">Basic</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-pink-50 text-pink-600 border border-pink-200"
                  : "text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

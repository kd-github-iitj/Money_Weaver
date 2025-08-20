import { Bell, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 ">
      <div className="flex-1" />

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Notice</span>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-gray-900"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>
        <span className="text-sm text-gray-600">Help center</span>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-gray-900"
        >
          <User className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}

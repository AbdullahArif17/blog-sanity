"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the component renders only after the theme is mounted
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center p-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-500 transition-transform rotate-0 scale-100" />
      ) : (
        <Moon className="w-6 h-6 text-blue-500 transition-transform rotate-0 scale-100" />
      )}
    </button>
  );
}

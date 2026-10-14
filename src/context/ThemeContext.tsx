/* oxlint-disable react/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "warm" | "lavender";

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "dejashini_portfolio_theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "warm";
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "warm" || saved === "lavender") return saved;
    // Default to warm editorial
    return "warm";
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove("theme-warm", "theme-lavender", "dark");
    body.classList.remove("theme-warm", "theme-lavender", "dark");

    if (theme === "lavender") {
      root.classList.add("theme-lavender", "dark");
      body.classList.add("theme-lavender", "dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.add("theme-warm");
      body.classList.add("theme-warm");
      root.style.colorScheme = "light";
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "warm" ? "lavender" : "warm"));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

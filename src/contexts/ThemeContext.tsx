/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, ReactNode, useState } from "react";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext: any = createContext<ThemeContextType | undefined>(
  undefined
);
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const htmlElement = document.documentElement;
    htmlElement.setAttribute("data-theme", newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

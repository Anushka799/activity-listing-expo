// theme.js
import React, { createContext, useState, useEffect } from "react";
import { Appearance, Platform } from "react-native";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // default to system preference on first load
  const sys = Appearance.getColorScheme ? Appearance.getColorScheme() : "light";
  const [theme, setTheme] = useState(sys || "light");

  useEffect(() => {
    // If running on web, set data-theme on document.documentElement so any CSS can respond
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.setAttribute("data-theme", theme);
      // optionally set CSS variables usable by any leftover CSS
      if (theme === "dark") {
        root.style.setProperty("--bg", "#0b1220");
        root.style.setProperty("--card", "#0f1724");
        root.style.setProperty("--text", "#e6eef8");
        root.style.setProperty("--muted", "#94a3b8");
        root.style.setProperty("--accent", "#60a5fa");
      } else {
        root.style.setProperty("--bg", "#ffffff");
        root.style.setProperty("--card", "#f7f7fb");
        root.style.setProperty("--text", "#111827");
        root.style.setProperty("--muted", "#6b7280");
        root.style.setProperty("--accent", "#2563eb");
      }
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // color tokens for React Native styles
  const colors = theme === "light"
    ? {
        background: "#ffffff",
        card: "#f7f7fb",
        text: "#111827",
        muted: "#6b7280",
        accent: "#2563eb",
        badgeBg: "rgba(37,99,235,0.08)",
        primaryButtonBg: "#2563eb",
        primaryButtonText: "#ffffff",
      }
    : {
        background: "#0b1220",
        card: "#0f1724",
        text: "#e6eef8",
        muted: "#94a3b8",
        accent: "#60a5fa",
        badgeBg: "#16202a",
        primaryButtonBg: "#60a5fa",
        primaryButtonText: "#0b1220",
      };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

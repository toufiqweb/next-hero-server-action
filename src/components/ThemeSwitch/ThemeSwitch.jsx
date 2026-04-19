"use client";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitch;

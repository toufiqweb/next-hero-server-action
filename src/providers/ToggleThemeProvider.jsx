import { ThemeProvider } from "next-themes";
import React from "react";

const ToggleThemeProvider = ({children}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ToggleThemeProvider;

import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: false,
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  // Checks local storage for theme state, will persist dark/light mode upon browser refresh
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");
  }

  const [theme, setTheme] = useState(() =>
    JSON.parse(localStorage.getItem("darkMode"))
  );

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("darkMode", JSON.stringify(!theme));
  };

  const themeStyles = {
    light: {
      bg: "hsl(0, 0%, 98%)",
      text: "hsl(200, 15%, 8%)",
      elements: "hsl(0, 0%, 100%)",
      shadow: "0 1px 3px 3px rgba(0, 0, 0, 0.05)",
      inputColor: "hsl(0, 0%, 52%)",
    },
    dark: {
      bg: "hsl(207, 26%, 17%)",
      text: "hsl(0, 0%, 100%)",
      elements: "hsl(209, 23%, 22%)",
      shadow: "0 1px 3px 3px rgba(0, 0, 0, 0.05)",
    },
  };

  const value = { theme, toggleTheme, ...themeStyles };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

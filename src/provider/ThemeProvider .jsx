import React, { createContext, useState, useEffect, useContext } from "react";


const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

 
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook 
export const useTheme = () => {
  return useContext(ThemeContext);
};


export default ThemeProvider;

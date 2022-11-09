import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Button.scss";

const Button = ({ children }) => {
  const { theme, light, dark } = useContext(ThemeContext);
  const themeState = theme ? dark : light;
  return (
    <button
      style={{
        backgroundColor: themeState.elements,
        color: themeState.text,
        boxShadow: themeState.shadow,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

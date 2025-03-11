import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface StyledButtonProps extends ButtonProps {
  text: string;
  customStyles?: object;
}

const defaultStyles = {
  width: "220px",
  height: "55px",
  background: "linear-gradient(135deg, #4CAF50, #2E7D32)", // Gradiente sutil
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "none",
  letterSpacing: "1.2px",
  border: "none",
  borderRadius: "12px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    background: "linear-gradient(135deg, #388E3C, #1B5E20)",
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.35)",
    transform: "translateY(-2px)",
  },

  "&:active": {
    transform: "scale(0.96)",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
  },

  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.2)",
    transition: "left 0.3s ease-in-out",
  },

  "&:hover::before": {
    left: "100%",
  },
};

const ButtonPerson: React.FC<StyledButtonProps> = ({ text, customStyles = {}, ...props }) => {
  return (
    <Button sx={{ ...defaultStyles, ...customStyles }} {...props}>
      {text}
    </Button>
  );
};

export default ButtonPerson;

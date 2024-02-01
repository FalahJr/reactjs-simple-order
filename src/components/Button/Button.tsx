import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color, disabled }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color,
    padding: "10px",
    marginBottom: "15px",
    border: "none",
    color: "white",
    width: "100%",
    borderRadius: "10px",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

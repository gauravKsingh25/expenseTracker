import React from "react";
import styled from "styled-components";

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad || "0.5rem 1rem", // Set a default padding
        borderRadius: bRad || "5px",
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  max-width: 200px; // Example of a size constraint
  height: auto; // Maintain aspect ratio based on content
`;

export default Button;

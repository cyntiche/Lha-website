import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ButtonsProps {
  label: ReactNode;
}

const SecondaryButton: React.FC<ButtonsProps> = ({ label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "15px 36px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "50px",
        background: "var(--bachground, #F5F5F5)",
      }}
    >
      <Typography
        sx={{
          color: "var(--Titre-active, #333)",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "18px",
          cursor: "pointer",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default SecondaryButton;

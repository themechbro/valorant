import * as React from "react";
import { Link } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/joy/Button";
import Box from "@mui/material/Box";

export default function Other() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginLeft: 10,
      }}
    >
      <SearchIcon />
      <LanguageIcon />
      <Button
        size="md"
        sx={{
          background:
            "linear-gradient(135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)",
          color: "#000",
        }}
      >
        PLAY NOW
      </Button>
    </Box>
  );
}

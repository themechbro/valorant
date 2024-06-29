import * as React from "react";
import { Typography } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "./logo";
import Navlist from "./navlist";
import Other from "./other";
import Box from "@mui/material/Box";

export default function Appbar() {
  return (
    <AppBar sx={{ backgroundColor: "#111" }}>
      <nav className="navbar navbar-expand-lg ">
        <Toolbar>
          <Logo />
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Navlist />
        </Box>
      </nav>
    </AppBar>
  );
}

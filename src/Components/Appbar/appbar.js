import * as React from "react";
import { Typography } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "./logo";
import Navlist from "./navlist";
import Other from "./other";
import Box from "@mui/material/Box";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Appbar() {
  useGSAP(() => {
    gsap.from(".appbar", {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 0.5,
      ease: "sine.in",
    });
  });
  return (
    <AppBar sx={{ backgroundColor: "#111" }} className="appbar">
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

import * as React from "react";
import { Typography } from "@mui/joy";
import ValorantCard from "./card";
import "./latest.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Latest() {
  useGSAP(() => {
    gsap.from(".card-deck-controller", {
      scrollTrigger: {
        trigger: ".latest",
      },
      opacity: 0,
      x: -100,
      duration: 0.7,
      delay: 0.5,
      ease: "sine.in",
    });
  });
  return (
    <section className="latest  ">
      <div className="container py-3">
        <Typography
          level="h1"
          sx={{
            mb: 2,
            textTransform: "uppercase",
            paddingTop: 5,
            paddingBottom: 5,
            fontFamily: "Roboto Condensed, sans-serif",
          }}
          className="p-0 p-md-5"
        >
          the latest
        </Typography>
        <div className="card-deck-controller p-5 ">
          <ValorantCard />
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import "./diff.css";
import { Typography, Button } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Diff() {
  useGSAP(() => {
    gsap.from(".diff-card", {
      scrollTrigger: {
        trigger: ".you-diff",
      },
      opacity: 0,
      duration: 0.5,
      delay: 1,
      ease: "sine.in",
    });
  });

  return (
    <section className="you-diff ">
      <div className="container diff-card py-5 pt-5 d-flex flex-row align-items-center">
        <Card
          variant="plain"
          sx={{
            backgroundColor: "transparent",
            width: 400,
            height: 500,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              level="h1"
              sx={{ fontFamily: "Roboto Condensed, san serif", color: "#FFF" }}
            >
              YOU DIFF
            </Typography>
            <Typography
              level="title-lg"
              sx={{ fontFamily: "Roboto Condensed, san serif", color: "#FFF" }}
            >
              EPISODE_08 // ACT III / YR 4
            </Typography>
            <Button
              size="lg"
              sx={{
                backgroundColor: "rgb(255, 70, 85)",
                color: "#FFF",
                transition: "color 0.3s ease 0s, background-color 0.3s ease 0s",
                ":hover": {
                  backgroundColor: "rgb(236, 232, 225)",
                  color: "rgb(15, 25, 35)",
                },
              }}
            >
              WATCH NOW
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

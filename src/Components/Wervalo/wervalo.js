import * as React from "react";
import "./wervalo.css";
import { Typography, Button } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WerValo() {
  useGSAP(() => {
    gsap.from(".wervalo__container", {
      opacity: 0,
      x: -100,
      y: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#wervalo",

        toggleActions: "play none none none",
      },
    });
    gsap.fromTo(
      "#video2",
      { outline: "1px solid grey" },
      { outline: "1px solid rgb(119, 5, 5)" }
    );
  });

  return (
    <section className="wervalo">
      <div className="wervalo__container container ">
        <Card
          variant="plain"
          sx={{
            backgroundColor: "transparent",
            width: 400,
            height: 500,
          }}
          id="wervalo"
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
              sx={{
                fontFamily: "Roboto Condensed, san serif",
                color: "#000",
                textTransform: "uppercase",
                fontSize: "5rem",
              }}
              className="title-val"
            >
              We are valorant
            </Typography>
            <Typography
              level="title-lg"
              sx={{ fontFamily: "Roboto Condensed, san serif", color: "#000" }}
              className="desc-val"
            >
              Blend your style and experience on a global, competitive stage.
              You have 13 rounds to attack and defend your side using sharp
              gunplay and tactical abilities. And, with one life per-round,
              you'll need to think faster than your opponent if you want to
              survive. Take on foes across Competitive and Unranked modes as
              well as Deathmatch and Spike Rush.
            </Typography>
            <Button
              size="lg"
              sx={{
                backgroundColor: "rgb(255, 70, 85)",
                color: "#FFF",
                transition: "color 0.3s ease 0s, background-color 0.3s ease 0s",
                ":hover": {
                  backgroundColor: "rgb(15, 25, 35)",
                  color: "rgb(236, 232, 225)",
                },
              }}
            >
              Learn Now
            </Button>
          </CardContent>
        </Card>

        <div className="video_container  ">
          <video autoPlay muted loop playsInline id="video2">
            <source
              src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import "./agent.css";
import { Typography, Button, Link } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin);

export default function Agent() {
  useGSAP(() => {
    gsap.from(".content", {
      scrollTrigger: {
        trigger: ".agent-container",
      },
      pixi: {
        blurX: 15,
        blurY: 15,
        duration: 0.5,
        delay: 1,
      },
      x: 100,
      opacity: 0,
      duration: 0.3,
      delay: 1,
      ease: "sine.in",
    });

    gsap.from(".responsive-image", {
      scrollTrigger: {
        trigger: ".agent-container",
      },
      pixi: {
        blurX: 15,
        blurY: 15,
        duration: 0.5,
        delay: 1,
      },
      y: 100,
      opacity: 0,
      duration: 0.3,
      delay: 1,
      ease: "sine.in",
    });
  });

  return (
    <section className="agents">
      <div className="agent-container container p-5">
        <div className="image">
          <img
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=576"
            className="responsive-image"
          />
        </div>
        <div className="content">
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
              id="card-content"
            >
              <Typography
                level="h1"
                sx={{
                  fontFamily: "Roboto Condensed, san serif",
                  color: "#FFF",
                  textTransform: "uppercase",
                  fontSize: "5rem",
                  fontWeight: "900",
                }}
                className="title-val"
              >
                YOUR AGENTS
              </Typography>
              <Typography
                level="title-lg"
                sx={{
                  fontFamily: "Roboto Condensed, san serif",
                  color: "#FFF",
                }}
                className="desc-val"
              >
                More than guns and bullets, you’ll choose an Agent armed with
                adaptive, swift, and lethal abilities that create opportunities
                to let your gunplay shine. No two Agents play alike, just as no
                two highlight reels will look the same.
              </Typography>
              <Button
                size="lg"
                sx={{
                  backgroundColor: "rgb(236, 232, 225)",
                  color: "rgb(15, 25, 35)",
                  transition:
                    "color 0.3s ease 0s, background-color 0.3s ease 0s",
                  ":hover": {
                    backgroundColor: "rgb(15, 25, 35)",
                    color: "rgb(236, 232, 225)",
                  },
                }}
                component={Link}
                href="https://playvalorant.com/en-gb/agents/"
                underline="none"
              >
                VIEW ALL AGENTS
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

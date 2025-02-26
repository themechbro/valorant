import * as React from "react";
import "./maps.css";
import { Typography, Button } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin);

export default function Maps() {
  useGSAP(() => {
    gsap.from(".responsive-images", {
      scrollTrigger: {
        trigger: ".maps_container",
      },
      pixi: {
        blurX: 15,
        blurY: 15,
        duration: 0.5,
      },
      x: -100,
      opacity: 0,
      duration: 0.3,
      delay: 1,
      ease: "sine.in",
    });

    gsap.from(".contents", {
      scrollTrigger: {
        trigger: ".maps_container",
      },
      pixi: {
        blurX: 15,
        blurY: 15,
        duration: 0.5,
      },
      y: -100,
      opacity: 0,
      duration: 0.3,
      delay: 1,
      ease: "sine.in",
    });
  });

  return (
    <section className="maps">
      <div className="maps_container container ">
        <Card
          variant="plain"
          sx={{
            backgroundColor: "transparent",
            width: 400,
            height: 500,
          }}
          className="contents"
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
              YOUR MAPS
            </Typography>
            <Typography
              level="title-lg"
              sx={{ fontFamily: "Roboto Condensed, san serif", color: "#000" }}
              className="desc-val"
            >
              Each map is a playground to showcase your creative thinking.
              Purpose-built for team strategies, spectacular plays, and clutch
              moments. Make the play others will imitate for years to come..
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
              VIEW ALL MAPS
            </Button>
          </CardContent>
        </Card>

        <div className="map-image  ">
          <img
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/65c45804e00ee97977b6eef06da370543968d161-1232x1232.png?auto=format&fit=fill&q=80&w=576"
            className="responsive-images"
          />
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import "./hero.css";
import { Typography } from "@mui/joy";
import { Button, Link } from "@mui/joy";

export default function Hero() {
  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
      ></video>
      <div className="top-content ">
        <Typography level="title-lg" sx={{ color: "#FFF" }}>
          A 5v5 character-based tactical shooter
        </Typography>
        <img
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&amp;fit=fill&amp;q=80&amp;w=305"
          alt=""
          class="sc-c8d25c58-0 jNKrmJ sc-53895c5d-0 dgDAVj sc-7d2e4129-0 jGlHqV logo"
          data-testid="masthead-logo"
        ></img>
        <Button
          size="lg"
          sx={{
            backgroundColor: "rgb(255, 70, 85)",
            color: "rgb(236, 232, 225)",
            outline: "rgb(236, 232, 225) solid 1px",
            outlineOffset: "3px",
            borderRadius: "none",
            transition: "color 0.3s ease 0s, background-color 0.3s ease 0s",
            ":hover": {
              backgroundColor: "rgb(236, 232, 225)",
              color: "rgb(15, 25, 35)",
              outline: "rgb(15, 25, 35) solid 1px",
            },
          }}
        >
          PLAY FOR FREE
        </Button>
      </div>
    </div>
  );
}

import * as React from "react";
import "./agent.css";
import { Typography, Button } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

export default function Agent() {
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

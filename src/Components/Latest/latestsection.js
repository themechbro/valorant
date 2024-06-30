import * as React from "react";
import { Typography } from "@mui/joy";
import ValorantCard from "./card";
import "./latest.css";

export default function Latest() {
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

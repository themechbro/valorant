import * as React from "react";
import { Link, Typography } from "@mui/joy";
import "./agentDeck.css";
import AgentCard from "./agentCard";

export default function AgentDeck() {
  return (
    <div className="agent-deck pt-5 position-relative">
      <div className="agent_deck_container container py-5 pt-5 position-relative">
        <Typography
          level="h2"
          sx={{
            mb: 2,
            color: "#FFF",
            fontFamily: "Roboto Condensed, sans serif",
            textTransform: "uppercase",
            fontSize: "3rem",
            fontStyle: "italic",
            fontWeight: "Bolder",
          }}
        >
          Agents
        </Typography>

        <AgentCard />
      </div>
    </div>
  );
}

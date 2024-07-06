import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import agentdata from "../../agentdata/agentdata";
import "./agentDeck.css";

export default function AgentCard() {
  const dispatch = useDispatch();
  const handleClick = (indvagent) => {
    dispatch({ type: "VIEW_AGENT", payload: indvagent });
    dispatch({ type: "VIEW_AGENTS_ABILITY", payload: indvagent.abilities });
  };

  return (
    <div className="deck">
      {agentdata.map((indvagent) => {
        return (
          <Card
            style={{
              width: "400px",
              backgroundColor: "#424242",
              margin: 3,
              textDecoration: "none",
            }}
            onClick={() => handleClick(indvagent)}
            component={Link}
            to={`/agents/${indvagent.uuid}=true/${indvagent.displayName}`}
          >
            <CardMedia
              sx={{
                height: 540,
                zIndex: -10,
                padding: 3,
                overflow: "hidden",
                boxSizing: "border-box",
                ":hover": {
                  transition: "all 1s ease-in",
                  transform: "scale(1.1)",
                },
              }}
              image={indvagent.fullPortrait}
              title={indvagent.displayName}
            />
            <CardContent
              sx={{ backgroundColor: "rgb(236, 232, 225)", zIndex: 15 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ color: "rgb(15, 25, 35)", padding: 5 }}
                >
                  {indvagent.displayName}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

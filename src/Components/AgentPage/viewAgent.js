import * as React from "react";
import { Typography } from "@mui/joy";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./viewAgent.css";
import Abilities from "./Abilities";

export default function ViewAgent() {
  const currAgent = useSelector((state) => state.list.viewCard);
  console.log(currAgent);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${currAgent.fullPortrait})`,
          backgroundSize: "cover",
          zoom: 1.5,
          backgroundColor: "rgb(26, 36, 46)",
          padding: 10,
          position: "relative",
          marginTop: "2%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
        className="box"
      >
        <div className="view-agent container-fluid">
          <div className=" container py-5 mt-5">
            <div className="content d-flex flex-column w-25 w-md-100 h-100 justify-content-between, align-items-center">
              <Typography
                level="h1"
                sx={{
                  fontSize: "3rem",
                  color: "#FFF",
                  fontFamily: "Roboto Condensed",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  fontStyle: "oblique",
                  marginBottom: 5,
                }}
                className="agent-name"
              >
                {currAgent.displayName}
              </Typography>

              <Typography
                level="title-sm"
                sx={{
                  color: "#FFF",
                  fontFamily: "Roboto Condensed",
                  marginBottom: 5,
                  "::selection": {
                    backgroundColor: "#FFF",
                    color: "#000",
                  },
                }}
                className="agent-desc"
              >
                {currAgent.description}
              </Typography>
              <Box
                className="role"
                sx={{
                  backgroundColor: "rgb(15, 25, 35)",
                  padding: 3,
                  marginTop: 5,
                  outline: "1px solid red",
                  outlineOffset: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={currAgent.role.displayIcon}
                  className="img-fluid w-25"
                />
                <Typography
                  level="body-sm"
                  sx={{ color: "#FFF", fontFamily: "Roboto Condensed" }}
                >
                  {currAgent.role.displayName}
                </Typography>
                <Typography
                  level="body-sm"
                  sx={{ color: "red", fontFamily: "Roboto Condensed" }}
                >
                  Role
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Box>
      <Abilities />
    </div>
  );
}

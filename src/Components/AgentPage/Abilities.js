import * as React from "react";
import { Typography } from "@mui/joy";
import "./abilities.css";
import { useSelector } from "react-redux";
import { Button } from "@mui/joy";
import { IconButton } from "@mui/joy";
import { useState } from "react";

export default function Abilities() {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const abilities = useSelector((state) => state.list.viewCardAbility);

  const handleIconClick = (videoUrl, videoTitle, videoDesc) => {
    setSelectedVideo(videoUrl);
    setTitle(videoTitle);
    setDesc(videoDesc);
    console.log("Selected video URL:", videoUrl);
  };

  return (
    <div className="abilities ">
      <div className=" py-5">
        <div className="controller deck ">
          <div className="writing">
            <Typography
              level="h1"
              sx={{
                color: "#FFF",
                textTransform: "uppercase",
                fontFamily: "Roboto Condensed",
                fontSize: "3rem",
                textAlign: "center", // Center align text
                marginBottom: "1rem", // Add margin for spacing
              }}
            >
              Special Abilities
            </Typography>
            <div className="button_deck">
              {abilities.map((i) => {
                return (
                  <IconButton
                    component="img"
                    src={i.displayIcon}
                    onClick={() =>
                      handleIconClick(i.video, i.displayName, i.description)
                    }
                    sx={{
                      width: "60px",
                      margin: 2,
                      transition: "all 0.4s ease-in",
                      ":hover": {
                        background: "transparent",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="video-controller ">
            {selectedVideo && (
              <video autoPlay muted loop playsInline key={selectedVideo}>
                <source src={selectedVideo} type="video/mp4" />
              </video>
            )}

            {title && (
              <Typography
                level="body-lg"
                sx={{
                  textTransform: "uppercase",
                  color: "#FFF",
                  fontFamily: "Roboto Condensed, sans-serif",
                  marginBottom: 5,
                  textAlign: "center", // Center align text
                }}
              >
                {title}
              </Typography>
            )}

            {desc && (
              <Typography
                level="body-sm"
                sx={{
                  textTransform: "uppercase",
                  color: "#FFF",
                  fontFamily: "Roboto Condensed, sans-serif",
                  marginBottom: 5,
                  width: "100%", // Adjust width for mobile
                  textAlign: "center", // Center align text
                }}
              >
                {desc}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

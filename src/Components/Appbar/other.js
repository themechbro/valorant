import * as React from "react";
import { Link } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/joy/Button";
import Box from "@mui/material/Box";

export default function Other() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginLeft: 10,
      }}
    >
      <SearchIcon />
      <LanguageIcon />
      <Button
        size="md"
        sx={{
          background:
            "linear-gradient(135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)",
          color: "#000",
        }}
        component={Link}
        href="https://authenticate.riotgames.com/?client_id=prod-xsso-playvalorant&code_challenge=qkouVpH9RduBqrKcBFRRb0kkpvb36niXsLCGTKNrkHA&locale=en_GB&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-playvalorant%26code_challenge%3DqkouVpH9RduBqrKcBFRRb0kkpvb36niXsLCGTKNrkHA%26code_challenge_method%3DS256%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fxsso.playvalorant.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26state%3D41ec3ea616db77f275567544cb%26uri%3Dhttps%253A%252F%252Fplayvalorant.com%252Fen-gb%252F&security_profile=low"
        underline="none"
      >
        PLAY NOW
      </Button>
    </Box>
  );
}

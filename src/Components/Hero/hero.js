import * as React from "react";
import "./hero.css";
import { Typography } from "@mui/joy";
import { Button, Link } from "@mui/joy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".top-content",
      { opacity: 0, duration: 0.5, delay: 1 },
      { opacity: 1, duration: 0.5, delay: 1, ease: "sine.in" }
    );
    gsap.fromTo(
      "#video",
      { opacity: 0, duration: 0.2, delay: 0.5 },
      { opacity: 1, duration: 0.2, delay: 0.5, ease: "sine.in" }
    );
  });

  return (
    <div className="hero">
      <video
        autoPlay
        muted
        loop
        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
        id="video"
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
          component={Link}
          href="https://authenticate.riotgames.com/?client_id=prod-xsso-playvalorant&code_challenge=qkouVpH9RduBqrKcBFRRb0kkpvb36niXsLCGTKNrkHA&locale=en_GB&method=riot_identity&platform=web&redirect_uri=https%3A%2F%2Fauth.riotgames.com%2Fauthorize%3Fclient_id%3Dprod-xsso-playvalorant%26code_challenge%3DqkouVpH9RduBqrKcBFRRb0kkpvb36niXsLCGTKNrkHA%26code_challenge_method%3DS256%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fxsso.playvalorant.com%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520account%2520email%2520offline_access%26state%3D41ec3ea616db77f275567544cb%26uri%3Dhttps%253A%252F%252Fplayvalorant.com%252Fen-gb%252F&security_profile=low"
          underline="none"
        >
          PLAY FOR FREE
        </Button>
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import "./latest.css";

const data = [
  {
    id: 1,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/82491c7233a9008ce486acfeaeaacdb61da66dd2-1920x1080.jpg?auto=format&fit=fill&q=80&w=485",
    title: "Inside The Mind Of a Pro VALORANT Duelist",
    desc: "VALORANT pros Zekken, ZmjjKK, something, Aspas, and cNed talk about the mindset that goes into playing the Duelist role like a VCT pro!",
    misc: "ESPORTS",
    miscDate: "last month",
  },
  {
    id: 2,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/eeb966b0733f85f8474da6be1d58b5a69b214fe6-1920x1080.jpg?auto=format&fit=fill&q=80&w=485",
    title: "Map Rotations, Replays, and More // Dev Updates",
    desc: "It’s been a while. Let’s chat.",
    misc: "DEV",
    miscDate: "last month",
  },
  {
    id: 3,
    img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/26ebacbb761153acfddedfa17edc21ac3f41df0e-1920x1080.jpg?auto=format&fit=fill&q=80&w=485",
    title: "WATCH AND EARN: MASTERS Shanghai",
    desc: "Catch the live matches for exclusive Drops!",
    misc: "ESPORTS",
    miscDate: "last month",
  },
];

const ValorantCard = () => {
  return (
    <div className="card-deck">
      {data.map((i) => {
        return (
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardMedia
              component="img"
              height="140"
              image={i.img} // replace with your image path
              alt="Valorant Duelist"
              className="image-hover"
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="overline"
                  color="textSecondary"
                  sx={{ fontFamily: "Roboto Condensed" }}
                >
                  {i.misc}
                </Typography>
                <Typography
                  variant="overline"
                  color="textSecondary"
                  sx={{ fontFamily: "Roboto Condensed" }}
                >
                  {i.miscDate}
                </Typography>
              </Box>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontFamily: "Roboto Condensed" }}
              >
                {i.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontFamily: "Roboto Condensed" }}
              >
                {i.desc}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ValorantCard;

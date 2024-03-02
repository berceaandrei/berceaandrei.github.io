import * as React from "react";
import { Typography, Stack, Paper, Divider } from "@mui/material";

const songs = [
  "Mood Swings - Little Simz",
  "FAMJAM4000 - Jordan Ward",
  "i - Kendrick Lamar",
  "Pink Matter - Frank Ocean",
  "SUMMER - The Carters",
  "1999 WILDFIRE - BROCKHAMPTON",
];

const getRandomSong = () => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  return songs[randomIndex];
};

const SpotifyPaper: React.FC = () => {
  const [currentSong, setCurrentSong] = React.useState(getRandomSong());

  const handleReloadSong = () => {
    setCurrentSong(getRandomSong());
  };

  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: "#fbfbfb",
        padding: "5px",
        borderRadius: 0,
      }}
    >
      <Stack alignItems="center" flexDirection={"row"}>
        <img
          src={require("../../../imagess/spotify.png")}
          alt="Spotify Logo"
          style={{
            width: "80px",
            height: "80px",
            animation: "spin 4s linear infinite",
          }}
        />
        <Stack
          flexDirection="column"
          style={{
            paddingLeft: "10px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontFamily: "Cocogoose",
              letterSpacing: "-1px",
              color: "#600d2a",
            }}
          >
            On repeat
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter-medium",
              color: "#600d2a",
            }}
          >
            {currentSong}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SpotifyPaper;

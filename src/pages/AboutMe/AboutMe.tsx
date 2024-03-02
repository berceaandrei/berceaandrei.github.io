import React, { useEffect, useState } from "react";
import { Typography, Stack, Paper } from "@mui/material";
import Navigation from "../../components/molecules/Navigation/Navigation/Navigation";
import Grid from "@mui/material/Grid";
import SkillList from "../../components/molecules/SkillList/SkillList";
import TitleTextSection from "../../components/molecules/TitleTextSection/TitleTextSection";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import "../../styles.css";
import SpotifyPaper from "../../components/molecules/SpotifyPaper/SpotifyPaper";
import Footer from "../../components/molecules/Footer/Footer";

const AboutMe: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeIn2, setFadeIn2] = useState(false);
  const [fadeIn3, setFadeIn3] = useState(false);
  const [fadeIn4, setFadeIn4] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const timeoutId2 = setTimeout(() => {
      setFadeIn2(true);
    }, 250);

    return () => {
      clearTimeout(timeoutId2);
    };
  }, []);

  useEffect(() => {
    const timeoutId3 = setTimeout(() => {
      setFadeIn3(true);
    }, 400);

    return () => {
      clearTimeout(timeoutId3);
    };
  }, []);

  useEffect(() => {
    const timeoutId4 = setTimeout(() => {
      setFadeIn4(true);
    }, 600);

    return () => {
      clearTimeout(timeoutId4);
    };
  }, []);

  return (
    <Stack
      width={"100%"}
      height={"100%"}
      position={"relative"}
      className={isMobile ? "phone-bg" : "pc-bg"}
    >
      <Navigation
        textLink1="Home"
        textLink2="About me"
        textLink3="Experience"
        textLink4="Contact"
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        paddingTop={isMobile ? "100px" : "140px"}
      >
        <Stack flexDirection="row">
          {isDesktop && (
            <span
              style={{ marginTop: "100px", marginRight: "20px" }}
              className={`fadeInStars ${fadeIn4 ? "visible" : ""}`}
            >
              <img
                src={require("../../imagess/sparkle.png")}
                height="70px"
                width="70px"
              />
            </span>
          )}

          <Typography
            className={`fadeIn ${fadeIn ? "visible" : ""}`}
            style={{
              fontFamily: "MagicRetro",
              color: fadeIn ? "#600d2a" : "transparent",
            }}
            fontSize={isMobile ? "70px" : isTablet ? "100px" : "140px"}
            lineHeight="1"
            textAlign="center"
          >
            About me.
          </Typography>
          {isDesktop && (
            <span
              style={{ marginLeft: "10px" }}
              className={`fadeInStars ${fadeIn4 ? "visible" : ""}`}
            >
              <img
                src={require("../../imagess/sparkle.png")}
                height="70px"
                width="70px"
              />
            </span>
          )}
        </Stack>
      </Stack>
      <Stack
        paddingTop={isMobile ? "40px" : "90px"}
        paddingLeft={isMobile ? "30px" : isTablet ? "70px" : "170px"}
        paddingRight={isMobile ? "30px" : isTablet ? "70px" : "170px"}
        paddingBottom="40px"
        flexDirection={isMobile || isTablet ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={isMobile ? "40px" : isTablet ? "70px" : "100px"}
        margin="auto"
        className={`fadeIn ${fadeIn2 ? "visible" : ""}`}
      >
        <Stack maxWidth={isDesktop ? "600px" : "100%"}>
          <TitleTextSection
            title={`Hi there! I'm Andi, an aspiring software developer with a
          passion for the creative world of frontend development.`}
            text="I'm in the final year of my Computer Science in English program at the
          Babeș-Bolyai University in Cluj-Napoca, where I'm learning to turn
          my digital dreams into reality. When I'm not crafting code, you'll often find me immersed in the
          world of music and art. And, let's not forget about graphic design
          – it's my canvas for expressing the visual side of my creativity."
          />
        </Stack>
        <Stack className={`fadeIn ${fadeIn3 ? "visible" : ""}`}>
          <Paper
            elevation={5}
            style={{
              borderRadius: "300px 300px 0 0",
              overflow: "hidden",
              height: "80%",
              width: "100%",
              maxWidth: isDesktop ? "350px" : isTablet ? "400px" : "85%",
              minWidth: !isMobile ? "300px" : "0",
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              top: "-100px",
              margin: isMobile ? "auto" : "",
            }}
          >
            <img
              src={require("../../imagess/andi.jpg")}
              alt="Andrei Bercea portrait"
              style={{
                width: "100%",

                borderTopLeftRadius: "300px",
                borderTopRightRadius: "300px",
                height: "82%",
                objectFit: "cover",
              }}
            />
            <SpotifyPaper />
          </Paper>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AboutMe;

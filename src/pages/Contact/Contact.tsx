import { Typography, Stack, Button } from "@mui/material";
import Navigation from "../../components/molecules/Navigation/Navigation/Navigation";
import Grid from "@mui/material/Grid";
import { ImageCard } from "../../components/organisms/ImageCard";
import { cardsConfig } from "../../utils/cardsConfig";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { useEffect, useState } from "react";
import Footer from "../../components/molecules/Footer/Footer";
import ContactForm from "../../components/organisms/ContactForm/ContactForm";

const Contact: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeIn2, setFadeIn2] = useState(false);
  const [fadeIn3, setFadeIn3] = useState(false);
  const [fadeIn4, setFadeIn4] = useState(false);

  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCards(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

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
    }, 340);

    return () => {
      clearTimeout(timeoutId2);
    };
  }, []);

  useEffect(() => {
    const timeoutId3 = setTimeout(() => {
      setFadeIn3(true);
    }, 540);

    return () => {
      clearTimeout(timeoutId3);
    };
  }, []);

  useEffect(() => {
    const timeoutId4 = setTimeout(() => {
      setFadeIn4(true);
    }, 700);

    return () => {
      clearTimeout(timeoutId4);
    };
  }, []);

  return (
    <Stack className={isMobile ? "phone-bg" : "pc-bg"}>
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
        paddingBottom="40px"
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
            Contact.
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
        <div className={`moveCard ${showCards ? "visible" : ""}`}>
          <ContactForm></ContactForm>
        </div>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Contact;

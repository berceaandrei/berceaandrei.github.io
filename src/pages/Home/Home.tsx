import { Typography, Stack, IconButton } from "@mui/material";
import Navigation from "../../components/molecules/Navigation/Navigation/Navigation";
import { Icon } from "../../components/atoms/Icon";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { useEffect, useState } from "react";
import { PhoneModal } from "../../components/molecules/PhoneModal";
import { AiFillPhone } from "react-icons/ai";
import CustomLink from "../../components/atoms/CustomLink/CustomLink";
import "../../styles.css";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = ({}) => {
  const email = "berceamihaiandrei@gmail.com";

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const handlePhoneModalOpen = () => {
    setIsPhoneModalOpen(true);
  };

  const handlePhoneModalClose = () => {
    setIsPhoneModalOpen(false);
  };

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
    }, 540);

    return () => {
      clearTimeout(timeoutId2);
    };
  }, []);

  useEffect(() => {
    const timeoutId3 = setTimeout(() => {
      setFadeIn3(true);
    }, 440);

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

  useEffect(() => {
    const timeoutId3 = setTimeout(() => {
      setFadeIn3(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId3);
    };
  }, []);

  const { isMobile, isDesktop } = useBreakpoints();

  return (
    <Stack
      className={!isMobile ? "page1" : "page1nopic"}
      style={{ height: "100%", width: "100%" }}
    >
      <Navigation
        textLink1="Home"
        textLink2="About me"
        textLink3="Experience"
        textLink4="Contact"
      />

      <Stack
        width="100%"
        alignItems="center"
        paddingTop={"50px"}
        paddingBottom="40px"
      >
        <img
          src={require("../../imagess/avatar.png")}
          height={isMobile ? "260px" : "300px"}
          width={isMobile ? "260px" : "300px"}
          className={`fadeInStars ${fadeIn ? "visible" : ""}`}
          style={{ paddingTop: isMobile ? "40px" : "70px" }}
        />
        <Stack flexDirection="row">
          {!isMobile && (
            <span
              style={{ marginTop: "100px", marginRight: "10px" }}
              className={`fadeInStars ${fadeIn4 ? "visible" : ""}`}
            >
              <img
                src={require("../../imagess/sparkle-white.png")}
                height="50px"
                width="50px"
              />
            </span>
          )}
          <Typography
            style={{
              fontFamily: "MagicRetro",
              fontSize: isMobile ? "70px" : "80px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
            paddingTop="30px"
            color="#ffffff"
            display={"block"}
            textAlign="center"
            lineHeight="1.1"
            className={`fadeIn ${fadeIn ? "visible" : ""}`}
          >
            Andrei Bercea
          </Typography>
          {!isMobile && (
            <span className={`fadeInStars ${fadeIn4 ? "visible" : ""}`}>
              <img
                src={require("../../imagess/sparkle-white.png")}
                height="50px"
                width="50px"
              />
            </span>
          )}
        </Stack>
        <Stack
          className={`fadeIn ${fadeIn2 ? "visible" : ""}`}
          display={"block"}
          marginBottom={"20px"}
          marginTop={isMobile ? "20px" : "0"}
        >
          <TypeAnimation
            sequence={[
              "I am a developer.",
              1000,
              "I am a student.",
              1000,
              "I am a frontend enthusiast.",
              1000,
            ]}
            wrapper="span"
            speed={20}
            style={{
              fontFamily: "Cocogoose",
              fontSize: "25px",
              display: "inline-block",
              color: "#ffffff",
              textAlign: "center",
              marginTop: isDesktop ? "-30px" : "10px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
            repeat={Infinity}
          />
        </Stack>
        <Stack
          width="400px"
          justifyContent="space-around"
          alignItems="center"
          display="flex"
          flexDirection="row"
          paddingTop="20px"
          className={`fadeIn ${fadeIn3 ? "visible" : ""}`}
        >
          <CustomLink isActive={false} path="https://github.com/BerceaAndrei">
            <Icon iconName="github" customColor="#ffffff" />
          </CustomLink>

          <CustomLink
            isActive={false}
            path="https://www.linkedin.com/in/mihai-andrei-bercea-097409253/"
          >
            <Icon iconName="linkedin" customColor="#ffffff" />
          </CustomLink>

          {isMobile && (
            <a href="tel:+40752242470">
              <AiFillPhone
                style={{
                  color: "#ffffff",
                  width: "50px",
                  height: "50px",
                }}
              />
            </a>
          )}
          {!isMobile && (
            <>
              <IconButton onClick={handlePhoneModalOpen} color="primary">
                <AiFillPhone
                  style={{
                    color: "#ffffff",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </IconButton>
              <PhoneModal
                isOpen={isPhoneModalOpen}
                phoneNumber={"+40752242470"}
                onClose={handlePhoneModalClose}
              />
            </>
          )}

          <IconButton onClick={handleEmailButtonClick}>
            <Icon iconName="mail" customColor="#ffffff" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;

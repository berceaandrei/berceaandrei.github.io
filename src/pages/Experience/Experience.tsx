import React, { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";
import Navigation from "../../components/molecules/Navigation/Navigation/Navigation";
import Grid from "@mui/material/Grid";
import SkillList from "../../components/molecules/SkillList/SkillList";
import TitleTextSection from "../../components/molecules/TitleTextSection/TitleTextSection";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import "../../styles.css";
import Timeline from "../../components/molecules/Timeline/Timeline";
import Certification from "../../components/molecules/Certifications/Certifications";
import Footer from "../../components/molecules/Footer/Footer";

const Experience: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeIn2, setFadeIn2] = useState(false);
  const [fadeIn3, setFadeIn3] = useState(false);
  const [fadeIn4, setFadeIn4] = useState(false);
  const [fadeIn5, setFadeIn5] = useState(false);

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
    }, 300);

    return () => {
      clearTimeout(timeoutId2);
    };
  }, []);

  useEffect(() => {
    const timeoutId3 = setTimeout(() => {
      setFadeIn3(true);
    }, 500);

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
    const timeoutId5 = setTimeout(() => {
      setFadeIn5(true);
    }, 900);

    return () => {
      clearTimeout(timeoutId5);
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
        paddingRight={!isMobile ? "30px" : "5px"}
        paddingLeft={!isMobile ? "30px" : "5px"}
        paddingBottom={!isMobile ? "60px" : "40px"}
        margin="auto"
      >
        <Stack alignItems="center" paddingTop={isMobile ? "100px" : "140px"}>
          <Stack flexDirection="row">
            {isDesktop && (
              <span
                style={{ marginTop: "100px", marginRight: "20px" }}
                className={`fadeInStars ${fadeIn5 ? "visible" : ""}`}
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
              fontSize={isMobile ? "65px" : isTablet ? "100px" : "140px"}
              lineHeight="1"
              textAlign="center"
              marginBottom={isMobile ? "20px" : "0"}
            >
              Experience.
            </Typography>
            {isDesktop && (
              <span
                style={{ marginLeft: "10px" }}
                className={`fadeInStars ${fadeIn5 ? "visible" : ""}`}
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
          display="flex"
          flexDirection="row"
          flexWrap={isDesktop ? "nowrap" : "wrap"}
          paddingTop={!isMobile ? "90px" : "30px"}
          justifyContent={isMobile ? "start" : "center"}
          gap={isDesktop ? "40px" : "20px"}
          marginLeft={isMobile ? "5px" : "0px"}
          maxWidth={!isDesktop ? "90%" : "1200px"}
          margin={!isDesktop ? "auto" : "0"}
        >
          <div
            className={`fadeIn ${fadeIn2 ? "visible" : ""}`}
            style={{ width: isDesktop ? "100%" : "90%" }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Cocogoose",

                color: "#600d2a",
              }}
              fontSize={isMobile ? "30px" : isTablet ? "35px" : "40px"}
              marginLeft="40px"
            >
              Work experience
            </Typography>
            <Timeline
              color="#600d2a"
              titles={["Loading...😄", "RebelDot Solutions"]}
              subtitles={["", "Front-end/React Internship"]}
              logo={["", require("../../imagess/rebeldot.png")]}
              times={["", "July 2023 - September 2023"]}
              locations={["", "Cluj-Napoca & Remote"]}
              space={true}
              descriptions={[
                "",
                "I gained hands-on experience with React, TypeScript, MUI, Storybook, Styled Components, Agile & Scrum, Git. Collaborated on a web development project, honing frontend skills and creating a user-friendly, functional interface.",
              ]}
            />
          </div>

          <div
            className={`fadeIn ${fadeIn3 ? "visible" : ""}`}
            style={{ width: isDesktop ? "100%" : "90%" }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Cocogoose",

                color: "#600d2a",
              }}
              fontSize={isMobile ? "30px" : isTablet ? "35px" : "40px"}
              marginLeft="40px"
            >
              Education
            </Typography>
            <Timeline
              color="#600d2a"
              titles={[
                '"Babeș Bolyai" University',
                '"Unirea" National College',
              ]}
              space={false}
              logo={[
                require("../../imagess/babes.jpg"),
                require("../../imagess/unirea.png"),
              ]}
              subtitles={[
                "Faculty of Mathematics and Computer Science, Computer Science in English",
                "Mathematics and Computer Science field, focus on Computer Science",
              ]}
              times={["2021-2024 (expected)", "2017-2021"]}
              locations={["Cluj-Napoca", "Târgu Mureș"]}
            />
          </div>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          flexWrap={isDesktop ? "nowrap" : "wrap"}
          paddingTop={!isMobile ? "36px" : "20px"}
          justifyContent={isMobile ? "start" : "center"}
          gap={isDesktop ? "40px" : "36px"}
          marginLeft={isMobile ? "5px" : "0px"}
          maxWidth={!isDesktop ? "90%" : "1200px"}
          margin={!isDesktop ? "auto" : "0"}
        >
          <div
            className={`fadeIn ${fadeIn4 ? "visible" : ""}`}
            style={{ width: isDesktop ? "100%" : "90%" }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Cocogoose",
                marginBottom: "18px",
                color: "#600d2a",
              }}
              fontSize={isMobile ? "30px" : isTablet ? "35px" : "40px"}
              marginLeft="40px"
            >
              Certifications
            </Typography>
            <Stack
              marginLeft="16px"
              gap={"25px"}
              style={{ justifyContent: "center" }}
            >
              <Certification
                title=" Java Development certificate"
                subtitle="Google Atelierul Digital"
                link="https://learn.digitalstack.ro/mod/linkedincert/verify_certificate.php?code=TICAixW4ex"
              ></Certification>
              <Certification
                title="Baccalaureate Diploma"
                subtitle="Unirea National College"
              ></Certification>
              <Certification
                title="Competence exam in english"
                subtitle="Unirea National College"
              ></Certification>
              <Certification
                title="Computer Science certificate (C++, Databases)"
                subtitle="Unirea National College"
              ></Certification>
            </Stack>
          </div>
          <div
            className={`fadeIn ${fadeIn5 ? "visible" : ""}`}
            style={{ width: isDesktop ? "100%" : "90%" }}
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Cocogoose",
                marginBottom: "18px",
                color: "#600d2a",
              }}
              fontSize={isMobile ? "30px" : isTablet ? "35px" : "40px"}
              marginLeft="40px"
            >
              My skills
            </Typography>
            <SkillList
              skills={[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "TypeScript",
                "Java",
                "C++",
                "OOP",
                "SQL",
                "Python",
                "Redux",
                "MUI",
                "Kotlin",
                "React Native",
                "Storybook",
                "Reusable components",
                "Git",
                "Agile",
                "Scrum",
                "Teamworker",
                "Communication",
                "Data structures",
                "Graphic Design",
                "Photoshop",
                "Computer Networks",
              ]}
            />
          </div>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Experience;

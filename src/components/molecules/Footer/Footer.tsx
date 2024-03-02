import React, { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import { CustomLink } from "../../atoms/CustomLink";
import { Icon } from "../../atoms/Icon";
import { AiFillPhone } from "react-icons/ai";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import { PhoneModal } from "../PhoneModal";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

const Footer = () => {
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

  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  return (
    <Stack
      className="footer"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        bottom: 0,
        left: 0,
        right: 0,
        gap: isMobile ? "20px" : "40px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        gap={2}
      >
        <Stack
          style={{
            position: "relative",
            width: "50%",
            borderBottom: "4px solid #600d2a",
          }}
        />
        <Stack direction="row" alignItems="center" spacing={1}>
          <CustomLink
            isActive={false}
            path="https://github.com/BerceaAndrei"
            style={{ padding: "8px" }}
          >
            <Icon
              iconName="github"
              style={{
                color: "#600d2a",
                width: "50px",
                height: "50px",
              }}
              customColor="#600d2a"
            />
          </CustomLink>
          <CustomLink
            isActive={false}
            path="https://www.linkedin.com/in/mihai-andrei-bercea-097409253/"
            style={{ padding: "8px" }}
          >
            <Icon
              iconName="linkedin"
              style={{
                color: "#600d2a",
              }}
              customColor="#600d2a"
            />
          </CustomLink>
          {isMobile ? (
            <a href="tel:+40752242470">
              <AiFillPhone
                style={{
                  color: "#600d2a",
                  width: "50px",
                  height: "50px",
                }}
              />
            </a>
          ) : (
            <>
              <IconButton onClick={handlePhoneModalOpen} color="primary">
                <AiFillPhone
                  style={{
                    color: "#600d2a",
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
            <Icon iconName="mail" customColor="#600d2a" />
          </IconButton>
        </Stack>
        <Stack
          style={{
            position: "relative",
            width: "50%",
            borderBottom: "4px solid #600d2a",
          }}
        />
      </Stack>

      <Stack
        display="flex"
        flexDirection={isMobile || isTablet ? "column" : "row"}
        justifyContent={isMobile || isTablet ? "center" : "space-between"}
        alignItems={isMobile || isTablet ? "center" : "flex-start"}
        width="100%"
        gap={isMobile || isTablet ? 4 : 0}
        paddingBottom={isMobile ? "40px" : "60px"}
      >
        <Stack
          paddingLeft={isMobile || isTablet ? "0" : "150px"}
          display={"flex"}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          alignItems={isMobile || isTablet ? "center" : "start"}
          gap={"5px"}
        >
          <CustomLink
            path="/path/to/your/resume.pdf"
            style={{
              color: "#600d2a",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            fontSize={isMobile ? "15px" : isTablet ? "17px" : "20px"}
            fontFamily="Cocogoose-numbers"
            fontWeight="bolder"
            isActive={false}
          >
            Resume
          </CustomLink>
          <Typography
            style={{
              fontFamily: "Cocogoose-numbers",
              fontWeight: "bolder",
              color: "#600d2a",
            }}
            fontSize={isMobile ? "15px" : isTablet ? "17px" : "20px"}
          >
            berceamihaiandrei@gmail.com
          </Typography>
        </Stack>
        <Stack
          paddingRight={isMobile || isTablet ? "0" : "150px"}
          display={"flex"}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          alignItems={isMobile || isTablet ? "center" : "end"}
          gap={"5px"}
        >
          <Stack
            flexDirection={"row"}
            flexWrap={"nowrap"}
            alignItems={"center"}
            gap={"5px"}
          >
            <LocationOnIcon
              style={{
                color: "#600d2a",
                height: isMobile ? "18px" : "20px",
                width: "auto",
              }}
            />
            <Typography
              style={{
                fontFamily: "Cocogoose-numbers",
                fontWeight: "bolder",
                color: "#600d2a",
              }}
              fontSize={isMobile ? "15px" : isTablet ? "17px" : "20px"}
            >
              Cluj-Napoca, Romania
            </Typography>
          </Stack>
          <Typography
            style={{
              fontFamily: "Cocogoose-numbers",
              fontWeight: "bolder",
              color: "#600d2a",
            }}
            fontSize={isMobile ? "15px" : isTablet ? "17px" : "20px"}
          >
            © 2024 Andrei Bercea
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;

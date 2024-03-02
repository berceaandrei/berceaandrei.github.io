import React, { useState } from "react";
import { CustomLink } from "../../../atoms/CustomLink";
import { StyledBox, LinksBox } from "./Navigation.styles";
import { useLocation } from "react-router-dom";
import { Stack, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useBreakpoints } from "../../../../hooks/useBreakpoints";

export type NavigationProps = {
  textLink1: string;
  textLink2: string;
  textLink3: string;
  textLink4: string;
};

const Navigation: React.FC<NavigationProps> = ({
  textLink1,
  textLink2,
  textLink3,
  textLink4,
}) => {
  const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {isMobile && (
        <Stack
          style={{
            backgroundColor: !isMobile
              ? "transparent"
              : location.pathname === "/"
              ? "#ffffff"
              : "#600d2a",
            height: "50px",
            width: "100%",
            position: "fixed",
            zIndex: 1000,
            top: 0,
          }}
        >
          <IconButton
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={handleToggleMenu}
            style={{
              color: location.pathname === "/" ? "#600d2a" : "#ffffff",
              position: "absolute",
              left: "10px",
              marginTop: "3px",
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {menuOpen && (
            <Menu
              id="menu"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              anchorPosition={{ top: 50, left: 0 }}
              anchorReference="anchorPosition"
              open={menuOpen}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "100vw",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <CustomLink
                  path="/"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                  isActive={location.pathname === "/"}
                >
                  {textLink1}
                </CustomLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomLink
                  path="/about-me"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                  isActive={location.pathname === "/about-me"}
                >
                  {textLink2}
                </CustomLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomLink
                  path="/experience"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                  isActive={location.pathname === "/experience"}
                >
                  {textLink3}
                </CustomLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomLink
                  path="/contact"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                  isActive={location.pathname === "/contact"}
                >
                  {textLink4}
                </CustomLink>
              </MenuItem>
            </Menu>
          )}
        </Stack>
      )}
      {!isMobile && (
        <Stack
          style={{
            backgroundColor: !isMobile
              ? "transparent"
              : location.pathname === "/"
              ? "#ffffff"
              : "#600d2a",
            height: "50px",
            width: "100%",
            position: "fixed",
            zIndex: 1000,
            top: 0,
          }}
        >
          <Stack
            style={{
              paddingTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <StyledBox minWidth="500px" width="50%">
              <LinksBox>
                <CustomLink
                  isActive={location.pathname === "/"}
                  path="/"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                >
                  {textLink1}
                </CustomLink>
                <CustomLink
                  isActive={location.pathname === "/about-me"}
                  path="/about-me"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                >
                  {textLink2}
                </CustomLink>
                <CustomLink
                  isActive={location.pathname === "/experience"}
                  fontFamily="Cocogoose"
                  path="/experience"
                  fontSize="16px"
                >
                  {textLink3}
                </CustomLink>
                <CustomLink
                  isActive={location.pathname === "/contact"}
                  path="/contact"
                  fontFamily="Cocogoose"
                  fontSize="16px"
                >
                  {textLink4}
                </CustomLink>
              </LinksBox>
            </StyledBox>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Navigation;

import { css, styled } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CustomLinkProps } from "./CustomLink";

export const StyledLink = styled(RouterLink, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<CustomLinkProps>(
  ({ isActive }) => css`
    text-decoration: none;
    color: ${isActive ? "#600d2a" : "#000000"};
  `
);

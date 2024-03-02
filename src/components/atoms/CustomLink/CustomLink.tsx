import { ReactElement } from "react";
import { LinkProps, Typography } from "@mui/material";
import { StyledLink } from "./CustomLink.styles"; // Import the styled component
import "../../../styles.css";

export interface CustomLinkProps extends LinkProps {
  children: ReactElement | string;
  path: string;
  isActive: boolean;
  color?: string; // Add color prop to match the type expected by LinkProps
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  path,
  isActive,
  fontFamily,
  fontSize,
  fontWeight,
  ...props
}) => (
  <StyledLink {...props} path={path} to={path} isActive={isActive}>
    {typeof children === "string" ? (
      <Typography
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {children}
      </Typography>
    ) : (
      children
    )}
  </StyledLink>
);

export default CustomLink;

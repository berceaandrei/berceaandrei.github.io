import { useTheme, useMediaQuery } from "@mui/material";

export const useBreakpoints = () => {
  const theme = useTheme();
  const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));

  let isSmallMobile = false;
  let isMobile = false;
  let isTablet = false;
  let isDesktop = false;

  if (isAboveLg) {
    isDesktop = true;
  } else if (isAboveSm) {
    isTablet = true;
  } else isMobile = true;

  return { isMobile, isTablet, isDesktop };
};

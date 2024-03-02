import { css, styled, Box } from "@mui/material";

export const StyledBox = styled(Box)(
  () => css`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 50px;
    align-items: center;
    
    padding: 0;
    border-radius: 30px;
    background-color: #fbfbfb;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  `
);

export const LinksBox = styled(Box)(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #fbfbfb;
    justify-content: space-around;
    align-items: center;
    min-width: 375px;
    border-radius: 30px;
  `
);

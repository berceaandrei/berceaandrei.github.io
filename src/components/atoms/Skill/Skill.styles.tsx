import { css, styled, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(
  () => css`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 30px;
    display: inline-block;
    text-align: center;
    background-color: white;
  `
);

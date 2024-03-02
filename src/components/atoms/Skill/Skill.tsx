import React from "react";
import { Typography } from "@mui/material";
import { StyledPaper } from "./Skill.styles";

export interface SkillProps {
  name: string;
  fontSize: string;
  color?: string;
  shadow?: boolean;
}

const Skill: React.FC<SkillProps> = ({ name, fontSize, color, shadow }) => {
  const textStyle: React.CSSProperties = {
    fontFamily: "Cocogoose",
    fontWeight: "bolder",
  };

  return (
    <StyledPaper elevation={5}>
      <Typography style={textStyle} color={color} fontSize={fontSize}>
        {name}
      </Typography>
    </StyledPaper>
  );
};

export default Skill;

import React from "react";
import { Typography, Divider } from "@mui/material";
import { Skill } from "../../atoms/Skill";
import { Box, Stack } from "@mui/system";
import { useBreakpoints } from "../../../hooks/useBreakpoints";

export interface SkillListProps {
  title: string;
  text?: string;
}

const SkillList: React.FC<SkillListProps> = ({ title, text }) => {
  const { isMobile, isTablet } = useBreakpoints();
  return (
    <>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Cocogoose",
          fontSize: isMobile ? "25px" : isTablet ? "35px" : "35px",
          textAlign: "justify",
          marginBottom: "25px",
          color: "#600d2a",
        }}
      >
        {title}
      </Typography>

      <Typography
        style={{
          fontFamily: "Inter-medium",
          fontSize: isMobile ? "15px" : isTablet ? "18px" : "22px",
          color: "#600d2a",
          fontWeight: "100",
          textAlign: "justify",
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default SkillList;

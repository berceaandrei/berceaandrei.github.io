import React from "react";
import { Typography, Divider } from "@mui/material";
import { Skill } from "../../atoms/Skill";
import { Box, Stack } from "@mui/system";

export interface SkillListProps {
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <Stack>
      <Box display="flex" flexWrap="wrap" gap="7px" marginLeft="20px">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill}
            fontSize="15px"
            color="#000000"
            shadow={true}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default SkillList;

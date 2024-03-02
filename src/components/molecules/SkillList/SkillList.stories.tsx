import type { Meta, StoryObj } from "@storybook/react";
import SkillList from "./SkillList";

export default {
  component: SkillList,
  title: "Molecules/Skill List",
} as Meta;

type SkillListStory = StoryObj<typeof SkillList>;

export const Default = {
  args: {
    title: "Skills",
    skills: ["React", "MUI", "TypeScript", "C++", "JS", "Python", "Redux"],
  },
} as SkillListStory;

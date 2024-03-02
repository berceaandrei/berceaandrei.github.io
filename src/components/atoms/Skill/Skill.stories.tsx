import type { Meta, StoryObj } from "@storybook/react";
import Skill from "./Skill";

export default {
  component: Skill,
  title: "Atoms/Skill",
} as Meta;

type SkillStory = StoryObj<typeof Skill>;

export const Default = {
  args: {
    name: "React",
  },
} as SkillStory;

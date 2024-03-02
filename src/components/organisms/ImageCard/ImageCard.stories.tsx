import type { Meta, StoryObj } from "@storybook/react";
import ImageCard from "./ImageCard";

export default {
  component: ImageCard,
  title: "Organisms/ImageCard",
} as Meta;

type ImageCardStory = StoryObj<typeof ImageCard>;

export const Default = {
  args: {
    title: "SMARTspend",
    text: "Application that helps students manage their money and spend smartly.",
    imageUrl:
      "https://mondo.com/wp-content/uploads/2022/12/does-canva-take-the-place-of-a-graphic-designer-2022.jpg-.jpg",
    technologies: ["React.js", "Storybook", "MUI"],
  },
} as ImageCardStory;

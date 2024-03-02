import type { Meta, StoryObj } from "@storybook/react";
import Certification from "./Certifications";

export default {
  component: Certification,
  title: "Molecules/Certification",
} as Meta;

type CertificationStory = StoryObj<typeof Certification>;

export const Default = {
  args: {
    title: "Certification Title",
    subtitle: "Certification Subtitle",
    link: "https://github.com/andibercea",
  },
} as CertificationStory;

import type { Meta, StoryObj } from "@storybook/react";
import PhoneModal from "./PhoneModal";

export default {
  component: PhoneModal,
  title: "Molecules/Phone Modal",
} as Meta;

type PhoneModalStory = StoryObj<typeof PhoneModal>;

export const Default = {
  args: {
    phoneNumber: "+40752242470",
    
  },
} as PhoneModalStory;

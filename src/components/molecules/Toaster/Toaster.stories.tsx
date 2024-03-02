import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomSnackbar from "./Toaster";

export default {
  component: CustomSnackbar,
  title: "Molecules/Toaster",
} as Meta;

type ToasterStory = StoryObj<typeof CustomSnackbar>;

export const Default = {
  args: {
    open: true,
    message: "Message sent successfully!",
    severity: "success",
  },
} as ToasterStory;

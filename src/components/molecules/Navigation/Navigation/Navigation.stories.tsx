import React from "react";
import Navigation, { NavigationProps } from "./Navigation";
import { Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "molecules/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        {Story()}
      </MemoryRouter>
    ),
  ],
} as Meta;

const NavigationStory: React.FC<NavigationProps> = (args) => (
  <Navigation {...args} />
);

export const Default: React.FC<NavigationProps> = () => (
  <NavigationStory
    textLink1="Home"
    textLink2="About me"
    textLink3="Projects"
    textLink4="Contact"
  />
);

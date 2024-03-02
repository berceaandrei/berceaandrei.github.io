import type { Meta, StoryObj } from "@storybook/react";
import SpotifyPaper from "./SpotifyPaper";

export default {
  component: SpotifyPaper,
  title: "Molecules/Spotify Paper",
} as Meta;

type TimelineStory = StoryObj<typeof SpotifyPaper>;

export const Default = {} as TimelineStory;

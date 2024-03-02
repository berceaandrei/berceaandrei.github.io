import type { Meta, StoryObj } from "@storybook/react";
import Timeline from "./Timeline";

export default {
  component: Timeline,
  title: "Molecules/Timeline",
} as Meta;

type TimelineStory = StoryObj<typeof Timeline>;

export const Default = {
  args: {
    titles: ['"Babeș Bolyai" University', '"Unirea" National College'],
    subtitles: ["xxx", "subtitle2"],
    times: ["2017-2021", "2021-2024"],
    descriptions: ["very cool", "amazing and nice"],
  },
} as TimelineStory;

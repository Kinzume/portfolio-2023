import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Intro from "../components/Intro/Intro";

export default {
  title: "Portfolio/Intro",
  component: Intro,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = () => <Intro />;

export const Primary = Template.bind({});

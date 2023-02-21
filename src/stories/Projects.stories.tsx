import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Project, SmallProject } from "../components/Projects/Project";
import { Featured, All } from "../components/Projects/Projects";

import src1 from "../../public/storybook/example-src-1.png";
import src2 from "../../public/storybook/example-src-2.png";
import src3 from "../../public/storybook/example-src-3.png";

export default {
  title: "Portfolio/Projects",
  component: Featured,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Featured>;

const ProjectTemplate: ComponentStory<typeof Project> = () => (
  <Project
    images={[src1, src2, src3]}
    title={"Final Fantasy XIV Player Character Search Tool"}
    skills={["React", "MUI", "APIs"]}
    description={
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, recusandae!"
    }
    date={"Dec 2022"}
    slug={"/"}
  />
);
export const Single = ProjectTemplate.bind({});
Single.storyName = "Single Featured Project";

const FeaturedTemplate: ComponentStory<typeof Featured> = () => <Featured />;
export const Multiple = FeaturedTemplate.bind({});
Multiple.storyName = "Multiple Featured Projects";

const SmallProjectsTemplate: ComponentStory<typeof SmallProject> = () => (
  <SmallProject
    src={src1}
    title={"Final Fantasy XIV Player Character Search Tool"}
    skills={["React", "MUI", "APIs"]}
    date={"Dec 2022"}
    href={"https://kinzume.github.io/ffxiv-player-character-search-tool/"}
  />
);
export const SmallSingle = SmallProjectsTemplate.bind({});
SmallSingle.storyName = "Small Project";

const AllProjectsTemplate: ComponentStory<typeof All> = () => <All />;
export const SmallMultiple = AllProjectsTemplate.bind({});
SmallMultiple.storyName = "Small Projects";

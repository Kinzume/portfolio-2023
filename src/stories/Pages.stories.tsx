import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Home from "../pages/index";
import AllProjects from "../pages/all-projects";
import Project1 from "../pages/projects/user-dashboard";
import Project2 from "../pages/projects/bespoke-collaboration-portfolio";
import Project3 from "../pages/projects/technical-portfolio";
import Project4 from "../pages/projects/ffxiv-item-search";

export default {
  title: "Portfolio/Pages",
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Home>;

const HomeTemplate: ComponentStory<typeof Home> = () => <Home />;
const AllProjectsTemplate: ComponentStory<typeof AllProjects> = () => (
  <AllProjects />
);
const Project1Template: ComponentStory<typeof Project1> = () => <Project1 />;
const Project2Template: ComponentStory<typeof Project2> = () => <Project2 />;
const Project3Template: ComponentStory<typeof Project3> = () => <Project3 />;
const Project4Template: ComponentStory<typeof Project4> = () => <Project4 />;

export const HomePage = HomeTemplate.bind({});
HomePage.storyName = "Home Page";
export const AllProjectsPage = AllProjectsTemplate.bind({});
AllProjectsPage.storyName = "All Projects Page";
export const Project1Page = Project1Template.bind({});
Project1Page.storyName = "User Dashboard";
export const Project2Page = Project2Template.bind({});
Project2Page.storyName = "Bespoke Collaboration Portfolio";
export const Project3Page = Project3Template.bind({});
Project3Page.storyName = "Technical Portfolio";
export const Project4Page = Project4Template.bind({});
Project4Page.storyName = "Final Fantasy XIV Item Search";

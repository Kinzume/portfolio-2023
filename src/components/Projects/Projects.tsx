import { Project, SmallProject } from "./Project";
import Button from "@mui/material/Button";

import dashboard1 from "../../../public/project-images/all-projects/dashboard-1.png";
import dashboard2 from "../../../public/project-images/all-projects/dashboard-2.png";
import dashboard3 from "../../../public/project-images/all-projects/dashboard-3.png";

import hamworks1 from "../../../public/project-images/all-projects/hamworks-1.png";
import hamworks2 from "../../../public/project-images/all-projects/hamworks-2.png";
import hamworks3 from "../../../public/project-images/all-projects/hamworks-3.png";

import portfolio1 from "../../../public/project-images/all-projects/portfolio-1.png";
import portfolio2 from "../../../public/project-images/all-projects/portfolio-2.png";
import portfolio3 from "../../../public/project-images/all-projects/portfolio-3.png";

import search1 from "../../../public/project-images/all-projects/search-1.png";
import search2 from "../../../public/project-images/all-projects/search-2.png";
import search3 from "../../../public/project-images/all-projects/search-3.png";

import bootstrap from "../../../public/project-images/all-projects/bootstrap.png";
import calculator from "../../../public/project-images/all-projects/calculator.png";
import linkedin from "../../../public/project-images/all-projects/linkedin.png";
import playersearch from "../../../public/project-images/all-projects/playersearch.png";
import pokedex from "../../../public/project-images/all-projects/pokedex.png";
import portfoliodmf from "../../../public/project-images/all-projects/portfolio.png";
import rating from "../../../public/project-images/all-projects/rating.png";
import sass from "../../../public/project-images/all-projects/sass.png";
import space from "../../../public/project-images/all-projects/space.png";

export function Featured() {
  return (
    <section className="container mx-auto">
      <h2 className="mb-6 select-none text-3xl font-medium text-typography sm:text-center sm:text-4xl">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-y-4 sm:items-center lg:flex-row lg:flex-wrap lg:justify-center lg:gap-y-6 lg:gap-x-8">
        {FEATURED?.data?.map((project) => (
          <Project
            key={project.title}
            images={project.images}
            title={project.title}
            skills={project.skills}
            description={project.description}
            date={project.date}
            slug={project.slug}
          />
        ))}
      </div>
      <div className="mx-auto mt-4 w-fit">
        <Button
          href="/all-projects"
          variant="outlined"
          sx={{
            color: "#dadada",
            borderColor: "#dadada",
            "&:hover": {
              bgcolor: "#ffffff0f",
              border: "1px solid #6cefa4",
              "& .MuiButton-endIcon": {
                color: "#6cefa4",
              },
            },
            mb: 2,
          }}
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
}
const FEATURED = {
  data: [
    {
      images: [dashboard1, dashboard2, dashboard3],
      title: "User Dashboard",
      skills: ["React", "MUI", "APIs", "Vite"],
      description:
        "A user interface comprised of multiple widgets displaying different data points for monitoring client management",
      date: "Jan 2023",
      slug: "user-dashboard",
    },
    {
      images: [hamworks1, hamworks2, hamworks3],
      title: "Bespoke Collaboration Portfolio",
      skills: ["React", "Next.js", "Tailwind", "Figma"],
      description:
        "A live portfolio website designed to specification for a 3D artist with a dedicated contact form section",
      date: "Nov 2022",
      slug: "bespoke-collaboration-portfolio",
    },
    {
      images: [portfolio1, portfolio2, portfolio3],
      title: "Technical Portfolio",
      skills: ["React", "Next.js", "Tailwind"],
      description:
        "An earlier version of my portfolio showcasing projects that I completed at the start of my career",
      date: "Feb 2022 - Feb 2023",
      slug: "technical-portfolio",
    },
    {
      images: [search1, search2, search3],
      title: "Final Fantasy XIV Item Search",
      skills: ["React", "MUI", "APIs", "Vite"],
      description:
        "A website created with search and filter functionalities to display items contained in the XIVAPI database",
      date: "Jan 2023",
      slug: "ffxiv-item-search",
    },
  ],
};

export function All() {
  return (
    <section className="container mx-auto">
      <h2 className="mb-6 select-none text-3xl font-medium text-typography sm:text-center sm:text-4xl">
        All Projects
      </h2>
      <div className="flex flex-col gap-y-4 sm:items-center lg:flex-row lg:flex-wrap lg:justify-center lg:gap-y-6 lg:gap-x-8">
        {ALL?.data?.map((project) => (
          <SmallProject
            key={project.title}
            src={project.src}
            title={project.title}
            skills={project.skills}
            date={project.date}
            href={project.href}
          />
        ))}
      </div>
      <div className="mx-auto mt-4 w-fit">
        <Button
          href="../"
          variant="outlined"
          sx={{
            color: "#dadada",
            borderColor: "#dadada",
            "&:hover": {
              bgcolor: "#ffffff0f",
              border: "1px solid #6cefa4",
              "& .MuiButton-endIcon": {
                color: "#6cefa4",
              },
            },
            mb: 2,
          }}
        >
          Back to featured
        </Button>
      </div>
    </section>
  );
}
const ALL = {
  data: [
    {
      src: portfolio1,
      title: "Technical Portfolio",
      skills: ["React", "Next.js", "Tailwind"],
      date: "Feb 2022 - Feb 2023",
      href: "https://portfolio-nextjs-kinzume.vercel.app/",
    },
    {
      src: dashboard1,
      title: "User Dashboard",
      skills: ["React", "MUI", "APIs", "Vite"],
      date: "Jan 2023",
      href: "https://kinzume.github.io/user-dashboard/",
    },
    {
      src: search1,
      title: "Final Fantasy XIV Item Search",
      skills: ["React", "MUI", "APIs", "Vite"],
      date: "Jan 2023",
      href: "https://kinzume.github.io/ffxiv-item-search-tool/",
    },
    {
      src: playersearch,
      title: "Final Fantasy XIV Player Search",
      skills: ["React", "MUI", "APIs", "Vite"],
      date: "Dec 2022 -Jan 2023",
      href: "https://kinzume.github.io/ffxiv-player-character-search-tool/",
    },
    {
      src: hamworks1,
      title: "Bespoke Collaboration Portfolio",
      skills: ["React", "Next.js", "Tailwind", "Figma"],
      date: "Nov 2022",
      href: "https://hamworks.vercel.app/",
    },
    {
      src: pokedex,
      title: "Pokedex",
      skills: ["HTML", "CSS", "JavaScript"],
      date: "Sep 2022 - Nov 2022",
      href: "https://kinzume.github.io/pokedex/",
    },
    {
      src: bootstrap,
      title: "Bootcamp Landing Page",
      skills: ["Bootstrap 5"],
      date: "Oct 2022",
      href: "https://kinzume.github.io/landing-page-bootstrap/",
    },
    {
      src: linkedin,
      title: "LinkedIn Clone",
      skills: ["React", "Redux", "Firebase"],
      date: "Oct 2022",
      href: "https://linkedin-clone-79b33.web.app/",
    },
    {
      src: space,
      title: "Space Tourism Website",
      skills: ["HTML", "CSS", "JavaScript"],
      date: "May 2022 - Jun 2022",
      href: "https://kinzume.github.io/space-tourism-website-main/",
    },
    {
      src: sass,
      title: "Responsive Website",
      skills: ["Sass", "Scss"],
      date: "May 2022",
      href: "https://kinzume.github.io/sass-practice/",
    },
    {
      src: calculator,
      title: "Calculator",
      skills: ["HTML", "CSS", "JavaScript"],
      date: "Apr 2022",
      href: "https://kinzume.github.io/calculator-javascript/",
    },
    {
      src: rating,
      title: "Interactive Rating Component",
      skills: ["HTML", "CSS", "JavaScript"],
      date: "Apr 2022",
      href: "https://kinzume.github.io/interactive-rating-component-main/",
    },
    {
      src: portfoliodmf,
      title: "Personal Portfolio",
      skills: ["HTML", "CSS"],
      date: "Mar 2022",
      href: "https://kinzume.github.io/portfolio-dmf/",
    },
  ],
};

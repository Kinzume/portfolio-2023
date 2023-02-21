import {
  PageHead,
  Main,
  Article,
  H1AndDate,
  ImageWithCaption,
  H2,
  StyledLink,
  A,
  Section,
  CallToActions,
  Return,
} from "../../components/Utils/index";

import portfolio2 from "../../../public/project-images/all-projects/portfolio-2.png";
import homemobile from "../../../public/project-images/article-images/portfolio/home-mobile.png";
import hometablet from "../../../public/project-images/article-images/portfolio/home-tablet.png";
import projectdesktop from "../../../public/project-images/article-images/portfolio/project-desktop.png";
import projectmobile from "../../../public/project-images/article-images/portfolio/project-mobile.png";
import projecttablet from "../../../public/project-images/article-images/portfolio/project-tablet.png";

export default function Page() {
  return (
    <>
      <PageHead
        title="Portfolio 2022/23"
        description="A closer look at Leander's portfolio for 2022/23"
      />
      <Main>
        <Article>
          <section>
            <H1AndDate
              h1="2022/23 Portfolio"
              date="Feb 2022 – Feb 2023"
            />
            <CallToActions
              siteHref="https://portfolio-nextjs-kinzume.vercel.app/"
              repoHref="https://github.com/Kinzume/portfolio-nextjs"
            />
            <div className="mb-2 flex h-[315px] gap-x-2">
              <ImageWithCaption
                src={homemobile}
                alt="A screenshot of the portfolio on mobile dimensions."
                caption=""
              />
              <ImageWithCaption
                src={hometablet}
                alt="A screenshot of the portfolio on mobile dimensions."
                caption=""
              />
            </div>
            <ImageWithCaption
              src={portfolio2}
              alt="A screenshot of the portfolio on desktop dimensions."
              caption="The home page on different screen sizes"
            />
          </section>
          <Section>
            <H2 h2="Overview" />
            <p>
              {
                "The portfolio documents and follows my continuous personal development in Web Development since February 2022, when I first began teaching myself HTML and CSS. The website contains reflective summaries on some of my favourite projects and allows me to showcase all completed projects to date."
              }
            </p>
            <p>
              {
                "I learnt the basics of React, Next.js and Tailwind by building this website."
              }
            </p>
          </Section>
          <Section>
            <H2 h2="Website Design and Features" />
            <p>
              {"The original design was based on "}
              <A
                href="https://www.youtube.com/watch?v=CMx51wpd7g4"
                a="this tutorial"
              />
              {" by "}
              <A
                href="https://www.youtube.com/@codecommerce"
                a="Code Commerce"
              />
              {
                ". As I completed more projects and deepened by understanding of React and Tailwind, I made many design changes. Recently, I took inspiration from "
              }
              <A
                href="https://thehackershideout.com/"
                a="ForrestKnight’s portfolio"
              />
              {" and changed the structure of my website."}
            </p>
            <div className="py-4">
              <div className="mb-2 flex gap-x-2">
                <ImageWithCaption
                  src={projecttablet}
                  alt="A screenshot of the pokedex project page on mobile dimensions."
                  caption=""
                />
                <ImageWithCaption
                  src={projectmobile}
                  alt="A screenshot of the pokedex project page on mobile dimensions."
                  caption=""
                />
              </div>
              <ImageWithCaption
                src={projectdesktop}
                alt="A screenshot of the pokedex project page on desktop dimensions."
                caption="My pokedex project page on different screen sizes"
              />
            </div>
          </Section>
          <Section>
            <H2 h2="Challenges" />
            <p>{"The main challenges were:"}</p>
            <ul className="list-disc">
              <li className="ml-6">
                <p>
                  {
                    "Understanding the fundamentals of React - Components, Props and State"
                  }
                </p>
              </li>
              <li className="ml-6">
                <p>
                  {
                    "Understanding how to use the pages directory and routing in Next"
                  }
                </p>
              </li>
              <li className="ml-6">
                <p>{"Understanding how to setup and use Tailwind"}</p>
              </li>
            </ul>
            <p>{"Here are some of the resources I used:"}</p>
            <ul className="list-disc">
              <li className="ml-6">
                <p>
                  {"The "}
                  <A
                    href="https://beta.reactjs.org/"
                    a="Beta React documentation"
                  />
                  {
                    " is a good starting point for learning the fundamentals. At the time of writing, the “Learn React” section is 99% finished and the API reference is 100% finished."
                  }
                </p>
                <p>
                  {
                    "If you want to see React used in a project, I recommend watching "
                  }
                  <A
                    href="https://www.youtube.com/@javascriptmastery"
                    a="JavaScript Mastery's"
                  />
                  {
                    " videos. The projects show common practices of writing React code and use third-party APIs, UI libraries and even backend technologies."
                  }
                </p>
              </li>
              <li className="ml-6">
                <p>
                  {"Vercel, the creators and maintainers of Next.js, have "}
                  <A
                    href="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website"
                    a="documentation"
                  />
                  {
                    " on the basics of React and Next.js, as well as what features Next.js offers on top of the core React library. JavaScript Mastery also has a few videos on using Next.js in projects."
                  }
                </p>
              </li>
              <li className="ml-6">
                <p>
                  {"Tailwind also has "}
                  <A
                    href="https://tailwindcss.com/"
                    a="documentation"
                  />
                  {" on how to setup and implement Tailwind into projects."}
                </p>
              </li>
            </ul>
            <p>
              {
                "I find a combination of reading the documentation, following project-based tutorials and, most importantly, building your own websites to be an effective way to learn. By building "
              }
              <StyledLink
                content="Hamworks"
                href={"/projects/hamworks"}
              />
              {
                " I became comfortable with React, Next.js and Tailwind since I was able to apply what I learnt from Code Commerce’s portfolio tutorial."
              }
            </p>
            <p>
              {"To gain more experience with React, I recently built "}
              <StyledLink
                href="/projects/ffxiv-item-search-tool"
                content="Final Fantasy XIV tools"
              />
              {" for finding players and characters, and a "}
              <StyledLink
                href="/projects/user-dashboard"
                content="user dashboard"
              />
              {". I also used these projects to learn MUI."}
            </p>
          </Section>
          <Section>
            <H2 h2="Future Features" />
            <p>
              {"I’ve recently remade my portfolio for 2023 which you can view "}
              <A
                a="here"
                href="https://www.leanderabaya.com/"
              />
              {"."}
            </p>
          </Section>
          <Return />
        </Article>
      </Main>
    </>
  );
}

import {
  PageHead,
  Main,
  Article,
  H1AndDate,
  ImageWithCaption,
  H2,
  A,
  Section,
  CallToActions,
  Return,
} from "../../components/Utils/index";

import dashboard1 from "../../../public/project-images/all-projects/dashboard-1.png";
import dashboardmobile from "../../../public/project-images/article-images/dashboard/dashboard-mobile.png";
import dashboardtablet from "../../../public/project-images/article-images/dashboard/dashboard-tablet.png";
import minimalloginpage from "../../../public/project-images/article-images/dashboard/minimal-login-page.png";
import minimaltemplate from "../../../public/project-images/article-images/dashboard/minimal-template.png";
import inspectelement from "../../../public/project-images/article-images/dashboard/inspect-element.png";
import tserror from "../../../public/project-images/article-images/dashboard/ts-error.png";
import fcwithproptypes from "../../../public/project-images/article-images/dashboard/fc-with-prop-types.png";

export default function Page() {
  return (
    <>
      <PageHead
        title="User Dashboard"
        description="A closer look at the user dashboard application"
      />
      <Main>
        <Article>
          <section>
            <H1AndDate
              h1="User Dashboard"
              date="Jan 2023"
            />
            <CallToActions
              siteHref="https://kinzume.github.io/user-dashboard/"
              repoHref="https://github.com/Kinzume/user-dashboard"
            />
            <div className="mb-2 flex gap-x-2">
              <ImageWithCaption
                src={dashboardtablet}
                alt="A screenshot of the user dashboard on tablet dimensions."
                caption=""
              />
              <ImageWithCaption
                src={dashboardmobile}
                alt="A screenshot of the user dashboard on mobile dimensions."
                caption=""
              />
            </div>
            <ImageWithCaption
              src={dashboard1}
              alt="A screenshot of the user dashboard interface on desktop dimensions."
              caption="The user dashboard interface on different screen sizes"
            />
          </section>
          <Section>
            <H2 h2="Overview" />
            <p>
              {
                "The dashboard website application, if applied live, allows users to view real-time data about the engagement of their clients. Building this website deepened my knowledge of the components and utilities available within Material UI (MUI). I also gained experience adding type safety to the codebase with TypeScript."
              }
            </p>
          </Section>
          <Section>
            <H2 h2="Website Design" />
            <p>
              {
                "The widgets from the dashboard are heavily based off an MUI website template from "
              }
              <A
                a="Minimal"
                href="https://minimals.cc/"
              />
              {
                ". If you navigate to the homepage and click on “live preview”, you will be prompted to login to the dashboard. You don’t need to register for an account and you can login using the demo username and password."
              }
            </p>
            <div className="space-y-2 py-4">
              <ImageWithCaption
                src={minimalloginpage}
                alt="A screenshot of the minimal login page."
                caption=""
              />
              <ImageWithCaption
                src={minimaltemplate}
                alt="A screenshot of the minimal dashboard app."
                caption="Use the login details to access Minimal's dashboard template"
              />
            </div>
            <p>
              {
                "I analysed the CSS classes in the template’s markup, which revealed all the MUI components that were being used as well as other libraries such as Apex Charts and React Slick. Using this information, I learnt the basics of these libraries to build my own version of each widget from the template."
              }
            </p>
            <div className="pt-2">
              <ImageWithCaption
                src={inspectelement}
                alt="A screenshot showing an HTML element being highlighted in Google Chrome's DevTools. The highlighted element shows what CSS classes are being applied."
                caption="In this example, we can see this element is using MUI's Paper Component which is wrapping a React Slick component"
              />
            </div>
          </Section>
          <Section>
            <H2 h2="Challenges" />
            <p>
              {
                "The most challenging part of the project was rectifying the errors highlighted by the TypeScript compiler. One example of such errors included the incorrect definition of prop types for function components, which was something I wasn’t familiar with nor had encountered before. To solve this, I searched for “React TypeScript” on Google and found "
              }
              <A
                a="React TypeScript Cheatsheets"
                href="https://react-typescript-cheatsheet.netlify.app/"
              />
              {". I used "}
              <A
                a="this page"
                href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components"
              />
              {
                " to ensure all my components had their prop types correctly defined."
              }
            </p>
            <div className="space-y-2 py-4">
              <ImageWithCaption
                src={tserror}
                alt="A screenshot showing an error highlighted by the TypeScript compiler which says 'Binding element 'rating' implicitly has 'any' type."
                caption="Props without types"
              />
              <ImageWithCaption
                src={fcwithproptypes}
                alt="A screenshot showing a React function component called App which has typed props."
                caption="Props with types"
              />
            </div>
          </Section>
          <Section>
            <H2 h2="Future Features" />
            <p>
              {
                "I’d like to add the ability for users to login by building a backend with Express and MongoDB, similar to Minimal’s login feature."
              }
            </p>
          </Section>
          <Return />
        </Article>
      </Main>
    </>
  );
}

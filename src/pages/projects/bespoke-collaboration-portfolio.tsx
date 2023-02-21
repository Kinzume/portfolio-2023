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

import hamworks1 from "../../../public/project-images/all-projects/hamworks-1.png";
import hamworks2 from "../../../public/project-images/all-projects/hamworks-2.png";
import hamworks3 from "../../../public/project-images/all-projects/hamworks-3.png";
import hamworkstablet from "../../../public/project-images/article-images/hamworks/hamworks-tablet.png";
import hamworksmobile from "../../../public/project-images/article-images/hamworks/hamworks-mobile.png";
import strtsphr from "../../../public/project-images/article-images/hamworks/strtsphr.png";
import ailishabbey from "../../../public/project-images/article-images/hamworks/ailishabbey.png";
import studiopicapixels from "../../../public/project-images/article-images/hamworks/studiopicapixels.png";
import figma1 from "../../../public/project-images/article-images/hamworks/figma-1.png";
import figma2 from "../../../public/project-images/article-images/hamworks/figma-2.png";
import mockup from "../../../public/project-images/article-images/hamworks/mockup.png";
import mockup2 from "../../../public/project-images/article-images/hamworks/mockup2.png";
import mockupvswebsite from "../../../public/project-images/article-images/hamworks/mockup-vs-website.png";
import devtools from "../../../public/project-images/article-images/hamworks/devtools.png";
import vscode from "../../../public/project-images/article-images/hamworks/vscode.png";

export default function Page() {
  return (
    <>
      <PageHead
        title="Hamworks"
        description="A closer look at Hamworks"
      />
      <Main>
        <Article>
          <section>
            <H1AndDate
              h1="Hamworks"
              date="Nov 2022"
            />
            <CallToActions
              siteHref="https://hamworks.vercel.app/"
              repoHref="https://github.com/Kinzume/hamworks"
            />
            <div className="mb-2 flex gap-x-2">
              <ImageWithCaption
                src={hamworksmobile}
                alt="A screenshot of Hamworks on mobile dimensions."
                caption=""
              />
              <ImageWithCaption
                src={hamworkstablet}
                alt="A screenshot of Hamworks on tablet dimensions."
                caption=""
              />
            </div>
            <ImageWithCaption
              src={hamworks1}
              alt="A screenshot of Hamworks on desktop dimensions."
              caption="Hamworks on different screen sizes"
            />
          </section>
          <Section>
            <H2 h2="Overview" />
            <p>
              {
                "Hamworks is a visual project that was the result of a collaboration between James Currie (3D Artist) and me. The main purpose of the website is to showcase James’ 3D renders and provide a way to contact him. You can find some more of his work "
              }
              <A
                href="https://www.artstation.com/james_alc"
                a="here"
              />
              {
                ". Building this website enriched my experience with implementing Tailwind."
              }
            </p>
          </Section>
          <Section>
            <H2 h2="Website Planning" />
            <p>
              {
                "I made a Figma file to facilitate planning, which involved deciding what content to include, the website design and layout. This became the basis of our mood board compilations and general communications. Here, James created a checklist of the specific features he wanted to be added, and I created my own list of the tasks I had ongoing or completed."
              }
            </p>
            <div className="space-y-2 py-4">
              <ImageWithCaption
                src={figma1}
                alt="A screenshot of the figma file canvas zoomed out showing various panels with writing and images for inspiration."
                caption=""
              />
              <ImageWithCaption
                src={figma2}
                alt="A screenshot of the figma file canvas showing early versions of the Hamworks introduction section and the contact form."
                caption="Screenshots of the figma file"
              />
            </div>
            <p>{" We took inspiration from several sites:"}</p>
            <ul className="list-disc">
              <li className="ml-6 space-y-2 py-2">
                <A
                  href="https://strtsphr.net/exodus/"
                  a="Statosphere"
                />
                <ImageWithCaption
                  src={strtsphr}
                  alt="A screenshot of the introduction section on the Stratosphere website on desktop dimensions."
                  caption=""
                />
                <ImageWithCaption
                  src={hamworks1}
                  alt="A screenshot of the introduction section on the Hamworks website on desktop dimensions."
                  caption=""
                />
              </li>
              <li className="ml-6 space-y-2 py-2">
                <A
                  href="https://www.ailishabbey.com/"
                  a="Tomoya Suzuki"
                />
                <ImageWithCaption
                  src={ailishabbey}
                  alt="A screenshot of the projects section on the Tomoya Suzuki website on desktop dimensions."
                  caption=""
                />
                <ImageWithCaption
                  src={hamworks2}
                  alt="A screenshot of the projects section on the Hamworks website on desktop dimensions."
                  caption=""
                />
              </li>
              <li className="ml-6 space-y-2 py-2">
                <A
                  href="https://studiopicapixels.com/"
                  a="Studio Picapixels"
                />
                <ImageWithCaption
                  src={studiopicapixels}
                  alt="A screenshot of the about section on the Studio Picapixels website on desktop dimensions."
                  caption=""
                />
                <ImageWithCaption
                  src={hamworks3}
                  alt="A screenshot of the about section and contact form on the Hamworks website on desktop dimensions."
                  caption=""
                />
              </li>
            </ul>
            <p>
              {
                "After the initial planning James made a mockup of the website for desktop screens."
              }
            </p>
            <div className="space-y-2 py-4">
              <ImageWithCaption
                src={mockup}
                alt="A screenshot of the mockup showing the introduction and projects."
                caption=""
              />
              <ImageWithCaption
                src={mockup2}
                alt="A screenshot of the mockup showing the projects, about section, contact form and footer."
                caption=""
              />
            </div>
          </Section>
          <Section>
            <H2 h2="Challenges" />
            <p>
              {
                "The main challenge was understanding how to use and debug Tailwind code in React components. Using my portfolio’s Tailwind code as a reference and the Tailwind documentation, I made each section of the mockup into separate components."
              }
            </p>
            <div className="py-4">
              <ImageWithCaption
                src={vscode}
                alt="A screenshot of the source code showing a React function component called Project."
                caption="Tailwind code is written inside the className prop which compiles to CSS code in the browser"
              />
            </div>
            <p>
              {
                "I used DevTools to debug visual differences between the output CSS code and the mockup, and I saved my fixes by editing the corresponding Tailwind code."
              }
            </p>
            <div className="py-4">
              <ImageWithCaption
                src={devtools}
                alt="A screenshot "
                caption="You can change the output CSS directly inside the browser using DevTools"
              />
            </div>
            <p>
              {
                "By using this method, I accurately translated James’ mockup into a functioning website with responsiveness on mobile and tablet devices."
              }
            </p>
            <div className="pt-4">
              <ImageWithCaption
                src={mockupvswebsite}
                alt="A screenshot of the figma file showing 4 panels: the first panel shows the mockup, the second panel shows the website on desktop dimensions, the third panel shows the website on tablet dimensions and the fourth panel shows the website on mobile dimensions."
                caption="The leftmost panel is the mockup and the other 3 panels are screenshots of the website on different dimensions"
              />
            </div>
          </Section>
          <Section>
            <H2 h2="Future Features" />
            <p>
              {
                "In the future we will be adding a blog section using a headless CMS and the ability to view James’ 3D renders within the browser with Three.js. We are also looking to add some motion graphics, animations and interactive decorations using Framer Motion. I am also going to refactor the Tailwind code using the "
              }
              <A
                href="https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier"
                a="official prettier extension"
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

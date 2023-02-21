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

import search1 from "../../../public/project-images/all-projects/search-1.png";
import search2 from "../../../public/project-images/all-projects/search-2.png";
import search3 from "../../../public/project-images/all-projects/search-3.png";
import searchtablet from "../../../public/project-images/article-images/search/search-tablet.png";
import searchmobile from "../../../public/project-images/article-images/search/search-mobile.png";
import ingamemb from "../../../public/project-images/article-images/search/ffxiv_17022023_124446_633.png";
import ingamemb2 from "../../../public/project-images/article-images/search/ffxiv_17022023_130443_868.png";
import playersearch from "../../../public/project-images/article-images/search/playersearch.png";
import bug from "../../../public/project-images/article-images/search/bug.png";
import compareitems from "../../../public/project-images/article-images/search/ffxiv_17022023_133335_947.png";

export default function Page() {
  return (
    <>
      <PageHead
        title="Final Fantasy XIV Item Search Tool"
        description="A closer look at the item search tool"
      />
      <Main>
        <Article>
          <section>
            <H1AndDate
              h1="Final Fantasy XIV Item Search Tool"
              date="Dec 2022"
            />
            <CallToActions
              siteHref="https://kinzume.github.io/ffxiv-item-search-tool/"
              repoHref="https://github.com/Kinzume/ffxiv-item-search-tool"
            />
            <div className="mb-2 flex gap-x-2">
              <ImageWithCaption
                src={searchtablet}
                alt="A screenshot of the item search tool on tablet dimensions."
                caption=""
              />
              <ImageWithCaption
                src={searchmobile}
                alt="A screenshot of the item search tool on mobile dimensions."
                caption=""
              />
            </div>
            <ImageWithCaption
              src={search1}
              alt="A screenshot of the item search tool on desktop dimensions."
              caption="A screenshot of the item search tool"
            />
          </section>
          <Section>
            <H2 h2="Overview" />
            <p>
              {
                "The item search tool gives users the ability to search for items from the video game "
              }
              <A
                a="Final Fantasy XIV"
                href="https://en.wikipedia.org/wiki/Final_Fantasy_XIV"
              />
              {". For this project I used "}
              <A
                a="XIVAPI"
                href="https://xivapi.com/"
              />
              {
                ", giving me more experience consuming third party APIs. This website builds upon the skills and knowledge gained from creating the "
              }
              <A
                a="character search tool"
                href="https://kinzume.github.io/ffxiv-player-character-search-tool/"
              />
              {
                ", a similar application which lets users search for player characters. "
              }
            </p>
          </Section>
          <Section>
            <H2 h2="The Item Search UI in FFXIV" />
            <p>
              {
                "My project was inspired by the ingame interface which is used to buy and sell items."
              }
            </p>
            <div className="space-y-2 py-4">
              <ImageWithCaption
                src={ingamemb}
                alt="An ingame screenshot of the Item Search interface in FFXIV."
                caption=""
              />
              <ImageWithCaption
                src={ingamemb2}
                alt="An ingame screenshot of the Item Search interface with items matching the search term 'cuirass'."
                caption="© 2010-2023 SQUARE ENIX CO., LTD. All Rights Reserved. FINAL FANTASY XIV"
              />
            </div>
            <p>
              {
                "In my project, I reused the character search tool’s code and added an additional feature: the ability to filter items by category."
              }
            </p>

            <div className="space-y-4 py-4">
              <ImageWithCaption
                src={playersearch}
                alt="A screenshot of the player search tool application which does not have a filtering."
                caption="The player character search tool does not have filtering"
              />
              <div className="space-y-2">
                <ImageWithCaption
                  src={search2}
                  alt="A screenshot of the item search tool which does have a filtering."
                  caption=""
                />
                <ImageWithCaption
                  src={search3}
                  alt="A screenshot of the options when you click on the filter"
                  caption="Adding filter by category"
                />
              </div>
            </div>
          </Section>
          <Section>
            <H2 h2="Challenges" />
            <p>
              {
                "Implementing the filter was the main challenge as the browser would now call the API with 3 parameters: the name of the item, the item’s category and the page number. The issue was updating each parameter individually. This led to calling the API with old parameters causing unexpected behaviour."
              }
            </p>
            <p>
              {
                "To solve this problem, I grouped the parameters together into an "
              }
              <A
                a="object"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
              />
              {
                ". When one parameter is changed, for example the name, a new object is created with the updated parameter(s). For simplicity, the page number is set back to 1 whenever the user changes the name or category. The API is then called with the newly created object’s parameters and the UI is updated accordingly."
              }
            </p>
            <p>
              {
                "This fix makes the code readable and maintainable. It also allows me to easily add more parameters in the future like the level of the item. Above all the user experience is improved."
              }
            </p>
            <p>
              {
                "I rolled out the fix to both the item search tool and character search tool. You can have a look at the git commits here:"
              }
            </p>
            <ul className="list-disc">
              <li className="ml-6">
                <A
                  a="Item Search Tool Commit"
                  href="https://github.com/Kinzume/ffxiv-item-search-tool/commit/51209c6a93270244df4dc749b19b2384d2a6cdc5"
                />
              </li>
              <li className="ml-6">
                <A
                  a="Player Search Tool Commit"
                  href="https://github.com/Kinzume/ffxiv-player-character-search-tool/commit/e6b806d34b6ea1de63ce3e289d8e61669b6497c1"
                />
              </li>
            </ul>
          </Section>
          <Section>
            <H2 h2="Future Features" />
            <p>
              {
                "As mentioned, I’d like to give users the ability to filter items by their level. This would be a perfect use case for MUI’s "
              }
              <A
                a="range slider"
                href="https://mui.com/material-ui/react-slider/"
              />
              {
                " component wherein users could filter items within a certain range or by an exact number. I also want to add more information to the table and fix a bug where the description of meals is displaying incorrectly."
              }
            </p>
            <div className="py-4">
              <ImageWithCaption
                src={bug}
                alt="A screenshot showing information on Garlean Pizza in the item search tool. The description is not displaying properly."
                caption="An example of the bug with the description of meals where HTML <span> tags can be seen"
              />
            </div>
            <p>
              {
                "Another feature I’m considering is the ability for users to compare two different items, a very useful utility in FFXIV."
              }
            </p>
            <div className="py-4">
              <ImageWithCaption
                src={compareitems}
                alt="An ingame screenshot of the Item Comparison interface."
                caption="© 2010-2023 SQUARE ENIX CO., LTD. All Rights Reserved. FINAL FANTASY XIV"
              />
            </div>
          </Section>
          <Return />
        </Article>
      </Main>
    </>
  );
}

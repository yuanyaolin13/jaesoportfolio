import Thumbnail from "../../assets/wellpet/WP_thumbnail.png";
import HiFi from "../../assets/wellpet/WP_HiFi.png";
import LoFi from "../../assets/wellpet/WP_LoFi.png";
import Style from "../../assets/wellpet/WP_Style.png";
import MobileHeader from "../mobileComponents/MobileHeader.tsx";

function Project1() {
  return (
    <>
      <div className={'flex flex-col w-full'}>
        <MobileHeader />
        <section className={'flex flex-col w-full mt-8'}>
          <article className={'flex flex-col space-y-4'}>
            <img
              className='object-contain object-center w-full border-2'
              src={Thumbnail}
              alt={"thumbnail image"}
            />
            <div className={'flex flex-row'}>
              <div className={'flex flex-col text-left'}>
                <span className={'font-bold text-4xl sm:text-6xl'}>
                  WellPet
                </span>
                  <span className={'opacity-60'}>
                  Design Sprint | Fall 2024
                </span>
              </div>
              <a
                className={'ml-auto text-right text-xl underline font-bold h-full'}
                href={'https://www.figma.com/proto/WwTVBp5MkghN7VFaqhJF7G/WellPet--Forum-Post?page-id=0%3A1&node-id=1-1023&p=f&viewport=133%2C211%2C0.66&t=2KrcEzJxEEpiQ4Xk-1&scaling=min-zoom&content-scaling=fixed'}>
                <span className={'w-full h-full'}>
                 View Prototype &rarr;
                </span>
              </a>
            </div>

            <div className={'flex flex-col items-center space-y-2'}>
              <span className={'font-bold text-4xl'}>Overview</span>
              <div className={'flex flex-row space-x-4'}>
                <div className={'flex flex-col w-1/3'}>
                  <span className={'font-bold'}>ROLE</span>
                  <span>UI/UX Researcher</span>
                </div>
                <div className={'flex flex-col w-1/3'}>
                  <span className={'font-bold'}>TOOLS</span>
                  <span>Figma, User Testing</span>
                </div>
                <div className={'flex flex-col w-1/3'}>
                  <span className={'font-bold'}>TIMELINE</span>
                  <span>15 Weeks</span>
                </div>
              </div>
            </div>

            <span className={'text-sm italic opacity-60'}>
              This project was done for a UNC Course, MEJO 581
            </span>
          </article>

          <article className={'flex flex-col space-y-10 mt-4'}>
            <div className={'flex flex-col text-left space-y-1'}>
              <span className={'text-3xl font-bold !tracking-normal'}>01. Brief </span>
              <span className={'text-lg'}>
                For many pet owners, organizing schedules, activities, and other chores can be a
                confusing and time-consuming process. This project aims to relieve some of that
                weight and provide resources to help pet owners and their pets lead happier and
                healthier lives.
              </span>
              <span className={'text-lg'}>
                Through interviewing several pet owners, we were able to determine several pain
                points that were relevant across several interviewees. This includes issues such
                as scheduling appointments for vet visits and vaccinations, as well as tracking
                health for pets, especially older pets.
              </span>
            </div>

            <div className={'flex flex-col text-left space-y-2'}>
              <span className={'text-3xl font-bold !tracking-normal'}>02. Empathize </span>

              <div className={'flex flex-col text-left space-y-1'}>
              <span className={'text-xl font-bold'}>
                  RESEARCH GOALS</span>
                <hr/>

                <ul className={'list-disc ml-4 w-auto'}>
                  <li>
                    <span className={'text-lg'}>Understanding of how users currently manage their pet’s care</span>
                  </li>
                  <li>
                    <span className={'text-lg'}>Identifying common challenges and frustrations that come with owning a pet</span>
                  </li>
                  <li>
                  <span className={'text-lg'}>User-generated ideas for features and solutions that would assist with organizing
                    pet healthcare needs</span>
                  </li>
                  <li>
                  <span className={'text-lg'}>Revisit the initial problem statement as a foundation, and apply the findings of
                  this research study to craft a revised problem statement that focuses on specific
                    user needs and challenges to address</span>
                  </li>
                </ul>
              </div>

              <div className={'flex flex-col text-left space-y-1'}>
              <span className={'text-xl font-bold'}>
                  SCREENING QUESTIONS</span>
                <hr/>

                <ul className={'list-disc ml-4 w-auto'}>
                  <li>
                    <span className={'text-lg'}>Do you currently own a pet? <br/> <strong>Yes (qualified) / No</strong></span>
                  </li>
                  <li>
                  <span className={'text-lg'}>Do you schedule things for your pet more than 3 times per year
                    (vet visits, grooming, kennel stays, etc.)?
                    <br/>
                    <strong>Yes (qualified) / No</strong>
                  </span>
                  </li>
                  <li>
                    <span className={'text-lg'}>12 qualified participants in total</span>
                  </li>
                </ul>
              </div>

              <div className={'flex flex-col text-left space-y-1'}>
              <span className={'text-xl font-bold'}>
                  LIMITATIONS & FINDINGS
                </span>

                <hr/>

                <span className={'text-lg font-bold'}>
                  Limitations:</span>
                <ul className={'list-disc ml-4 w-auto'}>
                  <li>
                    <span className={'text-lg'}>
                      Sample Diversity: Remote testing may limit participant pool
                    </span>
                  </li>
                  <li>
                    <span className={'text-lg'}>
                      Participant Distractions: Quality of feedback can be hindered due
                      to multitasking and other distractions
                    </span>
                  </li>
                  <li>
                    <span className={'text-lg'}>
                      Inability to clarify confusing questions to interviewees
                    </span>
                  </li>
                  <li>
                    <span className={'text-lg'}>
                      Inability to ask interviewees to expand upon their feelings after
                      answering questions
                    </span>
                  </li>
                </ul>

                <span className={'text-lg font-bold'}>
                  Findings:</span>
                <ul className={'list-disc ml-4 w-auto'}>
                  <li><span className={'text-lg'}>Difficulty with organizing documents in centralized location</span></li>
                  <li><span className={'text-lg'}>Managing shared responsibilities between multiple owners</span></li>
                  <li><span className={'text-lg'}>Older pets typically have more health issues, so owners need more help tracking those pets specific needs</span></li>
                  <li><span className={'text-lg'}>The same applies to certain breeds with inherent health risks – back problems in dachshund dogs</span></li>
                  <li><span className={'text-lg'}>Test subjects liked notification reminders for appointments and medications, including refills</span></li>
                  <li><span className={'text-lg'}>Specifically app notifications and text reminders</span></li>
                  <li><span className={'text-lg'}>Some owners struggle mentally and physically</span></li>
                  <li><span className={'text-lg'}>Pet owners want community support, or a centralized place for pet info and research</span></li>
                </ul>

              </div>

            </div>

            <div className={'flex flex-col text-left space-y-2'}>
              <span
                className={'text-3xl font-bold !tracking-normal'}>03. Low Fidelity Wireframes </span>
              <img
                className='object-contain object-center w-full border-2'
                src={LoFi}
                alt={"low fidelity wireframe image"}
              />
              <span className={'text-lg'}>
                For the Low Fidelity Wireframes, a plethora of ideas were brought up. The project
                called for three separate page designs, so the team wanted to focus on pages for
                home screens, community pages, and profiles. Through this process, a few ideas
                were passed around, such as a game-inspired app where you create a character based
                on your pet, and completing tasks gives them experience and in-game currency to
                level up and buy food and accessories for them. Another idea was a more
                health-focused app with statistics on exercise and other details. As well as some
                generic ideas for interfaces.
              </span>
            </div>

            <div className={'flex flex-col text-left space-y-2'}>
              <span
                className={'text-3xl font-bold !tracking-normal'}>04. High Fidelity Wireframes </span>
              <img
                className='object-contain object-center w-full border-2'
                src={Style}
                alt={"stylesheet image"}
              />
              <span className={'text-xl font-bold'}>
                STYLE GUIDE
              </span>
              <hr/>

              <span className={'text-lg'}>
               For this app, the team wanted to stick with a friendly, approachable, and bright
                color palette to encourage interacts between users. Therefore, I created a style
                guide with a  color palette featuring a bright trio of orange, purple, and teal.
                The guide also demonstrates serif and sans serif fonts for headings and body text
                (respectively).
              </span>
              <img
                className='object-contain object-center w-full border-2'
                src={HiFi}
                alt={"High fidelity wireframe image"}
              />
              <span className={'text-xl font-bold'}>
                THE DESIGN
              </span>
              <hr/>

              <span className={'text-lg'}>
                In my team, I was tasked with the design of the Community Board and the process of
                creating a post, posting it, and checking replies to the post.
              </span>
              <span className={'text-lg'}>
                View the prototype {' '}
                <a
                  className={'underline'}
                  href={'https://www.figma.com/proto/WwTVBp5MkghN7VFaqhJF7G/WellPet--Forum-Post?page-id=0%3A1&node-id=1-1023&p=f&viewport=133%2C211%2C0.66&t=2KrcEzJxEEpiQ4Xk-1&scaling=min-zoom&content-scaling=fixed'}>
                  here!
                </a>
              </span>
            </div>

            <div className={'flex flex-col text-left space-y-2'}>
              <span className={'text-3xl font-bold !tracking-normal'}>05. Usability Test </span>

              <span className={'text-xl font-bold'}>
                  PARTICIPANTS
                </span>
              <hr/>
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span className={'text-lg'}>Lucy, 20: 9 cats, 500 fish, 1 frog, 1 snake, 1 bearded dragon</span></li>
                <li><span className={'text-lg'}>Ángel, 20: 5 cats, 1 bearded dragon</span></li>
                <li><span className={'text-lg'}>Lillie, 22: 1 dog</span></li>
                <li><span className={'text-lg'}>Thamasi, 21: 1 dog, 1 cat</span></li>
                <li><span className={'text-lg'}>Matthew, 22: 1 dog</span></li>
              </ul>

              <span className={'text-xl font-bold'}>
                  FINDINGS
                </span>
              <hr/>

              <span className={'text-lg font-bold'}>Positive Feedback:</span>
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span className={'text-lg'}>Easy to find the Inbox to see previous notifications</span></li>
                <li><span className={'text-lg'}>The three topics (Cats, New, Hot) and the For You section is useful</span></li>
              </ul>

              <span className={'text-lg font-bold'}>Suggestions:</span>
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span className={'text-lg'}>More categories for forum discussions</span></li>
                <li><span className={'text-lg'}>Links to purchase things mentioned in the forum</span></li>
                <li><span className={'text-lg'}>Report button</span></li>
                <li><span className={'text-lg'}>Add total number of characters for text entry box</span></li>
                <li><span className={'text-lg'}>Favorites button to save certain posts</span></li>
              </ul>

              <span className={'text-lg font-bold'}>Minor Usability Problems:</span>
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span className={'text-lg'}>Home page is slightly cluttered (but still functional; "everything is there for a reason")</span></li>
              </ul>

              <span className={'text-lg font-bold'}>Major Usability Problems:</span>
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span className={'text-lg'}>n/a</span></li>
              </ul>

              <span className={'italic opacity-60 mt-2'}>
                “[The forum layout is] cute and good for when comments come in so you can look at them easily.”
              </span>
              <span className={'text-right ml-auto -mt-6'}>
                -Lucy
              </span>


            </div>

            <div className={'flex flex-col text-left space-y-2'}>
              <span className={'text-3xl font-bold !tracking-normal'}>06. Conclusion </span>
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span className={'text-lg'}>App was helpful for contacting vets, scheduling
                an appointment, and setting petcare reminders
              </span></li>
                <li><span className={'text-lg'}>Users enjoyed the simplicity of the app layout,
                saying it had similar features to other apps they have used,
                making it easy to learn how to use
              </span></li>
                <li><span className={'text-lg'}>
                Participants were very interested in how the app would work with vets,
                allowing vet portal to sync with documents, schedule appointments,
                and upload documents
              </span></li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
);
}

export default Project1;
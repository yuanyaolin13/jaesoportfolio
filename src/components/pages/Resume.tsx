import MobileHeader from "../mobileComponents/MobileHeader.tsx";
import {useScrollFadeIn} from "../hooks/useScrollFadeIn.ts";

function Resume() {

  const { ref, visible } = useScrollFadeIn();

  return (
    <>
      <MobileHeader />
      <section className={'flex flex-col w-full mt-4 space-y-4'}>
        <article ref={ref}
                 className={`fade-up ${visible ? "visible" : ""} flex flex-col`}
        >
          <div className={'flex flex-row items-center space-x-2'}>
            <span className={'text-2xl font-bold'}>Education</span>
            <hr className={'border-0.5 w-full'} />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg/6">
              Hussman School & School of Information and Library Science
            </span>
            <span className="opacity-60 text-md">
              Chapel Hill, NC | 2022 - 2026
            </span>
            <span className="opacity-60 text-md">
              B.A. in Media and Journalism, Advertising & Public Relations
              <br/>
              B.S. in Information Science
              <br/>
              Relevant Coursework: UX Strategy and Design, UX Design and Usability, Principles of AD/PR, Art Direction in Advertisement, Practical Web Design

            </span>
          </div>
        </article>

        <article
          ref={ref}
          className={`fade-up ${visible ? "visible" : "" } flex flex-col`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className={'flex flex-row items-center space-x-2'}>
            <span className={'text-2xl font-bold'}>Experience</span>
            <hr className={'border-0.5 w-full'} />
          </div>
          <div className="flex flex-col space-y-4 text-left">
            <div className="flex flex-col">
              <span className="font-bold text-lg/6">
                SAS: Learning Design and Development Technical Intern
              </span>
              <span className="opacity-60 text-md">
                Cary, NC | Summer 2025 - Present
              </span>
              <span className="opacity-60 text-md">
                <ul className={'list-disc ml-4 w-auto'}>
                  <li><span>Developed communication skills while working with team members.</span></li>
                  <li><span>Designed different aspects of e-Learning software to help accessibility.</span></li>
                  <li><span>Assessed training effectiveness through collection of usage data.</span></li>
                </ul>
            </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg/6">CAR/VR: Design Development Team</span>
              <span className="opacity-60 text-md">Chapel Hill, NC | March 2024 - May 2025</span>
              <span className="opacity-60 text-md">
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span>Produced assets to use in websites, games, and other virtual experiences.</span></li>
                <li><span>Communicated effectively with members within and beyond team.</span></li>
                <li><span>Utilized Figma to design the website for the organization.</span></li>
              </ul>
            </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-lg/6">UNC Asian American Student Association: Graphic Designer</span>
              <span className="opacity-60 text-md">Chapel Hill, NC | September 2023 - April 2024</span>
              <span className="opacity-60 text-md">
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span>Created engaging graphics to improve engagement on social media.</span></li>
                <li><span>Designed merchandise to be sold at large events.</span></li>
                <li><span>Collaborated with organization members to arrange design schedules.</span></li>
              </ul>
            </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-lg/6">UNC Korean American Student Association: Graphic Designer & Cultural Chair</span>
              <span className="opacity-60 text-md">Chapel Hill, NC | September 2022 - April 2024</span>
              <span className="opacity-60 text-md">
              <ul className={'list-disc ml-4 w-auto'}>
                <li><span>Organized events to promote cultural understanding of Korean culture.</span></li>
                <li><span>Managed the organization's social media and schedule.</span></li>
                <li><span>Developed a cohesive brand identity for the organization.</span></li>
              </ul>
            </span>
            </div>
          </div>
        </article>

        <article
          ref={ref}
          className={`fade-up ${visible ? "visible" : ""} flex flex-col`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className={'flex flex-row items-center space-x-2'}>
            <span className={'text-2xl font-bold text-left whitespace-nowrap'}>Skills & Tools</span>
            <hr className={'border-0.5 w-full'} />
          </div>
          <div className="flex flex-col space-y-1 text-left">
            <span className="font-bold text-lg/6">
              Design / Programming
            </span>
            <span className="opacity-60 text-md">
              UX Design, Wireframing, Personas, Color Theory, Storyboarding, Video Editing,
              Illustration, 3D Modeling and Printing, HTML/CSS, JavaScript, Python
            </span>
          </div>
          <div className="flex flex-col space-y-1 text-left">
            <span className="font-bold text-lg/6">
              Software
            </span>
            <span className="opacity-60 text-md">
              Figma, Illustrator, Premier Pro, Photoshop, InDesign, DreamWeaver, Blender,
              Procreate, Canva, Camtasia
            </span>
          </div>
        </article>

        <article
          ref={ref}
          className={`fade-up ${visible ? "visible" : "" } flex flex-col`}
          style={{ transitionDelay: "150ms" }}
        >
          <a
            href={"https://drive.google.com/file/d/1t05UfeTrL8rzTD9TfytDF37x3Do7KMO2/view"}
            target="_blank"
            rel="noopener noreferrer"
            className={'dark-link ml-auto'}>
            <span className={'border border-black px-2 py-1 text-lg'}>
              PDF VERSION
            </span>
          </a>
        </article>
      </section>
    </>
  );
}
export default Resume;

import ProjectItem from "./ProjectItemMobile.tsx";
import WellPetThumbnail from "../../assets/wellpet/WP_thumbnail.png";
import {useScrollFadeIn} from "../hooks/useScrollFadeIn.ts";

function JaeSoInformationMobile() {
  const { ref, visible } = useScrollFadeIn();
  const project = [
    {
      projectId: "1",
      projectPhoto: WellPetThumbnail,
      projectTitle: "WellPet",
      projectType: "Design Sprint",
      projectDate: "Fall 2024",
      projectDescription: "Designing and testing an app that improves organization and health care for pets and their owners.",
    },
  ]

  return (
    <div className={'flex flex-col'}>
      <span ref={ref} className={`fade-up ${visible ? "visible" : ""} text-6xl font-bold text-left`}>
        MY WORK
      </span>
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""} flex flex-col sm:grid sm:grid-cols-2 h-full w-full`} style={{ transitionDelay: "300ms" }}>
        {
          project.map((item) => (
            <ProjectItem projectId={item.projectId}
                         projectPhoto={item.projectPhoto}
                         projectTitle={item.projectTitle}
                         projectType={item.projectType}
                         projectDescription={item.projectDescription}
                         projectDate={item.projectDate}
            />
          ))
        }
      </div>
    </div>
  );
}

export default JaeSoInformationMobile;
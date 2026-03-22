import ProjectItem from "./ProjectItemMobile.tsx";
import test1 from "../../assets/test1.jpg";
import test2 from "../../assets/test2.jpg";
import test3 from "../../assets/test3.jpg";

function JaeSoInformationMobile() {

  const project = [
    {
      projectId: "1",
      projectPhoto: test1,
      projectTitle: "project1",
      projectDate: "01-05-2004",
      projectDescription: "Lorem ipsum dolor sit amet consectetur. Vestibulum iaculis turpis nunc cursus vulputate vitae habitant eu.",
    },
    {
      projectId: "2",
      projectPhoto: test2,
      projectTitle: "project2",
      projectDate: "01-06-2004",
      projectDescription: "Lorem ipsum dolor sit amet consectetur. Vestibulum iaculis turpis nunc cursus vulputate vitae habitant eu.n",
    },
    {
      projectId: "3",
      projectPhoto: test3,
      projectTitle: "project3",
      projectDate: "01-24-2004",
      projectDescription: "Lorem ipsum dolor sit amet consectetur. Vestibulum iaculis turpis nunc cursus vulputate vitae habitant eu.n",
    },
  ]

  return (
    <div className={'flex flex-col'}>
      <span className={'text-6xl font-bold text-left'}>
        MY WORK
      </span>
      <div className="flex flex-col sm:grid sm:grid-cols-2 h-full w-full">
        {
          project.map((item) => (
            <ProjectItem projectId={item.projectId}
                         projectPhoto={item.projectPhoto}
                         projectTitle={item.projectTitle}
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
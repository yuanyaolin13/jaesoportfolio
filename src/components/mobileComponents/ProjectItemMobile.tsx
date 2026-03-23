interface Props {
  projectId: string;
  projectPhoto: string;
  projectTitle: string;
  projectType: string;
  projectDate: string;
  projectDescription: string;
}

function ProjectItemMobile({ projectId, projectPhoto, projectTitle, projectType, projectDate, projectDescription }: Props) {
  return (
    <div className="flex flex-col h-full w-full my-4 space-y-2 px-2">
        <hr className="h-px my-8 bg-slate-600 border-0"/>
        <a href={`/projects/${projectId}`} className={''}>
          <img
            className='object-cover object-center h-64 w-full border-2'
            src={projectPhoto}
            alt={projectTitle + " image"}
          />
        </a>
        <div className="flex flex-row w-full justify-between">
          <a href={`/projects/${projectId}`}>
            <span className={'text-2xl font-bold underline uppercase bg-transparent'}>{projectTitle}</span>
          </a>
          <span className={'text-sm'}>{projectType} | {projectDate}</span>
        </div>
        <span className={'text-left'}>
          {projectDescription}
        </span>
        <a href={`/projects/${projectId}`} className={'mt-auto ml-auto pt-2 dark-link'}>
          <span className={'text-md text-left border border-black px-2 py-1'}>
            READ MORE
          </span>
        </a>
      </div>
  );
}

export default ProjectItemMobile;
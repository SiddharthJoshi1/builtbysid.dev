

import Image from "next/image";
import ProjectItem from "./project";

interface projectProps {
  projects?: Array<project>;
}

export default function ProjectSection(props: projectProps) {
  return (
    <div className="w-screen flex flex-col  p-8 2xl:py-10 2xl:px-20">
      <p className=" text-3xl max-sm:text-start xl:text-4xl  font-extrabold">
        SOME OF MY PROJECTS ⚒️
      </p>
      <br></br>
      <br></br>

      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5  ">
        {props.projects!.map((project, i) => (
          <ProjectItem key={i} image_url={project.image_url?.toString()!} isWide={project.isWide!} title={project.title?.toString()!} description={project.description?.toString()!}  />
        ))}
      </div>
    </div>
  );
}

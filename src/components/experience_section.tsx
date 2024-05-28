import Image from "next/image";
import ExperienceItem from "./experience_item";
interface experienceProps {
  experience?: Array<experience>;
}

export default function ExperienceSection(props: experienceProps) {
  return (
    <div className="w-screen flex flex-col p-8 2xl:py-10 2xl:px-20">
      <p className=" text-3xl max-sm:text-start xl:text-4xl  font-extrabold">
        CURRENTLY WORKING AT 🖥️
      </p>
      <br></br>
      <br></br>
      <ExperienceItem
        title={props!.experience![0].title}
        role={props!.experience![0].role}
        location={props!.experience![0].location}
        dates={props!.experience![0].dates}
        description={props!.experience![0].description}
        skills={props!.experience![0].skills}
      ></ExperienceItem>
      <br></br>
      <div className="w-full flex flex-row justify-center items-center ">
        <a href="/experiences">
          <p className=" text-lg font-medium">SEE All MY EXPERIENCE ↗️</p>
        </a>
      </div>
    </div>
  );
}

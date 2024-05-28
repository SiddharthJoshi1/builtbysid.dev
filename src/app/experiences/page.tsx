import Image from "next/image";
import { PersonalProfileRepoImplementation } from "@/data/personal_profile_repo_impl";
import { LocalFileJSONParser } from "@/data/sources/local_file";
import { GetPersonalProfileData } from "@/domain/use_cases/get_personal_profile_data";
import path from "path";
import SkillsItem from "@/components/skills_item";
import ExperienceItem from "@/components/experience_item";

export default async function Page(props: any) {
  let personalProfileData = await new GetPersonalProfileData(
    new PersonalProfileRepoImplementation(new LocalFileJSONParser())
  ).getPersonalProfileData();

  return (
    <div className="w-screen flex flex-col  justify-between p-8 lg:px-24 overflow-hidden">
      <p className=" text-3xl max-sm:text-start xl:text-4xl  font-extrabold">
        EXPERIENCE
      </p>
      <br></br>
      <br></br>
      <div>
        {personalProfileData!.experiences!.map((experience, i) => (
          <div key={i}>
            <ExperienceItem
              title={experience.title}
              role={experience.role}
              location={experience.location}
              dates={experience.dates}
              description={experience.description}
              skills={experience.skills}
            ></ExperienceItem>
          <br></br>
          </div>
        ))}
      </div>      
    </div>
  );
}

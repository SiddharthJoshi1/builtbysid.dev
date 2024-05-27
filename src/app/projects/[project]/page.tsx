import Image from "next/image";
import { PersonalProfileRepoImplementation } from "@/data/personal_profile_repo_impl";
import { LocalFileJSONParser } from "@/data/sources/local_file";
import { GetPersonalProfileData } from "@/domain/use_cases/get_personal_profile_data";
import path from "path";
import SkillsItem from "@/components/skills_item";

export default async function Page(props: any) {
  let personalProfileData = await new GetPersonalProfileData(
    new PersonalProfileRepoImplementation(new LocalFileJSONParser())
  ).getPersonalProfileData();

  let decodedProjectName: string = decodeURIComponent(props.params.project);
  let currentProject: project | undefined = personalProfileData.projects?.find(
    (project) => {
      return project.title === decodedProjectName;
    }
  );
  let skillsArray: Array<string> = currentProject!.skills!.split(","); 

  return (
    <div className="w-screen flex flex-col  items-start  justify-between p-8 lg:px-24 overflow-hidden">
      <p className=" ml-2 mb-10 lg:mb-12 text-3xl max-sm:text-start xl:text-4xl  font-extrabold">
        {currentProject?.title}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div id="projectDeets">
          <p className="px-2 py-1 max-sm:text-start xl:text-base  overflow-clip">
            {currentProject?.description}
          </p>
          <SkillsItem className="my-10 grid grid-cols-2 md:grid-cols-4 gap-5" skillsArray={skillsArray}></SkillsItem>
          { currentProject?.links !== undefined && currentProject?.links.length > 0 &&
          <div id="Link">
            <p className="mb-5 text-3xl max-sm:text-start xl:text-4xl">Link</p>
            <div className="w-[50px]" id="link-image">
              <a
                href={currentProject.links![0].linkHref}
              >
                <Image
                  className=" hover:contrast-150 bg-vanilla"
                  src={"/assets/images/link.svg"}
                  alt="Link"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
}
        </div>
        <div id="projectInfoGraphic">
          <Image
            src={"/" + currentProject!.image_url!.toString()}
            alt="Project Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

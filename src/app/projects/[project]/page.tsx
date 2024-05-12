
import { PersonalProfileRepoImplementation } from "@/data/personal_profile_repo_impl";
import { LocalFileJSONParser } from "@/data/sources/local_file";
import { GetPersonalProfileData } from "@/domain/use_cases/get_personal_profile_data";

export default async function Page(props:any) {
  let personalProfileData = await new GetPersonalProfileData(
    new PersonalProfileRepoImplementation(new LocalFileJSONParser())
  ).getPersonalProfileData("/src/app/data.json");

  let decodedProjectName: string = decodeURIComponent(props.params.project); 
  let currentProject:project | undefined =  personalProfileData.projects?.find((project) => {console.log(project.title); return project.title === decodedProjectName});
  return (
    <div className="w-screen flex flex-col  p-8 2xl:py-10 2xl:px-20">
      <p className=" text-3xl max-sm:text-start xl:text-4xl  font-extrabold">
        {currentProject?.title}
      </p>
    </div>
  );
}

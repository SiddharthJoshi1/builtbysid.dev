import TopPage from "@/components/top_page";
import { PersonalProfileRepoImplementation } from "@/data/personal_profile_repo_impl";
import { LocalFileJSONParser } from "@/data/sources/local_file";
import { GetPersonalProfileData } from "@/domain/use_cases/get_personal_profile_data";

export default async function Home() {
  let personalProfileData =  await new GetPersonalProfileData(new PersonalProfileRepoImplementation(new LocalFileJSONParser())).getPersonalProfileData();
  return (
    <main className=" flex flex-col items-center justify-center overflow-hidden">
      <TopPage />
    </main>
  );
}

import { PersonalProfileRepo } from "@/domain/repository/personal_profile_repository";
import { LocalFileJSONParser } from "./sources/local_file";



export class PersonalProfileRepoImplementation extends PersonalProfileRepo {
  localFileParser: LocalFileJSONParser;

  constructor(localFileParser: LocalFileJSONParser) {
    super();
    this.localFileParser = localFileParser;
  }

  getPersonalProfileData(filePath: string): Promise<PersonalProfile> {
    return this.localFileParser.loadAllJsonData(filePath);
  }
}
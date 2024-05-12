import { PersonalProfileDTO } from "../DTOs/personal_profile_dto";
import { promises as fs } from "fs";

abstract class LocalFileJSONParserInterface {
  abstract loadAllJsonData(filePath: string): Promise<PersonalProfile>;
}

export class LocalFileJSONParser extends LocalFileJSONParserInterface {
  async loadAllJsonData(filePath: string): Promise<PersonalProfile> {
    const file = await fs.readFile(
    filePath,
      "utf8"
    );
    const data = JSON.parse(file);
    let personalProfile = new PersonalProfileDTO().fromMap(data[0]);
    return personalProfile;
  }
}

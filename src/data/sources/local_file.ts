import { PersonalProfileDTO } from "../DTOs/personal_profile_dto";
import { promises as fs } from "fs";
import path from "path";

abstract class LocalFileJSONParserInterface {
  abstract loadAllJsonData(): Promise<PersonalProfile>;
}

export class LocalFileJSONParser extends LocalFileJSONParserInterface {
  async loadAllJsonData(): Promise<PersonalProfile> {
    path.resolve("./public/assets/data/data.json");
    const file = await fs.readFile("./public/assets/data/data.json", "utf8");
    const data = JSON.parse(file);
    let personalProfile = new PersonalProfileDTO().fromMap(data[0]);
    return personalProfile;
  }
}

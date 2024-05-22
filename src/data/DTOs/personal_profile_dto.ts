import { Utils } from "../utils";
export class PersonalProfileDTO {
  utils = new Utils();
  fromMap(map: PersonalProfile): PersonalProfile {
    return {
      personal_profile: map.personal_profile,
      projects:
        map.projects == null
          ? []
          : this.utils.returnJSONList(map.projects, "projects"),
      experiences:
        map.experiences == null
          ? []
          : this.utils.returnJSONList(map.experiences, "experiences"),
    };
  }

}

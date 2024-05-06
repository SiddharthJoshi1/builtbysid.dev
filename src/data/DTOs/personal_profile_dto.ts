import { ExperienceDTO } from "./experience_dto";
import { ProjectDTO } from "./project_dto";

export class PersonalProfileDTO {
  fromMap(map: PersonalProfile): PersonalProfile {
    return {
      personal_profile: map.personal_profile,
      projects:
        map.projects == null
          ? []
          : this.returnJSONList(map.projects, "projects"),
      experiences:
        map.experiences == null
          ? []
          : this.returnJSONList(map.experiences, "experiences"),
    };
  }

  // topLevelJson : [{proj : 1}, {proj : 2}]
  returnJSONList(topLevelJson: Object, topLevelKey: string): Array<any> {
    let list: any[] = [];
    let builderClass = null;
    switch (topLevelKey) {
      case "projects":
        builderClass = new ProjectDTO();
        (topLevelJson as Array<project>).forEach((x: project) => {
          list.push(builderClass!.fromMap(x));
        });

        break;

      case "experiences":
        builderClass = new ExperienceDTO();
        (topLevelJson as Array<experience>).forEach((x: experience) => {
          list.push(builderClass!.fromMap(x));
        });

        break;
      default:
        break;
    }

    return list;
  }
}

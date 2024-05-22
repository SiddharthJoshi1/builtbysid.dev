import { ExperienceDTO } from "./DTOs/experience_dto";
import { LinkDTO } from "./DTOs/links_dto";
import { ProjectDTO } from "./DTOs/project_dto";

export class Utils {

  public  returnJSONList(topLevelJson: Object, topLevelKey: string): Array<any> {
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

    case "links":
        builderClass = new LinkDTO();
          (topLevelJson as Array<Link>).forEach((x: Link) => {
            list.push(builderClass!.fromMap(x));
          });
      default:
        break;
    }

    return list;
  }
}
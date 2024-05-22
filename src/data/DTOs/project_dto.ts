import { Utils } from "../utils";

export class ProjectDTO  {
  utils = new Utils();
  public fromMap(map: project): project {
    return {
      title: map.title,
      isWide: map.isWide,
      image_url: map.image_url,
      description: map.description,
      skills: map.skills,
      links:
        map.links == null
          ? []
          : this.utils.returnJSONList(map.links, "links"),
    };
  }
}

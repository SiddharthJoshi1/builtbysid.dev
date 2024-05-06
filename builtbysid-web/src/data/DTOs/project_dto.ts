export class ProjectDTO  {
  public fromMap(map: project): project {
    return {
      title: map.title,
      isWide: map.isWide,
      image_url: map.image_url,
      description: map.description,
      skills: map.skills,
    };
  }
}

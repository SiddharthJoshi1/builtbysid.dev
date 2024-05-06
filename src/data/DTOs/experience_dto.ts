export class ExperienceDTO {
  public fromMap(map: experience): experience {
    return {
      title: map.title,
      role: map.role,
      location: map.location,
      dates: map.dates,
      description: map.description,
      skills: map.skills,
    };
  }
}

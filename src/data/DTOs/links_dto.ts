

export class LinkDTO {
  public fromMap(map: Link): Link {
    return {
      linkType: map.linkType,
      linkHref: map.linkHref
    };
  }
}

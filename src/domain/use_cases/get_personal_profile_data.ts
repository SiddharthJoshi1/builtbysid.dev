import { PersonalProfileRepo } from "../repository/personal_profile_repository";

export class GetPersonalProfileData {
  personalProfileRepo: PersonalProfileRepo;
  constructor(personalProfileRepo: PersonalProfileRepo) {
    this.personalProfileRepo = personalProfileRepo;
  }

  async getPersonalProfileData(filePath: string): Promise<PersonalProfile> {
     let list = await this.personalProfileRepo.getPersonalProfileData(filePath);
     return list;
  }
}
export abstract class PersonalProfileRepo {
    abstract getPersonalProfileData(filePath: string) : Promise<PersonalProfile>;
}
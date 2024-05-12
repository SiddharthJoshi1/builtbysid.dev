export abstract class PersonalProfileRepo {
    abstract getPersonalProfileData() : Promise<PersonalProfile>;
}
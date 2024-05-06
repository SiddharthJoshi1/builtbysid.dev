interface PersonalProfile {
  personal_profile?:string;
  projects?: Array<project>;
  experiences? : Array<experience>;

//   constructor(personal_profile:string, projects:Array<project>, experiences: Array<experience>) {
//     this.experiences =experiences;
//     this.projects = projects;
//     this.personal_profile = personal_profile;
//   }
}
export interface Resume {
    id?: string;
    fullname: string;
    bio: string;
    skills: ResumeSkill[];
    contact: ResumeContactSheet;
    languages?: ResumeSkill[];
    experience?: ResumeExperienceEntry[];
}

/*
    * Name
        * Picture optional
        * Position optional
    * Profile/Bio
    * Contact sheet
    * Experience
    * Skills
    * Languages optional
*/

export interface ResumeSkill {
    title: string;
    grade: number;
}

export interface ResumeExperienceEntry {
    title: string;
    body: string;
    from: Date;
    to?: Date;
}

export interface ResumeContactSheet {
    github: string;
    gmail: string;
    skypeID: string;
    website: string;
}

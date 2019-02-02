export interface Resume {
    id?: string;
    fullname: string;
    picture?: string;
    bio: string;
    skills?: ResumeSkill[];
    languages?: ResumeSkill[];
    experience?: ResumeExperienceEntry[];
    contact: ResumeContactSheet;
}

export interface ResumeSkill {
    name: string;
    grade: number;
}

export interface ResumeExperienceEntry {
    name: string;
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

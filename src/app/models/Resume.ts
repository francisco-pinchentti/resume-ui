export interface Resume {
    id?: string;
    fullname: string;
    position: string;
    picture?: string;
    bio: string;
    skills?: ResumeSkill[];
    languages?: ResumeSkill[];
    experiences?: ResumeExperienceEntry[];
    contact: ResumeContactSheet;
}

export interface ResumeSkill {
    name: string;
    grade: number;
}

export interface ResumeExperienceEntry {
    position: string;
    company: string;
    summary: string;
    from: Date;
    to?: Date;
}

export interface ResumeContactSheet {
    email: string;
    github: string;
    linkedIn: string;
    skypeID: string;
    website: string;
}

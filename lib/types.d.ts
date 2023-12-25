export type Children = {
  children: React.ReactNode;
};

export type Classname = {
  className?: string;
};

export type ChildrenClassname = {
  children: React.ReactNode;
  className?: string;
};

export type ProfileForm = {
  username: string;
  name: string;
  jobRole: string;
  bio: string;
  workStatus: string;
  profilePicture: string;
  profilePictureId: string;
};

export type AboutForm = {
  username: string;
  about: string;
};

export type SkillsForm = {
  username: string;
  userSkills: {
    id: string;
    title: string;
    slug: string;
  }[];
  availableSkills:
    | {
        id: string;
        title: string;
        slug: string;
      }[]
    | undefined;
};

export type EducationInfo = {
  username: string;
  education: {
    id: string;
    profileId: string;
    institutionName: string;
    degree: string;
    fieldOfStudy: string;
    gpa: number;
    maxGpa: number;
    startDate: Date;
    finishDate: Date;
  }[];
};

export type EducationFormData = {
  username: string;
  profileId: string;
  educationId?: string;
  institutionName?: string | null;
  degree?: string | null;
  fieldOfStudy?: string | null;
  gpa?: string | null;
  maxGpa?: string | null;
  startDate?: Date | null;
  finishDate?: Date | null;
};

export type CoursesForm = {
  username: string;
  courses: {
    id: string;
    profileId: string;
    institutionName: string;
    courseName: string;
    startDate: Date;
    finishDate: Date;
  }[];
};

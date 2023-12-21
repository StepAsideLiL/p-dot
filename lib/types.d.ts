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

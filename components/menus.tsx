import {
  Briefcase,
  CalendarPlus,
  FlaskConical,
  ListChecks,
  PackagePlus,
  PenLine,
  ScrollText,
  User2,
  UserCog2,
} from "lucide-react";

const tabsList = [
  {
    title: "Profile",
    value: "profile",
    href: `/p/hello`,
    icon: <User2 />,
  },
  {
    title: "Blogs",
    value: "blogs",
    href: "/p/hello?tabs=blogs",
    icon: <ScrollText />,
  },
  {
    title: "Projects",
    value: "projects",
    href: "/p/hello?tabs=projects",
    icon: <FlaskConical />,
  },
  {
    title: "Jobs",
    value: "jobs",
    href: "/p/hello?tabs=jobs",
    icon: <Briefcase />,
  },
  {
    title: "Applied Jobs",
    value: "applied-jobs",
    href: "/p/hello?tabs=applied-jobs",
    icon: <ListChecks />,
  },
];

const addContentsMenu = [
  {
    title: "Edit Profile",
    href: "/p/hello/edit-profile",
    icon: <UserCog2 />,
  },
  {
    title: "New Blog",
    href: "/p/hello/new-blog",
    icon: <PenLine />,
  },
  {
    title: "New Project",
    href: "/p/hello/new-project",
    icon: <PackagePlus />,
  },
  {
    title: "New Job",
    href: "/p/hello/new-job",
    icon: <CalendarPlus />,
  },
];

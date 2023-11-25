import AppliedJobTabContent from "@/components/profile-tabs/applied-job";
import BlogsTabContent from "@/components/profile-tabs/blogs";
import JobTabContent from "@/components/profile-tabs/job";
import ProfileTabContent from "@/components/profile-tabs/profile";
import ProjectsTabContent from "@/components/profile-tabs/projects";
import {
  Briefcase,
  FlaskConical,
  ListChecks,
  ScrollText,
  User2,
} from "lucide-react";

export const tabsList = [
  {
    title: "Profile",
    value: "profile",
    href: `/p/hello`,
    icon: <User2 />,
    content: <ProfileTabContent />,
  },
  {
    title: "Blogs",
    value: "blogs",
    href: "/p/hello?tabs=blogs",
    icon: <ScrollText />,
    content: <BlogsTabContent />,
  },
  {
    title: "Projects",
    value: "projects",
    href: "/p/hello?tabs=projects",
    icon: <FlaskConical />,
    content: <ProjectsTabContent />,
  },
  {
    title: "Jobs",
    value: "jobs",
    href: "/p/hello?tabs=jobs",
    icon: <Briefcase />,
    content: <JobTabContent />,
  },
  {
    title: "Applied Jobs",
    value: "applied-jobs",
    href: "/p/hello?tabs=applied-jobs",
    icon: <ListChecks />,
    content: <AppliedJobTabContent />,
  },
];

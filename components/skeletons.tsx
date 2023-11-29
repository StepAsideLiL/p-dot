import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSection } from "./web-uis";

export const SigninAndSignupSkeleton = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="w-28 h-8"></Skeleton>
      <Skeleton className="w-28 h-8"></Skeleton>
      <Skeleton className="w-8 h-8 rounded-full"></Skeleton>
    </div>
  );
};

export const TalentsGridSkeleton = () => {
  const arr6 = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <section className="grid grid-cols-3 gap-2 max-w-5xl mx-auto pt-5">
      {arr6.map((list) => (
        <article
          key={list}
          className="p-2 border border-slate-300 rounded max-w-sm flex flex-col"
        >
          <div className="flex justify-end">
            <Skeleton className="w-11 h-4"></Skeleton>
          </div>

          <div className="flex items-center flex-col gap-2 flex-grow">
            <Skeleton className="w-28 h-28 rounded-full"></Skeleton>

            <Skeleton className="w-28 h-8"></Skeleton>
            <Skeleton className="w-16 h-5"></Skeleton>

            <ul className="flex flex-wrap gap-2 justify-center flex-grow items-center">
              {arr6.slice(0, 5).map((list) => (
                <Skeleton
                  key={list}
                  className="w-16 h-5 rounded-2xl"
                ></Skeleton>
              ))}
            </ul>

            <Skeleton className="w-28 h-8"></Skeleton>
          </div>
        </article>
      ))}
    </section>
  );
};

export const ProfileBannerSkeleton = () => {
  return (
    <section className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-1">
        <Skeleton className="w-40 h-40 rounded-full"></Skeleton>

        <Skeleton className="w-20 h-5"></Skeleton>
      </div>

      <div className="space-y-2">
        <Skeleton className="w-60 h-14"></Skeleton>

        <Skeleton className="w-48 h-6"></Skeleton>

        <Skeleton className="w-32 h-10"></Skeleton>
      </div>
    </section>
  );
};

export const TabsContainerSkeleton = () => {
  const arr6 = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <Tabs className="space-y-2">
      <TabsList className="grid w-full grid-cols-4">
        {arr6.map((list) => (
          <TabsTrigger
            key={list}
            defaultValue={"1"}
            value={`${list}`}
            className="w-full"
          >
            <Skeleton className="w-11 h-5"></Skeleton>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="space-y-2">
        {arr6.map((list) => (
          <ProfileSection key={list}>
            <Skeleton className="w-20 h-8"></Skeleton>

            <Skeleton className="w-full h-6"></Skeleton>
            <Skeleton className="w-full h-6"></Skeleton>
            <Skeleton className="w-full h-6"></Skeleton>
            <Skeleton className="w-full h-6"></Skeleton>
          </ProfileSection>
        ))}
      </div>
    </Tabs>
  );
};

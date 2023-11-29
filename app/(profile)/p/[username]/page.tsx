import { Main } from "@/components/web-uis";
import ProfileBanner from "@/components/web-pages/profile-banner";
import TabsContainer from "@/components/profile-tabs/tabs-container";
import { Suspense } from "react";
import {
  ProfileBannerSkeleton,
  TabsContainerSkeleton,
} from "@/components/skeletons";

const ProfilePage = async ({
  params: { username },
  searchParams: { tabs },
}: {
  params: { username: string };
  searchParams: { tabs: string };
}) => {
  return (
    <Main className="max-w-3xl mx-auto space-y-3">
      <Suspense fallback={<ProfileBannerSkeleton />}>
        <ProfileBanner username={username} />
      </Suspense>

      <Suspense fallback={<TabsContainerSkeleton />}>
        <TabsContainer username={username} tabs={tabs} />
      </Suspense>
    </Main>
  );
};

export default ProfilePage;

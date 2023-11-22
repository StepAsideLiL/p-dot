import React from "react";

const ProfilePage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return <div>{username}</div>;
};

export default ProfilePage;

import { ProfileEditIcon } from "@/public/assets/svgs";
import React, { FC } from "react";

interface Props {
  viewModal?: boolean;
  setViewModal: (value: boolean) => void;
}

const ProfileEditBtn: FC<Props> = ({ setViewModal }) => {
  const handleClick = () => {
    setViewModal(true);
  };

  return (
    <button
      className="text-[#FF4101] flex items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      <span>Edit</span> <ProfileEditIcon />
    </button>
  );
};

export default ProfileEditBtn;

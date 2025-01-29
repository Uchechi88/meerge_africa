"use client"
import ProfileEditBtn from "@/components/btns/profileEditBtn";
import Navbar from "@/components/ui/navbar";
import { EmailVerifiedIconAndText } from "@/public/assets/svgs";
import Image from "next/image";
import React, { useState } from "react";
import UpdateEmailDialogue from "../../components/modals/updateEmailDialogue";

const Profile = () => {
  const [viewModal, setViewModal] = useState(false);
  const handleCloseUpdateMailModal=()=>{}
  return (
    <div>
      <Navbar pageName="Profile" />
      <div className="bg-white rounded-lg m-4 p-5 border-slate-200">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[38px]">My Profile</h1>
            <p className="text-[#878686] mb-10">
              Update your profile and personal information
            </p>

            <h3>Full Name</h3>
            <p className="text-[#878686] mb-4">
              We will use this to communicate to you via email and phone calls
            </p>
            <p className="mb-10">Daniel Adejare</p>
          </div>
          <div className="m-10 ">
            <Image
              src="/images/avatars/avatar-1.jpg"
              alt="Example Image"
              width={200}
              height={100}
              className="ml-auto"
            />
          </div>
        </div>
        <div className="my-5">
          <h3>Email</h3>
          <p className="text-[#878686] mb-5">
            We will use this email to communicate to you about your account
            <p className="flex gap-4 my-4 text-slate-800 my-1">
              daniel@email.com <ProfileEditBtn setViewModal={setViewModal} /> <EmailVerifiedIconAndText/>
            </p>
          </p>
        </div>
        <div className="my-10">
          <h3>Phone Number</h3>
          <p className="flex gap-4 my-4 text-slate-800 my-1">
            +234 81443245 <ProfileEditBtn setViewModal={setViewModal}/> <EmailVerifiedIconAndText/>
          </p>
        </div>
        <div className="my-10">
          <h3>Role</h3>
          <p className="flex gap-4 my-4 text-slate-800 my-1">
            Business Admin
          </p>
        </div>
      </div>
      {viewModal && <UpdateEmailDialogue isOpen={viewModal} onClose={()=> setViewModal}/>}
    </div>
  );
};

export default Profile;

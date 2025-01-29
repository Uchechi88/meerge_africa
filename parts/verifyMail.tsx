import CompleteSignUpBtn from "@/components/btns/complete-Sign-up";
import Logo from "@/components/ui/logo";
import React, { FC } from "react";
import VerifyMailSocials from "./verifymailSocials";
interface verifyMailProps {
  fullname?: string;
}

const VerifyMail: FC<verifyMailProps> = ({ fullname }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-white  max-w-3xl m-auto mt-5 shadow rounded-sm">
      <div>
        <Logo />
      </div>
      <div className="p-5" style={{padding: "10px"}}>
        <div className="border py-2.5 p-4" style={{background: "#E7EAEC", paddingTop:"3rem", paddingBottom:"3rem"}}>
          <h1 className="font-bold text-3xl mt-5 mb-10">Verify your mail</h1>
          <p className="mt-2 mb-6">Hello {fullname}</p>
          <p className="mt-2 mb-6">
            Thanks for signing up for our restaurant management platform. We’re
            glad to have you shop your supplies with Meerge Africa. Kindly
            verify your email to complete the sign up process and access your
            account. Just click the button below to continue
          </p>
          <div className="flex flex-col justify-center items-center">
            <CompleteSignUpBtn />
          </div>
        </div>
        <VerifyMailSocials />
        <div className="text-center text-xs max-w-xl m-auto ">
          You are receiving this automated email regarding your recent activity.
          Kindly visit our FAQ page for more information or contact our customer
          service team for further assistance
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;

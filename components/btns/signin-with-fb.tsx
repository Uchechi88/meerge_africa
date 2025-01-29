import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SigninWithFacebook = () => {
  return (
    <Button type="button" variant={"outline"} className="flex-1" size={"lg"}>
      <Image
        src="/assets/svgs/facebook.svg"
        alt="Facebook logo"
        width={20}
        height={20}
      />
      Sign in with Facebook
    </Button>
  );
};

export default SigninWithFacebook;

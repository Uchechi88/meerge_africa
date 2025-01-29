import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const SigninWithFacebook = () => {
  return (
    <Button type="button" variant={"outline"} className="flex-1" size={"lg"} >
      <Link href={"#"}/>
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

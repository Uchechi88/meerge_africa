import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SigninWithGoogleBtn = () => {
  return (
    <Button type="button" variant={"outline"} className="flex-1" size={"lg"}>
      <Image
        src="/assets/svgs/google.svg"
        alt="Google logo"
        width={20}
        height={20}
      />
      Sign in with Google
    </Button>
  );
};

export default SigninWithGoogleBtn;

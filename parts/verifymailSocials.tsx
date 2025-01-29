import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/public/assets/svgs';
import React from 'react';

const VerifyMailSocials = () => {
  return (
    <div className="bg-[#0E2254] text-white text-xs flex flex-col justify-center items-center text-center py-4 my-6">
        <div className="gap-3 flex">
            <FacebookIcon/> 
            <InstagramIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
        </div>
      <div className="gap-3 flex my-5 mb-5 mt-5">
        <span>Contact us</span>
        <span>View as Webpage</span>
      </div>
      <div className="gap-3 flex mt-2">
        <span>Unsubscribe</span>
        <span>Update your preferences</span>
      </div>
      <div className='flex flex-col mt-2'>
        <span>This email was sent by:</span>
        <span>Meerge Africa</span>
        <span>1360 Via Varra</span>
        <span>Broomfield, CO 80020</span>
      </div>
    </div>
  );
};

export default VerifyMailSocials;

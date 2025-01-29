import { LogoIcon } from '@/public/assets/svgs';
import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <LogoIcon/>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-xl font-semibold space-x-1">
              <span className="text-[#0E2254]">Meerge</span>
              <span className="text-[#FF4101]">Africa</span>
            </p>
          </div>
        </div>
    </div>
  )
}

export default Logo;

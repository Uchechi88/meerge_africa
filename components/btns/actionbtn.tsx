import React, { FC } from 'react'
import { Button } from '../ui/button';
interface actionbtnprops{
    text?: string,
    onClick?:()=>void;
}

const ActionBtn:FC<actionbtnprops> = ({text,onClick}) => {
  return (
    <Button onClick={onClick} className='rounded-lg bg-[#0E2254] text-lg font-bold'>
      {text}
    </Button>
  )
}

export default ActionBtn

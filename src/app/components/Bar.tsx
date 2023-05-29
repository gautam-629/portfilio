import { ISkill } from '@/types'
import React from 'react'
interface IlanguageProps{
    language:ISkill;
}

const Bar = ({language}:IlanguageProps) => {
    const bar_width=`${language.level}%`
  return (
    <div className=" my-2 text-text_color bg-gray-300 rounded-full">
    <div
      className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-blue"
      style={{width:bar_width}}
    >
      <language.Icon className="mr-3" /> 
       {language.name}
    </div>
  </div>
  )
}

export default Bar
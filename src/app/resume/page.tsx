import React from 'react';
import { BsCircleFill } from "react-icons/bs";
import { IconType } from "react-icons";
import Bar from '../components/Bar';
import { language,tools } from '@/data';
const page = () => {
  return (
    <>
      <div>
        <div className='ml-4'>
          <h1 className='text-text_color font-bold text-lg border-b-4 inline border-blue'>Education</h1>
          <div className='bg-tersory_background w-3/4 rounded-md text-text_color my-3'>
            <h2 className='font-bold px-4'>Bachelore in Computer application</h2>
            <p className='px-4'>I am currently studying Bachelore in computer Application
              in the third year from Tribhuvan university</p>
          </div>
        </div>
        {/* Language and Tools */}
        <div className='grid grid-cols-2 gap-9 px-4' >
      {/* language and framework */}
          <div>
            <h5 className=" text-text_color my-5 text-lg border-b-4 inline border-blue font-bold">Language & Framework</h5>
            <div className='my-2'>
          {
            language.map((language)=>(
              <Bar language={language} key={language.name}/>
            ))
          }
             

            </div>
          </div>

    {/* tools and software */}
          <div>
            <h5 className=" text-text_color my-5 text-lg border-b-4 inline border-blue font-bold">Tools & Software</h5>
            <div className='my-2'>

            {
            tools.map((language)=>(
              <Bar language={language} key={language.name}/>
            ))
          }

            </div>
          </div>
         

        </div>

      </div>
    </>

  )
}

export default page
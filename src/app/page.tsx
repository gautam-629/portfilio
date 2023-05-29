import React from 'react'
import Image from 'next/image'
import ServiceCards from './components/ServiceCards'
import { services } from '@/data'
const page = () => {
  return (
    <>
      <p className='text-text_color px-16 mb-3'>I am currently studying IT in the third year and I have 1+ experience in
        Web Development as well as mobile application development.</p>
      <div>
        <h1 className='text-text_color text-lg ml-5 font-bold border-b-4 border-blue inline'>What I am doing</h1>
        <div className='grid grid-cols-2 gap-2 ml-5'>
     
          {
            services.map((service)=>(
              <ServiceCards service={service} key={service.title}/>
            ))
          }

        

        </div>
      </div>
    </>
  )
}

export default page
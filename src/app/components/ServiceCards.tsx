import React from 'react'
import Image from 'next/image'
import { Service } from '@/types'

interface ServiceProps{
   service:Service
}


const ServiceCards = ({service}:ServiceProps) => {

    function createMarkup() {
        return {
           __html: service.about,
        }
     }
  return (
    <>
    
    <div className='bg-tersory_background text-text_color w-96 rounded-md mt-6 flex'>
            <div className='py-5 px-2 rounded-md '>
              <Image
              className=' bg-icon_color rounded-md'
                src={service.icon}
                width={60}
                height={60}
                alt='frontend'
              />
            </div>
            <div className='relative right-6'>
              <h2 className='font-bold ml-8'>{service.title}</h2>
              <p className='px-8' dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
    </>
  )
}

export default ServiceCards
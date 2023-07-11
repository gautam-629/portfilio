import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SlideBar = () => {
  return (
    <>
    <div className='bg-secondary_background shadow-xl rounded-md py-7 min-w-fit '>
        <Image
          className='mx-auto rounded-full pt-1'
          src={'/img/profile.jpg'}
          height={100}
          width={100}
          alt='prfile picture'
        />
        <h1 className='text-text_color mt-2 font-bold text-2xl'>
            <span className='text-green-500'>Binod</span> Gautam
        </h1>
        <div>
          <Link href="/pdfs/example.pdf" target='_blank' download={"example.pdf"} >
          <button className='text-text_color bg-blue rounded-md px-2 mt-4'>Download Resume
            <Image
                  className='inline'
                  src={'/img/download.png'}
                  width={20}
                  height={20}
                  alt='facebook'
                />
            </button>
          </Link>
            
    
        </div>
        <div className='flex gap-6 mt-6 ml-20'>
            <Link href={"#"}>
                <Image
                  src={'/img/facebook.png'}
                  width={20}
                  height={20}
                  alt='facebook'
                />
            </Link>
            <Link href={"https://github.com/gautam-629"} target="_blank">
                <Image
                  className='bg-icon_color rounded-full'
                  src={'/img/GitHub.png'}
                  width={25}
                  height={25}
                  alt='facebook'
                />
            </Link>
            <Link href={"#"}>
                <Image
                  className='bg-icon_color rounded-full'
                  src={'/img/Linkedin.png'}
                  width={25}
                  height={25}
                  alt='linkdin'
                />
            </Link>
        </div>
        <div className='bg-tersory_background rounded-md w-60 text-sm  h-16 mx-auto mt-5 shadow-2xl'>
               <Image
                  className='rounded-full inline pr-1 pb-1'
                  src={'/img/location.png'}
                  width={17}
                  height={17}
                  alt='location'
                />
              <span className='text-text_color'>Kathmandu,Nepal</span>
              <p className='text-text_color'>gautambinod629@gmail.com</p>
              <p className='text-text_color'>9815835831</p>
        </div>
        <div className='gap-2 mt-7 mb-5 pb-10'>
          <Link href="mailto:gautambinod629@gmail.com" target="_blank">
          <button  className='text-text_color bg-blue rounded-md px-2'> <span className='p-2'>Email Me</span>
            <Image
                  className='rounded-full inline'
                  src={'/img/email.png'}
                  width={25}
                  height={25}
                  alt='linkdin'
                />
            </button>
          </Link>
            
        </div>
    </div>
    </>
  )
}

export default SlideBar
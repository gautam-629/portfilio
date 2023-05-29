'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [active, setActive] = useState('')

    useEffect(() => {
        if (pathname === '/') setActive('About')
        else if (pathname === '/project') setActive('Projects')
        else if (pathname === '/resume') setActive('Resume')
    })

    return (
        <div className='flex  items-center justify-between px-5 py-3 font-bold text-text_color'>
            <span className=' border-b-4 border-blue text-lg'>{active}</span>
            <div className='text-base font-normal'>

                {active !== 'About' && (
                    <Link href="/">
                        <span className='mx-2 cursor-pointer hover:border-b-4 hover:text-blue'> About </span>
                    </Link>
                )}

                {active !== 'Projects' && (
                    <Link href="/project">
                        <span  className='mx-2 cursor-pointer hover:border-b-4 hover:text-blue'> Projects </span>
                    </Link>
                )}

                {active !== 'Resume' && (
                    <Link href="/resume">
                        <span  className='mx-2 cursor-pointer hover:border-b-4 hover:text-blue'> Resume </span>
                    </Link>
                )}


            </div>

        </div>
    )
}

export default Navbar
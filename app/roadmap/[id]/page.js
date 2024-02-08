'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '@/app/components/Navbar';
import parse from 'html-react-parser';

const page = () => {
  const pathname = usePathname();
  const splitted = pathname.split("/");
  const Branch = (splitted[splitted.length - 1].split("%20").join(' '));
  const roadmap = localStorage.getItem(Branch)
  
  return (
    <>
    <Navbar/>
    <div className='mt-4 px-16'>
      {parse(roadmap)}
    </div>

    </>
  )
}

export default page
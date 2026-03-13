"use client"
import React from 'react'
import Image from "next/image";
import { images } from "../../../ui";
import { FamilyGif } from '@/public/gifs';
import { useResponsiveSize } from '@/app/hooks/useResponsiveSize';
import ThemeInput from '@/app/components/inputs/ThemeInput';
import Link from 'next/link';
import { ActionButton, ThemeButton } from '@/app/components';

export default function LoginPage() {
  const isMobile = useResponsiveSize({
    mobile: true,
    tablet: false,
    desktop: false,
  })
  return (
    <main>
      <section>
        <Image src={images.landingpageImages.familyLinesBlue} alt={"family lines blue"} className="md:block hidden absolute right-0 top-0 z-[-1]" />
        <Image src={images.landingpageImages.familyPlantBlue} alt={'Family Plant Blue'} className='absolute bottom-0 bg-cover md:block hidden z-[-1] ' />
        <div className='container max-w-7xl mx-auto pt-20 pb-0 lg:pb-35 lg:pt-35 px-5 md:px-8 flex items-center lg:justify-center '>
          <div className='bg-white p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 rounded-xl gap-15 w-full md:w-auto'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-gray-900 font-semibold text-2xl'>Login</h3>
              <ThemeInput label='Email' placeholder='email@example.com' />
              <ThemeInput label='Password' type='password' />
              <div className='flex flex-row items-center justify-between'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='checkbox'
                    className='w-4 h-4 rounded-2xl border-gray-300 accent-primary-color cursor-pointer'
                  />
                  <span className='text-sm text-gray-600'>Remember me</span>
                </label>
                <Link href={""} className='text-primary-color text-sm font-semibold'>
                Forgot password?
                </Link>
              </div>
              <div>
                <ActionButton className='w-full' label={'Log In'} onClick={()=>{}}/>
              </div>
              <div className='flex items-center justify-center'>
                <p className='text-sm text-medium-gray font-medium'>Don’t have account? <Link className='text-primary-color hover:cursor-pointer'  href={""}>Register yourself</Link></p>
              </div>
            </div>
            <div className='bg-aqua p-12 rounded-xl hidden md:block'>
              <div className="flex items-center justify-center ">
                <FamilyGif width={isMobile ? "311" : "382"} height={isMobile ? "267" : "327"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

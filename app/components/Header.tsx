"use client"

import Image from 'next/image'
import React, {  useEffect, useState } from 'react'
import { images } from '../ui'
import { usePathname } from "next/navigation"
import ThemeButton from './Buttons/ThemeButton'
import Link from 'next/link'
import { menuItems } from '../constants/menu'
import { HamburgerIcon } from '@/public/icons'
import { MobileMenu } from './MobileMenu'


export const Header = () => {

  const pathname = usePathname();
 const [scrolled, setScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const hero = document.getElementById("hero");
    const header = document.getElementById("site-header");

    if (hero) setHeroHeight(hero.offsetHeight);
    if (header) setHeaderHeight(header.offsetHeight);

    const handleScroll = () => {
      setScrolled(window.scrollY >= heroHeight - headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight, headerHeight]);
  return (
    <div className='pt-0 lg:pt-3  '>
       <div className='fixed md:px-8 left-0 right-0 z-200'>
       <div id="site-header" className={`lg:container lg:max-w-7xl lg:mx-auto rounded-xl flex items-center justify-between bg-white px-6 py-2  transition-shadow duration-300 ${
          scrolled ? "shadow-xl" : ""
        }`}>

        <Image src={images.landingpageImages.logo} alt={'logo'} className='lg:w-auto lg:h-auto w-50 h-9' />

       <div className='hidden  lg:flex items-center gap-8'>

          {menuItems.slice(0,4).map((item, index) => {

            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`font-medium text-lg ${
                  isActive
                    ? "text-primary-color"
                    : "text-gray-700 hover:text-primary-color"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className='hidden md:block'>
              <ThemeButton label={'Login'} onClick={()=>{}} size='small' />
              </div>
        </div>
       <button className='lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100' onClick={()=>{setMenuOpen(true)}} >
            <HamburgerIcon/>
       </button>
      </div>
       <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
       </div>
      
    </div>
  )
}
"use client"

import Image from 'next/image'
import React, {  useEffect, useState } from 'react'
import { images } from '../ui'
import { usePathname } from "next/navigation"
import ThemeButton from './Buttons/ThemeButton'
import Link from 'next/link'
import { menuItems } from '../constants/menu'


export const Header = () => {

  const pathname = usePathname();
 const [scrolled, setScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

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
    <div className='pt-0 lg:pt-3'>
      <div id="site-header" className={`fixed left-0 right-0 container max-w-7xl mx-auto rounded-xl flex items-center justify-between bg-white px-6 py-2 z-20 transition-shadow duration-300 ${
          scrolled ? "shadow-xl" : ""
        }`}>

        <Image src={images.landingpageImages.logo} alt={'logo'} />

        <div className='flex items-center gap-8'>

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
          <div>
              <ThemeButton label={'Login'} onClick={()=>{}} size='small' />
              </div>
        </div>

      </div>
    </div>
  )
}
"use client"

import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { menuItems } from "../constants/menu"
import { images } from '../ui'
import ThemeButton from "./Buttons/ThemeButton"
import { CrossIcon } from "@/public/icons"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-90 transition-opacity duration-300  ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[70%] bg-white z-100 transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Image src={images.landingpageImages.logo} alt={'logo'} className=' w-50 h-9' />
          <button
            onClick={onClose}
            className="w-6 h-6"
          >
            <CrossIcon/>
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4">
          {menuItems.slice(0, 4).map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={index}
                href={item.href}
                onClick={()=>{}}
                className={`text-lg py-3.5 px-5 border-b  ${
                  isActive ? "text-primary-color border-primary-color" : "text-gray-600 border-gray-200 "
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <div className="mt-4">
            <ThemeButton label={"Login"} onClick={()=>{}} size="small" />
          </div>
        </div>
      </div>
    </>
  )
}
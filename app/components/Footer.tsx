import Image from 'next/image'
import React from 'react'
import { images } from '../ui'
import Link from 'next/link'
import { FacebookIcon, HorizontalDivider, InstagramIcon, YoutubeIcon } from '@/public/icons'
import { menuItems } from '../constants/menu'

export const Footer = () => {

    return (
        <div className='bg-white mt-auto mb-0 relative pt-16 pb-7'>
            <Image src={images.landingpageImages.familyPlantBlue} alt={'Family Plant Blue'} className='absolute bottom-0 bg-cover' />
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='flex flex-col gap-10'>
                    <Image src={images.landingpageImages.logo} alt={'logo'} />

                    <div className='flex flex-col gap-4'>
                        <h3 className='text-black text-lg font-semibold'>Disclaimers</h3>
                        <p className='text-gray-500 font-medium text-sm'>
                            The information provided on Equitable Divorce is intended for general informational purposes only and should not be considered as legal, financial, or therapeutic advice. It is not a substitute for professional consultation with qualified experts in their respective fields. We do not endorse or guarantee the accuracy, completeness, or suitability of any information or resources provided on this website. Users are encouraged to seek personalized advice from relevant professionals based on their unique circumstances. Equitable Divorce is not responsible for any actions taken or decisions made by users based on the information found on this site. We shall not be liable for any direct or indirect consequences resulting from the use of our content. The testimonials and success stories shared on this website represent individual experiences and should not be taken as a guarantee of similar outcomes. Results may vary based on specific situations and efforts.
                        </p>
                        <p className='text-gray-500 font-medium text-sm'>
                            By using this website, you acknowledge and agree to these disclaimers and our Terms of Use and Privacy Policy. It is essential to exercise caution and consult professionals as needed when making decisions related to divorce and family matters.
                        </p>
                    </div>

                    <div className='flex flex-row gap-4 py-5 text-base font-semibold text-gray-800'>
                        {menuItems.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='hover:text-primary-color'
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <HorizontalDivider />
                </div>
                <div className='flex flex-row justify-between'>
                        <p>© 2023 Equitable Divorce. All rights reserved.</p>
                        <div className='flex flex-row gap-4'>
                            <Link href={""} className='w-11 h-11 flex items-center hover:cursor-pointer text-gray-500 hover:text-white hover:bg-primary-color justify-center rounded-full bg-gray-100'>
                                  <InstagramIcon/>
                            </Link>
                            <Link href={""} className='w-11 h-11 text-gray-500 hover:cursor-pointer hover:text-white hover:bg-primary-color flex items-center justify-center rounded-full bg-gray-100'>
                                  <YoutubeIcon/>
                            </Link>
                            <Link href={""} className='w-11 h-11 text-gray-500 hover:cursor-pointer hover:text-white hover:bg-primary-color flex items-center justify-center rounded-full bg-gray-100'>
                                  <FacebookIcon/>
                            </Link>  
                        </div>
                </div>
            </div>


        </div>
    )
}
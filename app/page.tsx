"use client"
import Image from "next/image";
import { images } from "./ui";
import { BreakGif, CoupleGif, DivorceGif, FamilyGif, GrassGif, HeartGif, SeparationGif } from "@/public/gifs";
import { FaqAccordion, ThemeButton } from "./components";
import { RightArrow } from "@/public/icons";
import Link from "next/link";
import { useResponsiveSize } from "./hooks/useResponsiveSize";

export default function Home() {
  const isMobile = useResponsiveSize({
  mobile: true,
  tablet: false,
  desktop: false,
})
  return (
    <main>
      <section id="hero">
        <Image src={images.landingpageImages.familyLinesBlue} alt={"family lines blue"} className="md:block hidden absolute right-0 top-0 z-[-1]" />
        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-30 pb-15  md:pt-55 md:pb-30 px-5 ">
          <div className="flex flex-col items-center md:items-start gap-13">
            <div className="flex flex-col gap-5">
              <h2 className=" text-4xl md:text-start text-center md:text-[66px] text-dark-gray font-medium leading-[1.2]">Bringing<br /><span className="font-bold">Families</span> Together</h2>
              <p className="md:text-start text-center text-lg md:text-[28px] md:px-0 px-4 text-dark-gray">For families seeking a path to togetherness amidst the complexities of separation.</p>
            </div>
            <div>
              <ThemeButton label={"Get Started"} size="large" icon={<RightArrow />} iconDirection="end" variant="secondary" onClick={() => { }} />
            </div>
          </div>
          <div className="flex items-center md:items-start justify-center md:justify-start">
           <FamilyGif width={isMobile ? "311" : ""}  height={isMobile?"267":""}/>
          </div>
        </div>
      </section>
      <section className="bg-white py-15 px-5  md:py-27.5 md:px-8 relative">
        <Image src={images.landingpageImages.kiteImage} alt={"kite Image"} className="absolute 2xl:block hidden bottom-0 left-0 hithere" />
        <Image src={images.landingpageImages.cloudImage} alt={"cloud Image"} className="absolute lg:block hidden top-4 right-13 shake2" />
        <Image src={images.landingpageImages.plantImage} alt={"plant Image"} className="absolute lg:block hidden bottom-0 right-0 pulse2" />
        <div className="container max-w-7xl mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 ">
          <div className="flex items-center md:items-start justify-center md:justify-start">
            <CoupleGif width={isMobile ? "310" : "518"}  height={isMobile?"310":"519"} />
          </div>
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl md:text-[52px] text-dark-gray font-medium leading-[1.2] ">About<br /><span className="font-bold">Equitable Divorce</span></h2>
                <p className="text-primary-color text-xl font-medium">Bridging Hearts and Building Bonds.</p>
              </div>
              <p className="text-medium-gray text-base md:text-lg ">Welcome to Equitable Divorce, where we believe in the power of unity during life's most challenging moments. Our website is dedicated to helping families navigate divorce with compassion and fairness at its core. We provide a supportive community and a wealth of resources to guide you through this journey</p>
              <p className="md:text-xl text-lg font-medium text-medium-gray">For families seeking a path to togetherness amidst the complexities of separation.</p>
            </div>
            <div>
              <ThemeButton label={"Buy Now"} icon={<RightArrow />} iconDirection="end" size="small" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-pink py-15 px-5 md:py-27.5 md:px-8">
        <div className="container max-w-7xl mx-auto flex flex-col gap-8 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-center leading-[1.2] text-[52px] text-dark-gray font-bold">Pricing</h2>
            <p className="text-center leading-[1.2] text-xl text-dark-gray">Choose your option based on your budget</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="shadow-lg bg-white group-hover:shadow-2xl group rounded-[20px]">
              <div className="h-32.5 bg-light-rose group-hover:bg-light-rose-dark rounded-t-[20px] z-10 relative overflow-hidden">
                <Image src={images.landingpageImages.cardOneImage} alt={"card one lines"} className="absolute top-0 right-0 opacity-25" />
              </div>
              <div className="bg-white flex flex-col items-center  rounded-b-[20px]">
                <div className="-mt-25 z-20 transition-transform duration-500 group-hover:transform-[rotateY(180deg)_scaleX(-1)]">
                  <HeartGif />
                </div>
                <div className="pt-6 pb-15 flex flex-col items-center gap-4 px-12">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xl text-center xl:text-start text-medium-gray font-bold ">MARRIAGE COUNSELING</p>
                    <p className="text-lg font-medium text-medium-gray">A New Life Together</p>
                  </div>
                  <p className="text-[44px] font-bold text-medium-gray">Free</p>
                  <p className="text-lg font-normal text-medium-gray text-center">Help find common ground and insights to start a new life together. Only takes 3 minutes and an open heart.</p>
                </div>
                <div className="pb-10">
                  <ThemeButton label={"Get Started"} variant="rose" icon={<RightArrow fill="black" />} size="small" iconDirection="end" onClick={() => { }} />
                </div>

              </div>
            </div>

            <div className="shadow-lg bg-white group-hover:shadow-2xl group rounded-[20px]">
              <div className="h-32.5 bg-columbia-blue group-hover:bg-columbia-blue-dark rounded-t-[20px] z-10 relative overflow-hidden">
                <Image src={images.landingpageImages.cardOneImage} alt={"card one lines"} className="absolute top-0 right-0 opacity-25" />
              </div>
              <div className="bg-white flex flex-col items-center  rounded-b-[20px]">
                <div className="-mt-25 z-20 transition-transform duration-500 group-hover:transform-[rotateY(180deg)_scaleX(-1)]">
                  <BreakGif />
                </div>
                <div className="pt-6 pb-8 flex flex-col items-center gap-4 px-12">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xl text-medium-gray font-bold ">DIY ARBITRATION</p>
                    <p className="text-lg font-medium text-medium-gray">Divorce Settlement</p>
                  </div>
                  <p className="text-[44px] font-bold text-medium-gray">$200</p>
                  <p className="text-lg font-normal text-medium-gray text-center">Help reach equitable terms and use as basis to file a formal Divorce Agreement. Helps you move from a constested to an uncontested divorce.</p>
                </div>
                <div className="pb-10">
                  <ThemeButton label={"Buy Now"} variant="columbiablue" icon={<RightArrow fill="black" />} size="small" iconDirection="end" onClick={() => { }} />
                </div>

              </div>
            </div>

            <div className="shadow-lg bg-white group-hover:shadow-2xl group rounded-[20px]">
              <div className="h-32.5 bg-blossom-pink group-hover:bg-blossom-pink-dark rounded-t-[20px] z-10 relative overflow-hidden">
                <Image src={images.landingpageImages.cardOneImage} alt={"card one lines"} className="absolute top-0 right-0 opacity-25" />
              </div>
              <div className="bg-white flex flex-col items-center  rounded-b-[20px]">
                <div className="-mt-25 z-20 transition-transform duration-500 group-hover:transform-[rotateY(180deg)_scaleX(-1)]">
                  <DivorceGif />
                </div>
                <div className="pt-6 pb-15 flex flex-col items-center gap-4 px-12">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xl text-center xl:text-start text-medium-gray font-bold ">FILE DIVORCE AGREEMENT</p>
                    <p className="text-lg  text-center xl:text-start font-medium text-medium-gray">Divorce Agreement Filed in Court</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-center">
                      <p className="text-[44px] font-bold text-medium-gray">$800</p>
                      <p className="text-base text-light-gray">(Includes Court Filing Fees)</p>
                    </div>
                    <p className="text-lg font-normal text-medium-gray text-center">Formal Divorce Agreement filed in court house and copy sent back for confirmation to both parties.</p>
                  </div>
                  <p className="text-base font-normal text-medium-gray text-center">* Requires DIY Arbitration</p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-white py-15 px-5 md:py-27.5 md:px-8 ">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-light-blue rounded-2xl p-12 flex flex-col items-center gap-4">
            <div className="grid grid-cols-12 gap-4">
              <p className="text-medium-gray text-4xl font-bold text-center col-span-12">
                Frequently Asked Questions
              </p>
              <p className="text-xl font-medium text-medium-gray col-start-3 col-end-11 text-center">
                Everything you need to know about the Equitable Divorce
              </p>

            </div>
            <div>
              <SeparationGif width={isMobile ? "278" : "454"}  height={isMobile?"214":"350"} />
            </div>

          </div>
          <div>
            <FaqAccordion />
          </div>
        </div>
      </section>
      <section className="bg-aqua relative min-h-108">
        <div className="container max-w-7xl mx-auto px-3 pt-16 flex flex-col items-center">
          <div className="flex flex-col gap-4">
            <p className="text-4xl text-center text-medium-gray font-bold">Still thinking about it?</p>
            <p className="text-lg text-center text-medium-gray font-medium">Subscribe now and stay connected with Equitable Divorce!</p>
            <div className="flex flex-col md:flex-row md:min-w-159  gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white flex-1 border border-gray-300 focus:border-black  rounded-lg p-4 w-full focus:outline-none focus:shadow-[0_0_0_4px_rgba(148,57,215,0.3)]"
              />
              <div className="flex flex-col gap-3">
                 <p className="text-sm md:hidden block text-medium-gray">We care about your data in our <Link href={"/privacy-policy"} className="underline underline-offset-2 text-primary-color font-semibold">privacy policy</Link>.</p>
                <ThemeButton label={"Subscribe"} icon={<RightArrow />} iconDirection="end" size="small" />
              </div>
            </div>
              <p className="text-sm md:block hidden text-medium-gray">We care about your data in our <Link href={"/privacy-policy"} className="underline underline-offset-2 text-primary-color font-semibold">privacy policy</Link>.</p>
          </div>
          
           
        </div>
        <div className="w-full absolute bottom-0 ">
          <GrassGif />
        </div>

      </section>
    </main>
  );
}

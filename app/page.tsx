"use client"
import Image from "next/image";
import { images } from "./ui";
import { CoupleGif, FamilyGif } from "@/public/gifs";
import { ThemeButton } from "./components";
import { RightArrow } from "@/public/icons";

export default function Home() {
  return (
  <main>
     <section id="hero">
      <Image src={images.landingpageImages.familyLinesBlue} alt={"family lines blue"} className="absolute right-0 top-0 z-[-1]"/>
       <div className="container max-w-7xl mx-auto grid grid-cols-2 gap-6 pt-55 pb-30 px-5 ">
         <div className="flex flex-col items-start gap-13">
           <div className="flex flex-col gap-5">
                <h2 className="text-[66px] text-dark-gray font-medium leading-[1.2]">Bringing<br/><span className="font-bold">Families</span> Together</h2>
                <p className="text-[28px] text-dark-gray">For families seeking a path to togetherness amidst the complexities of separation.</p>
           </div>
            <div>
              <ThemeButton label={"Get Started"} size="large" icon={<RightArrow/>} iconDirection="end" variant="secondary" onClick={()=>{}} />
            </div>
         </div>
         <div>
          <FamilyGif/>
         </div>
       </div>
      </section>
    <section className="bg-white py-28 px-8 relative">
      <Image src={images.landingpageImages.kiteImage} alt={"kite Image"} className="absolute bottom-0 left-0 hithere"/>
       <Image src={images.landingpageImages.cloudImage} alt={"cloud Image"} className="absolute top-4 right-13 shake2"/>
        <Image src={images.landingpageImages.plantImage} alt={"plant Image"} className="absolute bottom-0 right-0 pulse2"/>
        <div className="container max-w-7xl mx-auto grid grid-cols-2 ">
           <div>
                <CoupleGif/>
           </div>
           <div className="flex flex-col items-start gap-10">
             <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                 <h2 className="text-[52px] text-dark-gray font-medium leading-[1.2] ">About<br/><span className="font-bold">Equitable Divorce</span></h2>
                 <p className="text-primary-color text-xl font-medium">Bridging Hearts and Building Bonds.</p>
              </div>
                 <p className="text-medium-gray text-lg ">Welcome to Equitable Divorce, where we believe in the power of unity during life's most challenging moments. Our website is dedicated to helping families navigate divorce with compassion and fairness at its core. We provide a supportive community and a wealth of resources to guide you through this journey</p>
                 <p className="text-xl font-medium text-medium-gray">For families seeking a path to togetherness amidst the complexities of separation.</p>
             </div>
             <div>
              <ThemeButton label={"Buy Now"} icon={<RightArrow/>} iconDirection="end" size="small"/>
             </div>
           </div>
        </div>
    </section>
    <section className="bg-light-pink py-28 px-8">
            <div className="container max-w-7xl mx-auto ">
              <div className="flex flex-col gap-2"> 
                  <h2 className="text-center leading-[1.2] text-[52px] text-dark-gray font-bold">Pricing</h2>
                 <p className="text-center leading-[1.2] text-xl text-dark-gray">Choose your option based on your budget</p>
              </div>
                 
            </div>
    </section>
  </main>
  );
}

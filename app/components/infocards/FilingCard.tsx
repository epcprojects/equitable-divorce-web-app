"use client";
import React, { useState } from "react";
import ThemeInput from "../inputs/ThemeInput";
import ActionButton from "../Buttons/ActionButton";
import Link from "next/link";
import { FamilyGif } from "@/public/gifs";
import { useResponsiveSize } from "@/app/hooks/useResponsiveSize";
import ThemeDropdown from "../Dropdown/ThemeDropdown";


export const FillingCard= () => {
      const [country, setCountry] = useState("");
       const [state, setState] = useState("");
        const [city, setCity] = useState("");
        const [zipCode, setZipCode] = useState("");
         const handleNext = () => {
    console.log("Form Data:", {
      country,
      state,
      city,
      zipCode,
    });
  };
  const isMobile = useResponsiveSize({
      mobile: true,
      tablet: false,
      desktop: false,
    })
  return (
   <div className='container max-w-7xl mx-auto pt-20 pb-0 lg:pb-35 lg:pt-35  '>
          <div className='bg-white p-6 lg:p-12 grid grid-cols-1 md:grid-cols-2 rounded-xl gap-15 w-full md:w-auto'>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-semibold">Filing Confirmation :</p>
                    <p className="text-lg font-semibold">Where do you want to file the Divorce?</p>
                       <ThemeDropdown
                label="Country"
                required
                options={[{ label: "Pakistan" }, { label: "United States" }]}
                value={country}
                onChange={(val) => setCountry(val)}
              />
              <ThemeInput
                label="State"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <ThemeInput
                label="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <ThemeInput
                label="Zip Code"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
                </div>
                <div className="flex  flex-row justify-end gap-3">
            <ActionButton
              variant="outline"
              className="w-auto"
              label={"BACK"}
              onClick={() => {}}
            />
            <ActionButton label={"NEXT"} onClick={handleNext} />
          </div>

            </div>
            <div className='bg-aqua p-12 rounded-xl hidden md:block'>
              <div className="flex items-center justify-center ">
                <FamilyGif width={isMobile ? "311" : "492"} height={isMobile ? "267" : "421"} />
              </div>
            </div>
          </div>
        </div> 
  );
};






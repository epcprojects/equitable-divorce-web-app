"use client";
import React, { useState } from "react";
import ThemeInput from "../inputs/ThemeInput";
import GenderSelect from "../inputs/GenderInput";
import ThemeDropdown from "../Dropdown/ThemeDropdown";
import ActionButton from "../Buttons/ActionButton";


export const MarriageCard = () => {
  const [Date,setDate]= useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const handleNext = () => {
    console.log("Form Data:", {
      Date,
      country,
      state,
      city,
      zipCode,
    });
  };
  return (
    <div className="container max-w-7xl mx-auto pt-35">
      <div className="bg-white p-12 rounded-xl">
        <div className=" flex flex-col gap-4">
          <p className="text-2xl font-semibold">Please Enter Marriage Information :</p>

          <div className="flex flex-col gap-6">
            <ThemeInput
              label="When did you get married?"
              required
              type="date"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
            <p className="text-base font-semibold">Where did you get married?</p>
            <div className="grid grid-cols-2 gap-6 w-full">
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
      </div>
    </div>
  );
};

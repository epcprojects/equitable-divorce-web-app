"use client";
import React, { useState } from "react";
import ThemeInput from "../inputs/ThemeInput";
import GenderSelect from "../inputs/GenderInput";
import ThemeDropdown from "../Dropdown/ThemeDropdown";
import ActionButton from "../Buttons/ActionButton";
type Gender = "female" | "male";

export const Spouseinfocard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const handleNext = () => {
    console.log("Form Data:", {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      mobileNumber,
      email,
      presentAddress,
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
          <p className="text-2xl font-semibold">Spouse Information :</p>
          <div className="grid grid-cols-2 gap-6 w-full">
            <ThemeInput
              label="Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <ThemeInput
              label="Your Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <GenderSelect
              value={gender as Gender}
              onChange={(val) => setGender(val)}
            />
            <ThemeInput
              label="Date of Birth"
              type="date"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <p className="text-lg font-semibold py-4">Contact Info:</p>
          <div className="grid grid-cols-2 gap-6 w-full">
            <ThemeInput
              label="Mobile Number"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <ThemeInput
              label="Email Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="text-lg font-semibold py-4">Address:</p>
          <div className="flex flex-col gap-6">
            <ThemeInput
              label="Present Address"
              required
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
            />
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

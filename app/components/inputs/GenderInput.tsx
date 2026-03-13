"use client";
import { FemaleIcon, MaleIcon } from "@/public/icons";
import React, { useState } from "react";

type Gender = "female" | "male";

interface GenderOption {
  value: Gender;
  label: string;
  icon: React.ReactNode;
}
const genderOptions: GenderOption[] = [
  { value: "female", label: "Female", icon: <FemaleIcon /> },
  { value: "male", label: "Male", icon: <MaleIcon /> },
];
interface GenderSelectProps {
  label?: string;
  required?: boolean;
  value?: Gender;
  onChange?: (value: Gender) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({
  label = "Gender",
  required = true,
  value,
  onChange,
}) => {
  const [selected, setSelected] = useState<Gender | undefined>(value);

  const handleSelect = (val: Gender) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-base font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="flex">
        {genderOptions.map((option, index) => {
          const isSelected = selected === option.value;
          const roundedClass = index === 0 ? "rounded-l-lg" : "rounded-r-lg";
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`
                flex text-base justify-center items-center gap-2.5 px-5 py-[11px] ${roundedClass} border transition-all w-full duration-150 text-sm font-medium
                ${
                  isSelected
                    ? "bg-violet-50 border-violet-400 text-violet-700"
                    : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              <span>{option.icon}</span>
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GenderSelect;

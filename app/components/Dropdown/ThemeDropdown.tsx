'use client';

import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ArrowDownIcon } from '@/public/icons';

export type DropdownOption = {
  label: string;
};

type ThemeDropdownProps = {
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
};

const ThemeDropdown: React.FC<ThemeDropdownProps> = ({
  label,
  required = false,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
}) => {
  const selected = options.find((o) => o.label === value);

  return (
    <div className="block">
      {label && (
        <span className="block mb-1 text-sm font-normal text-black md:text-base text-start">
          {label} {required && <span className="text-red-500"> *</span>}
        </span>
      )}

      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <MenuButton className={`w-full h-11 px-3 border rounded-lg outline-none flex items-center justify-between gap-2 bg-white focus:ring focus:ring-gray-200 ${open ? 'ring ring-gray-200 border-gray-200' : 'border-gray-200'}`}>
              <span className={`text-sm md:text-base truncate ${selected ? 'text-gray-900' : 'text-gray-400'}`}>
                {selected ? selected.label : placeholder}
              </span>
              <ArrowDownIcon className={`w-4 h-4 shrink-0 text-gray-400 `} />
            </MenuButton>

            <MenuItems className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-sm outline-none overflow-hidden">
              {options.map((option) => (
                <MenuItem key={option.label}>
                  {({ focus }) => (
                    <button
                      type="button"
                      onClick={() => onChange?.(option.label)}
                      className={`w-full px-3 py-2.5 text-sm md:text-base text-start text-gray-700 ${focus ? 'bg-gray-50' : ''} ${value === option.label ? 'font-medium text-gray-900' : 'font-normal'}`}
                    >
                      {option.label}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ThemeDropdown;
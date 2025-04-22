import React from 'react';
import Image from "next/image";


interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options,
    value,
    onChange,
    disabled = false,
    placeholder = 'Select an option',
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <div className='relative' >
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    className={`w-full px-3 pr-5 py-4 border border-gray-300 rounded-none shadow-xs
          focus:outline-none bg-white
          disabled:bg-gray-100 text-gray-900 appearance-none`}
                >
                    {placeholder && <option value="" disabled hidden>{placeholder}</option>}
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-black">
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                    <Image
                        src="/svg/dropdownArrowDown.svg"
                        alt="dropdown"
                        width={6}
                        height={6}
                        className="hidden md:block h-[25px] w-[25px]"
                    />
                </div>
            </div>

        </div>
    );
};

export default CustomSelect;

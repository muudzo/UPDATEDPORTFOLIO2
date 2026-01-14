import React from 'react';

export const Win7Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            {...props}
            className={`
        border border-[#8e8f90] rounded-[2px] 
        px-1 py-[3px] text-sm font-[Segoe UI]
        bg-white shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]
        focus:outline-none focus:border-[#5794bf] focus:bg-white
        disabled:bg-[#f0f0f0] disabled:text-[#888]
        placeholder:italic placeholder:text-gray-400
        ${props.className}
      `}
        />
    );
};

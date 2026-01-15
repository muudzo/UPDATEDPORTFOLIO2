import React from 'react';
import { Button as BaseButton } from '../common/Button';

export const MacButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ variant = 'secondary', className = '', ...props }) => {
    const baseStyles = "rounded-full px-4 py-1 text-[13px] font-[Lucida_Grande] transition-all shadow-sm active:shadow-inner border";

    const variants = {
        primary: `
      bg-gradient-to-b from-[#6cb3fa] to-[#1878de] 
      border-[#1258a6] text-white font-medium 
      shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]
      hover:brightness-105 active:brightness-95
    `,
        secondary: `
      bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] 
      border-[#c0c0c0] text-black 
      shadow-[0_1px_1px_rgba(0,0,0,0.1)]
      hover:from-[#fcfcfc] hover:to-[#e8e8e8]
      active:bg-[#e0e0e0] active:shadow-inner
    `
    };

    return (
        <BaseButton
            {...props}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            variant="ghost" // Override base styles
        />
    );
};

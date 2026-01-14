import React from 'react';
import { Button as BaseButton } from '../common/Button';

export const Win7Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <BaseButton
            {...props}
            className={`
        bg-gradient-to-b from-[#f2f2f2] to-[#cfd0d2] 
        hover:from-[#eaf6fd] hover:to-[#a7d9f5] hover:border-[#3c7fb1] 
        border border-[#707070]
        text-black font-[Segoe UI] text-sm px-5 py-[3px] rounded-[3px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]
        active:from-[#e5f4fc] active:to-[#dbebfd] active:border-[#2c628b] active:shadow-inner
        focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1
        ${props.className}
      `}
            variant="ghost" // Use base logic but override styles entirely
        />
    );
};

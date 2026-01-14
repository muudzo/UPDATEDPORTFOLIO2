import React, { useEffect, useRef } from 'react';

interface AppleMenuProps {
    onClose: () => void;
}

export const AppleMenu: React.FC<AppleMenuProps> = ({ onClose }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // If clicking inside menu or on the apple icon (handled by parent toggle ideally)
            // For now simple outside click
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div
            ref={ref}
            className="absolute top-[22px] left-[10px] w-[220px] bg-white/95 backdrop-blur-sm border border-gray-400 border-t-0 shadow-xl rounded-b-[4px] py-1 z-[101] animate-in fade-in zoom-in-95 duration-100"
        >
            <div className="flex flex-col text-[13px] font-medium text-black cursor-default select-none">
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">About This Mac</div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Software Update...</div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">App Store...</div>
                <div className="h-px bg-gray-300 my-1 mx-3"></div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">System Preferences...</div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Dock</div>
                <div className="h-px bg-gray-300 my-1 mx-3"></div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Force Quit Finder</div>
                <div className="h-px bg-gray-300 my-1 mx-3"></div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Sleep</div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Restart...</div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Shut Down...</div>
                <div className="h-px bg-gray-300 my-1 mx-3"></div>
                <div className="px-4 py-[3px] hover:bg-[#3b99fc] hover:text-white">Log Out User...</div>
            </div>
        </div>
    );
};

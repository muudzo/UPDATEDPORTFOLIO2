import React, { useEffect, useRef } from 'react';
import { Icon } from '../common/Icon';

interface SpotlightSearchProps {
    onClose: () => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="absolute top-[22px] right-[10px] w-[300px] bg-[#f0f0f0] border border-[#a0a0a0] border-t-0 rounded-b-md shadow-xl z-[102] overflow-hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center p-2 gap-2 bg-gradient-to-b from-white to-[#e8e8e8] border-b border-[#d0d0d0]">
                <Icon icon="search" size={16} className="opacity-50" />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Spotlight"
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 font-[Lucida_Grande]"
                />
            </div>

            {/* Results Placeholder */}
            <div className="max-h-[300px] overflow-y-auto bg-white/90">
                <div className="p-2 text-xs text-gray-500 font-medium bg-[#e8e8e8]">Top Hit</div>
                <div className="flex items-center gap-2 px-3 py-1 hover:bg-[#3b99fc] hover:text-white group cursor-default">
                    <Icon icon="terminal" size={24} />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Terminal</span>
                        <span className="text-[10px] text-gray-500 group-hover:text-blue-100">Applications</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

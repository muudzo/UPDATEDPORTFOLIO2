import React, { useState } from 'react';

interface TrafficLightsProps {
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
}

export const TrafficLights: React.FC<TrafficLightsProps> = ({ onClose, onMinimize, onMaximize }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="flex items-center gap-[8px] h-full pl-3 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Close (Red) */}
            <button
                onClick={onClose}
                className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] border-[0.5px] border-[#e0443e] flex items-center justify-center active:brightness-90 focus:outline-none"
            >
                <span className={`text-[8px] font-bold text-black opacity-0 group-hover:opacity-60 leading-none mt-[1px]`}>x</span>
            </button>

            {/* Minimize (Yellow) */}
            <button
                onClick={onMinimize}
                className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] border-[0.5px] border-[#dea123] flex items-center justify-center active:brightness-90 focus:outline-none"
            >
                <span className={`text-[8px] font-bold text-black opacity-0 group-hover:opacity-60 leading-none mt-[-2px]`}>–</span>
            </button>

            {/* Maximize (Green) */}
            <button
                onClick={onMaximize}
                className="w-[12px] h-[12px] rounded-full bg-[#28c93f] border-[0.5px] border-[#1aab29] flex items-center justify-center active:brightness-90 focus:outline-none"
            >
                <span className={`text-[8px] font-bold text-black opacity-0 group-hover:opacity-60 leading-none mt-[1px]`}>+</span>
            </button>
        </div>
    );
};

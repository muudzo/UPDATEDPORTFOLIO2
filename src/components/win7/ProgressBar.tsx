import React from 'react';

interface ProgressBarProps {
    value: number;
    max?: number;
    className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, className = '' }) => {
    const percent = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={`h-[16px] bg-[#e6e6e6] border border-[#bcbcbc] rounded-[2px] relative overflow-hidden ${className}`}>
            <div
                className="h-full relative transition-all duration-300 ease-out"
                style={{ width: `${percent}%`, background: 'linear-gradient(to bottom, #ccfccb 0%, #06d906 50%, #03a503 100%)' }}
            >
                {/* Gloss overlay */}
                <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/40 opacity-60" />

                {/* Animated highlight (High priority visual for user) */}
                <div className="absolute inset-0 w-full h-full opacity-30 animate-pulse bg-white/20" />
            </div>
        </div>
    );
};

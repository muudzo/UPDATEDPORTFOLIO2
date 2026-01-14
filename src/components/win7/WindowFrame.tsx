import React from 'react';

interface WindowFrameProps {
    children: React.ReactNode;
    isActive?: boolean;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ children, isActive }) => {
    return (
        <div
            className={`relative w-full h-full rounded-lg overflow-hidden flex flex-col transition-shadow duration-200`}
            style={{
                background: 'rgba(210, 225, 240, 0.85)',
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid rgba(255,255,255,0.4)',
                boxShadow: isActive ? '0 0 0 1px rgba(255,255,255,0.4), 0 10px 40px rgba(0,0,0,0.5)' : '0 5px 20px rgba(0,0,0,0.3)',
            }}
        >
            {/* Gloss Shine */}
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col h-full">
                {children}
            </div>
        </div>
    );
};

import React from 'react';

interface GlassFrameProps {
    children: React.ReactNode;
    isActive?: boolean;
}

export const GlassFrame: React.FC<GlassFrameProps> = ({ children, isActive }) => {
    return (
        <div
            className="relative rounded-t-lg shadow-2xl overflow-hidden"
            style={{
                background: 'var(--window-bg)', // Should be semi-transparent
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--window-border)',
                boxShadow: isActive ? '0 10px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.3)' : '0 5px 20px rgba(0,0,0,0.3)',
            }}
        >
            {/* Gloss Shine */}
            <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

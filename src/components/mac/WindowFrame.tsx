import React from 'react';

interface WindowFrameProps {
    children: React.ReactNode;
    isActive: boolean;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ children, isActive }) => {
    return (
        <div
            className={`relative rounded-t-lg rounded-b-md overflow-hidden flex flex-col h-full bg-[#ececec] transition-all duration-200`}
            style={{
                boxShadow: isActive ? '0 25px 50px -12px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.15)' : '0 10px 30px -10px rgba(0,0,0,0.3)',
                opacity: isActive ? 1 : 0.95
            }}
        >
            {/* Title Bar Gradient Background (rendered within frame) */}
            <div
                className="absolute top-0 left-0 right-0 h-[24px] z-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, #ededed 0%, #d0d0d0 100%)',
                    borderBottom: '1px solid #a8a8a8'
                }}
            />

            {/* Pinstripe overlay for brushed metal feel (optional) */}
            {/* <div className="absolute inset-0 z-[1] pointer-events-none opacity-5" style={{ backgroundImage: 'var(--pinstripe)' }} /> */}

            {/* Content Container */}
            <div className="relative z-10 flex-1 flex flex-col overflow-hidden pt-[24px]">
                {children}
            </div>
        </div>
    );
};

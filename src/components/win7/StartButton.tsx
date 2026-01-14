import React from 'react';

export const StartButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative rounded-full cursor-pointer transition-all hover:brightness-110 active:brightness-90 active:scale-95 group z-50 flex-shrink-0"
            style={{
                width: 42,
                height: 42,
                background: 'radial-gradient(circle, #256dbe 0%, #175294 50%, #0d325e 100%)',
                boxShadow: '0 0 4px rgba(0,0,0,0.5), inset 0 0 6px rgba(255,255,255,0.4)',
                border: '1px solid rgba(0,0,0,0.4)'
            }}
        >
            {/* Logo Container */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-[1px] transform rotate-0 w-4 h-4">
                    <div className="rounded-tl-[2px] bg-[#f25022] shadow-inner"></div>
                    <div className="rounded-tr-[2px] bg-[#7fba00] shadow-inner"></div>
                    <div className="rounded-bl-[2px] bg-[#00a4ef] shadow-inner"></div>
                    <div className="rounded-br-[2px] bg-[#ffb900] shadow-inner"></div>
                </div>
            </div>

            {/* Gloss Overlay */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent rounded-t-full pointer-events-none" />

            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.3)] pointer-events-none" />
        </div>
    );
};

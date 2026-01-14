import React from 'react';

export const Taskbar: React.FC = () => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-10 z-50 flex items-center px-4 border-t border-white/10 transition-all duration-300"
            style={{
                backgroundColor: 'var(--taskbar-bg, rgba(0,0,0,0.5))',
                backdropFilter: 'var(--glass-blur, blur(10px))',
            }}
        >
            <div className="text-white text-xs opacity-70">Taskbar Area</div>
        </div>
    );
};

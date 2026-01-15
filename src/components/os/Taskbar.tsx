import React from 'react';
import { Clock } from '../common/Clock';

export const Taskbar: React.FC = () => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-[40px] z-50 flex items-center justify-between pointer-events-auto select-none transition-theme border-t border-white/10 transition-all duration-300"
            style={{
                backgroundColor: 'var(--taskbar-bg, rgba(0,0,0,0.5))',
                backdropFilter: 'var(--glass-blur, blur(10px))',
            }}
        >
            {/* System Tray */}
            <div className="flex items-center px-2 py-1 gap-2 border-l border-white/10 bg-white/5 h-full">
                <div className="flex flex-col items-center justify-center text-xs text-center text-white leading-tight px-2 hover:bg-white/10 rounded cursor-default h-full min-w-[60px]">
                    <Clock format="timeOnly" />
                    {/* Optional Date for larger taskbar */}
                </div>
                <div className="w-[10px] h-full border-l border-white/20 hover:bg-white/20 cursor-pointer" title="Show Desktop"></div>
            </div>
        </div>
    );
};

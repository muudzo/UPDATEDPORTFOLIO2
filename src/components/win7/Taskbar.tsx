import React from 'react';
import { StartButton } from './StartButton';
import { Clock } from '../common/Clock';

export const Taskbar: React.FC = () => {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-[40px] z-50 flex items-center justify-between pointer-events-auto select-none"
            style={{
                background: 'linear-gradient(to bottom, rgba(23,32,42,0.85) 0%, rgba(23,32,42,0.95) 100%)', // Fallback
                backgroundColor: 'var(--taskbar-bg)',
                backdropFilter: 'var(--glass-blur)',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
                borderTop: '1px solid rgba(255,255,255,0.3)'
            }}
        >
            <div className="flex items-center h-full pl-0 relative">
                <div className="pl-1 pt-1 z-10 transition-transform hover:scale-105 active:scale-95 active:brightness-90">
                    <StartButton />
                </div>

                {/* Quick Launch / Task Area */}
                <div className="flex-1 ml-2 h-full flex items-center">
                    {/* Placeholder for pinned apps */}
                </div>
            </div>

            {/* System Tray */}
            <div className="h-full flex items-center px-4 gap-3 bg-[rgba(10,10,10,0.2)] border-l border-[rgba(255,255,255,0.1)] shadow-[inset_1px_0_0_rgba(255,255,255,0.05)]">
                <div className="w-4 h-4 bg-white/20 rounded-sm"></div> {/* Network Icon Placeholder */}
                <div className="w-4 h-4 bg-white/20 rounded-sm"></div> {/* Volume Icon Placeholder */}
                <Clock />
                <div className="absolute right-0 top-0 bottom-0 w-[12px] h-full bg-white/10 hover:bg-white/30 cursor-pointer border-l border-white/20" title="Show Desktop" />
            </div>
        </div>
    );
};

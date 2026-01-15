import React, { useState } from 'react';
import { Clock } from '../common/Clock';
import { StartMenu } from '../win7/StartMenu';
import { StartButton } from './StartButton';

export const Taskbar: React.FC = () => {
    const [isStartOpen, setIsStartOpen] = useState(false);

    return (
        <>
            {isStartOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsStartOpen(false)}></div>
            )}

            <div
                className="fixed bottom-0 left-0 right-0 h-[40px] z-50 flex items-center justify-between pointer-events-auto select-none transition-theme border-t border-white/10 transition-all duration-300"
                style={{
                    backgroundColor: 'var(--taskbar-bg, rgba(0,0,0,0.5))',
                    backdropFilter: 'var(--glass-blur, blur(10px))',
                }}
            >
                {isStartOpen && <StartMenu onClose={() => setIsStartOpen(false)} />}

                <div className="flex items-center h-full pl-2">
                    <div onClick={() => setIsStartOpen(!isStartOpen)}>
                        <StartButton />
                    </div>

                    <div className="flex-1 px-4">
                        {/* Taskbar Items Placeholder */}
                    </div>
                </div>

                {/* System Tray */}
                <div className="flex items-center px-2 py-1 gap-2 border-l border-white/10 bg-white/5 h-full">
                    <div className="flex flex-col items-center justify-center text-xs text-center text-white leading-tight px-2 hover:bg-white/10 rounded cursor-default h-full min-w-[60px]">
                        <Clock format="timeOnly" />
                    </div>
                    <div className="w-[10px] h-full border-l border-white/20 hover:bg-white/20 cursor-pointer" title="Show Desktop"></div>
                </div>
            </div>
        </>
    );
};

import React from 'react';
import { playSound } from '../../utils/sound';

// Icons will be passed as children or config later
export const Dock: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-center pb-2 z-50 pointer-events-none">
            <div
                className="flex items-end px-4 pb-2 gap-2 rounded-t-xl rounded-b-lg backdrop-blur-md transition-all pointer-events-auto"
                onMouseEnter={() => playSound('hover')}
                style={{
                    background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.3) 0%, rgba(255, 255, 255, 0.7) 100%)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    minWidth: '300px',
                    height: '68px' // Variable height based on content
                }}
            >
                {/* Placeholder Icons */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer relative group">
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/60 rounded-full opacity-0 group-hover:opacity-100" />
                    </div>
                ))}
            </div>
        </div>
    );
};

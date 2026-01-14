import React from 'react';

interface WindowControlsProps {
    onMinimize?: () => void;
    onMaximize?: () => void;
    onClose?: () => void;
}

export const WindowControls: React.FC<WindowControlsProps> = ({ onMinimize, onMaximize, onClose }) => {
    return (
        <div className="flex z-50 pointer-events-auto h-5 items-start mt-[1px] mr-[2px]">
            <button
                onClick={onMinimize}
                className="w-[28px] h-[18px] flex items-center justify-center bg-gradient-to-b from-white/50 to-white/10 hover:bg-[#a9cbf7] hover:from-[#eef5fd] hover:to-[#c6dffc] border border-white/40 rounded-bl transition-all shadow-sm group"
                title="Minimize"
            >
                <div className="w-[10px] h-[2px] bg-slate-700 opacity-80 group-hover:opacity-100 mb-1" />
            </button>

            <button
                onClick={onMaximize}
                className="w-[28px] h-[18px] flex items-center justify-center bg-gradient-to-b from-white/50 to-white/10 hover:bg-[#a9cbf7] hover:from-[#eef5fd] hover:to-[#c6dffc] border border-white/40 border-l-0 transition-all shadow-sm group"
                title="Maximize"
            >
                <div className="w-[10px] h-[8px] border-[2px] border-slate-700 opacity-80 group-hover:opacity-100 border-t-[3px]" />
            </button>

            <button
                onClick={onClose}
                className="w-[45px] h-[18px] flex items-center justify-center bg-gradient-to-b from-[#e8a3a3] to-[#d66f6f] hover:from-[#f0a0a0] hover:to-[#e05050] hover:bg-[#e81123] border border-white/40 border-l-0 rounded-br transition-all shadow-sm group"
                title="Close"
            >
                <span className="text-white font-bold text-shadow text-[10px] mt-[-2px] group-hover:scale-110">✖</span>
            </button>
        </div>
    );
};

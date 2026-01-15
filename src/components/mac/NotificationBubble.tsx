import React from 'react';
import { Icon } from '../common/Icon';

interface AquaNotificationProps {
    title: string;
    message: string;
    icon?: string;
    onClose: () => void;
}

export const AquaNotification: React.FC<AquaNotificationProps> = ({ title, message, icon, onClose }) => {
    return (
        <div
            className="relative w-[280px] bg-[#202020]/90 backdrop-blur-md text-white rounded-[15px] p-3 shadow-2xl border border-white/10 flex gap-3 animate-in slide-in-from-top-4 fade-in duration-300 pointer-events-auto cursor-pointer hover:bg-[#303030]/90"
            onClick={onClose}
        >
            <div className="flex-shrink-0 mt-1">
                <Icon icon={icon || "info"} size={32} className="opacity-90" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <h4 className="font-bold text-[13px] leading-tight mb-0.5">{title}</h4>
                <p className="text-[12px] opacity-90 leading-snug">{message}</p>
            </div>

            {/* Growl-style close button (usually hidden until hover, but for touch/web explicit is okay) */}
            <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute top-1 right-1 text-white/40 hover:text-white/80 w-5 h-5 flex items-center justify-center rounded-full text-xs"
            >
                ×
            </button>
        </div>
    );
};

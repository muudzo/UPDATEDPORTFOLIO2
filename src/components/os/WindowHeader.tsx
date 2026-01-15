import React from 'react';
import { useThemeStore } from '../../store/themeStore';

interface WindowHeaderProps {
    title: string;
    icon?: string;
    onClose: () => void;
    onMinimize: () => void;
    onMaximize: () => void;
    onMouseDown: () => void;
    onDoubleClick?: () => void;
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({
    title,
    icon,
    onClose,
    onMinimize,
    onMaximize,
    onMouseDown,
    onDoubleClick
}) => {
    const { theme } = useThemeStore();

    return (
        <div
            className="h-8 flex items-center justify-between px-2 select-none cursor-default transition-theme"
            style={{
                background: 'var(--window-header-bg)',
                borderBottom: '1px solid var(--window-border)',
                color: 'var(--text-color)'
            }}
            onMouseDown={onMouseDown}
            onDoubleClick={onDoubleClick}
        >
            {/* Mac Controls (Left) */}
            {theme === 'mac' && (
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 group">
                        <span role="button" aria-label="Close" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClose()} className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer flex items-center justify-center text-[8px] text-[#4d0000] opacity-0 group-hover:opacity-100 transition-opacity" onClick={onClose}>✕</span>
                        <span role="button" aria-label="Minimize" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onMinimize()} className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer flex items-center justify-center text-[8px] text-[#995700] opacity-0 group-hover:opacity-100 transition-opacity" onClick={onMinimize}>−</span>
                        <span role="button" aria-label="Maximize" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onMaximize()} className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer flex items-center justify-center text-[8px] text-[#006500] opacity-0 group-hover:opacity-100 transition-opacity" onClick={onMaximize}>+</span>
                    </div>
                </div>
            )}

            <div className={`flex items-center gap-2 flex-1 ${theme === 'mac' ? 'justify-center pr-12' : 'justify-start ml-2'}`}>
                {icon && <img src={icon} alt="" className="w-4 h-4 drop-shadow-sm" />}
                <span className="text-sm font-medium opacity-90 shadow-sm" style={{ textShadow: theme === 'win7' ? '0 0 5px rgba(255,255,255,0.8)' : 'none' }}>
                    {title}
                </span>
            </div>

            {/* Windows 7 Controls (Right) */}
            {theme === 'win7' && (
                <div className="flex items-center h-6">
                    <button aria-label="Minimize" className="w-8 h-5 flex items-center justify-center hover:bg-white/20 active:bg-white/10 rounded-sm transition-colors" onClick={onMinimize}>
                        <span className="w-2 h-[2px] bg-current opacity-80"></span>
                    </button>
                    <button aria-label="Maximize" className="w-8 h-5 flex items-center justify-center hover:bg-white/20 active:bg-white/10 rounded-sm transition-colors" onClick={onMaximize}>
                        <span className="w-2 h-2 border border-current opacity-80"></span>
                    </button>
                    <button aria-label="Close" className="w-10 h-5 flex items-center justify-center hover:bg-red-600 hover:text-white active:bg-red-700 rounded-sm transition-colors ml-1" onClick={onClose}>
                        <span className="text-xs font-bold leading-none">✕</span>
                    </button>
                </div>
            )}
        </div>
    );
};

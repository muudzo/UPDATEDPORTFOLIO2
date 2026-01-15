import React from 'react';
import { Button } from '../common/Button';

interface WindowHeaderProps {
    title: string;
    icon?: string;
    onMouseDown: (e: React.MouseEvent) => void;
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({
    title,
    icon,
    onMouseDown,
    onClose,
    onMinimize,
    onMaximize
}) => {
    return (
        <div
            className="h-8 flex items-center justify-between px-2 select-none cursor-default transition-theme"
            style={{
                background: 'var(--window-header-bg)',
                borderBottom: '1px solid var(--window-border)',
                color: 'var(--text-color)'
            }}
            onMouseDown={onMouseDown}
            onDoubleClick={onMaximize}
        >
            <div className="flex items-center gap-2">
                {icon && <img src={icon} alt="" className="w-4 h-4" />}
                <span className="text-sm font-medium opacity-80">{title}</span>
            </div>

            <div className="flex items-center gap-1 on-hover-show-controls">
                <div className="flex gap-1">
                    {/* Placeholder controls, will be styled by theme */}
                    <span className="w-3 h-3 rounded-full bg-red-400 cursor-pointer hover:bg-red-500" onClick={onClose} />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer hover:bg-yellow-500" onClick={onMinimize} />
                    <span className="w-3 h-3 rounded-full bg-green-400 cursor-pointer hover:bg-green-500" onClick={onMaximize} />
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { WindowState } from './types';

interface WindowContainerProps {
    windowState: WindowState;
    isActive: boolean;
    onFocus: () => void;
    children: React.ReactNode;
}

export const WindowContainer: React.FC<WindowContainerProps> = ({
    windowState,
    isActive,
    onFocus,
    children
}) => {
    if (!windowState.isOpen) return null;
    if (windowState.isMinimized) return null;

    return (
        <div
            onMouseDown={onFocus}
            style={{
                position: 'absolute',
                top: windowState.position.y,
                left: windowState.position.x,
                width: windowState.size.width,
                height: windowState.size.height,
                zIndex: windowState.zIndex,
            }}
            className={`absolute shadow-xl overflow-hidden transition-shadow ${isActive ? 'ring-2 ring-blue-400' : ''}`}
        >
            {children}
        </div>
    );
};

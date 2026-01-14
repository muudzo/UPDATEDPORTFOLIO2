import React from 'react';

interface WindowBodyProps {
    children: React.ReactNode;
}

export const WindowBody: React.FC<WindowBodyProps> = ({ children }) => {
    return (
        <div className="flex-1 overflow-auto relative w-full h-full">
            {children}
        </div>
    );
};

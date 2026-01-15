import React from 'react';

interface ScrollContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, className = '', style }) => {
    return (
        <div
            className={`overflow-auto scrollbar-aqua ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

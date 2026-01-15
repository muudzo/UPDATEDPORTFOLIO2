import React from 'react';

interface PinstripeBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    intensity?: 'light' | 'medium';
}

export const PinstripeBackground: React.FC<PinstripeBackgroundProps> = ({ children, className = '', intensity = 'medium' }) => {
    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className}`}
            style={{
                backgroundColor: '#e8e8e8',
                background: `
          repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, ${intensity === 'light' ? '0.3' : '0.5'}) 0px,
            rgba(255, 255, 255, ${intensity === 'light' ? '0.3' : '0.5'}) 1px,
            transparent 1px,
            transparent 2px
          )
        `
            }}
        >
            {children}
        </div>
    );
};

import React from 'react';

interface DesktopProps {
    children?: React.ReactNode;
}

export const Desktop: React.FC<DesktopProps> = ({ children }) => {
    return (
        <main
            className="fixed inset-0 w-full h-full overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
                backgroundImage: 'var(--desktop-bg)',
                backgroundColor: 'var(--bg-color)',
            }}
        >
            {children}
        </main>
    );
};

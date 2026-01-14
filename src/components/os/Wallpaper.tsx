import React, { useState, useEffect } from 'react';

interface WallpaperProps {
    theme: 'win7' | 'aqua';
    onContextMenu?: (e: React.MouseEvent) => void;
}

export const Wallpaper: React.FC<WallpaperProps> = ({ theme, onContextMenu }) => {
    // In a real app we might preload images
    const [activeTheme, setActiveTheme] = useState(theme);

    // Transition logic could go here
    useEffect(() => {
        setActiveTheme(theme);
    }, [theme]);

    // We rely on CSS variables set on body, but this component can render a specific image if needed
    // Or render a trusted color layer
    return (
        <div
            className="absolute inset-0 w-full h-full -z-10 transition-opacity duration-700"
            onContextMenu={onContextMenu}
        >
            {/* Placeholder for complex image handling if needed */}
        </div>
    );
};

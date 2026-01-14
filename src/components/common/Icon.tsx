import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
    icon?: string; // URL or Lucide icon name
    size?: number;
    className?: string;
    onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({
    icon,
    size = 24,
    className = '',
    onClick
}) => {
    // Check if icon string matches a Lucide icon
    const LucideIcon = icon && (LucideIcons as any)[icon];

    if (LucideIcon) {
        return (
            <div className={`flex items-center justify-center ${className}`} onClick={onClick}>
                <LucideIcon size={size} />
            </div>
        );
    }

    // Fallback to image if URL
    if (icon?.includes('/') || icon?.includes('.')) {
        return (
            <div
                className={`flex items-center justify-center select-none ${className}`}
                style={{ width: size, height: size }}
                onClick={onClick}
            >
                <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-contain pointer-events-none"
                    draggable={false}
                />
            </div>
        );
    }

    // Default fallback
    return (
        <div className={`bg-gray-400 rounded-full ${className}`} style={{ width: size, height: size }} onClick={onClick} />
    );
};

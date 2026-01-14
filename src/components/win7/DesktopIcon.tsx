import React from 'react';
import { Icon } from '../common/Icon';

interface DesktopIconProps {
    icon: string;
    label: string;
    selected?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    onDoubleClick?: () => void;
    // Position controlled by parent via absolute or grid
    className?: string;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
    icon,
    label,
    selected,
    onClick,
    onDoubleClick,
    className = ''
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-start w-[74px] p-1 cursor-pointer border border-transparent transition-all group ${className}`}
            style={{
                backgroundColor: selected ? 'rgba(255, 255, 255, 0.2)' : undefined,
                borderColor: selected ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                // Hover handled by hover: classes if not selected, usually
            }}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            <div className={`filter ${selected ? 'brightness-110 drop-shadow-lg' : 'drop-shadow-md group-hover:brightness-105'}`}>
                <Icon icon={icon} size={48} />
            </div>
            <span
                className={`text-white text-xs text-center mt-1 leading-tight line-clamp-2 select-none px-[2px] rounded-sm ${selected ? 'bg-[#3399ff] bg-opacity-40' : ''}`}
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
            >
                {label}
            </span>
        </div>
    );
};

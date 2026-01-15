import React from 'react';
import { Icon } from '../common/Icon';

interface DesktopIconProps {
    icon: string;
    label: string;
    selected?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    onDoubleClick?: () => void;
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
            className={`flex flex-col items-center justify-start w-[80px] p-1 cursor-pointer transition-all group ${className}`}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            <div className={`filter ${selected ? 'brightness-90 drop-shadow-lg' : 'drop-shadow-md group-hover:brightness-105'} mb-1`}>
                <Icon icon={icon} size={64} />
            </div>
            <span
                className={`
          text-white text-[13px] font-medium text-center leading-tight select-none px-[6px] py-[1px] rounded-[10px]
          transition-colors duration-200
          ${selected ? 'bg-[#3b74ce] text-white' : 'text-shadow-mac'}
        `}
                style={!selected ? { textShadow: '0 1px 2px rgba(0,0,0,0.8)' } : undefined}
            >
                {label}
            </span>
        </div>
    );
};

import React from 'react';
import { Icon } from '../common/Icon';

interface StartMenuItemProps {
    icon: string;
    label: string;
    subLabel?: string;
    active?: boolean;
    onClick?: () => void;
}

export const StartMenuItem: React.FC<StartMenuItemProps> = ({
    icon,
    label,
    subLabel,
    active,
    onClick
}) => {
    return (
        <div
            className={`flex items-center gap-2 px-2 py-1 rounded-[2px] cursor-pointer border border-transparent transition-all
        ${active ? 'bg-[#dcebfd] border-[#7da2ce]' : 'hover:bg-[#eaf3fc] hover:border-[#b8d6fb]'}
      `}
            onClick={onClick}
        >
            <Icon icon={icon} size={32} />
            <div className="flex flex-col">
                <span className="text-[#1e1e1e] text-sm font-normal truncate leading-tight">{label}</span>
                {subLabel && <span className="text-gray-500 text-[10px] truncate">{subLabel}</span>}
            </div>
        </div>
    );
};

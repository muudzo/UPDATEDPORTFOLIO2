import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../common/Icon';
import { useDesktopStore } from '../../store/desktopStore';

interface DesktopIconProps {
    id: string;
    label: string;
    icon?: string;
    onClick?: () => void;
}

const DesktopIconComponent: React.FC<DesktopIconProps> = ({ id, label, icon, onClick }) => {
    const { icons, selectedIconIds, selectIcon, updateIconPosition } = useDesktopStore();
    const position = icons.find(i => i.id === id) || { x: 0, y: 0 };
    const isSelected = selectedIconIds.includes(id);

    return (
        <motion.div
            drag
            dragMomentum={false}
            onDragEnd={(_, info) => {
                updateIconPosition(id, position.x + info.offset.x, position.y + info.offset.y);
            }}
            initial={{ x: position.x, y: position.y }}
            animate={{ x: position.x, y: position.y }}
            transition={{ duration: 0 }}

            className={`absolute flex flex-col items-center justify-center gap-1 p-2 rounded cursor-pointer border border-transparent transition-colors w-[80px] group outline-none focus:bg-white/10 focus:border-white/20
        ${isSelected ? "bg-blue-400/20 border-blue-300/50" : "hover:bg-white/10 hover:border-white/10"}`}
            onClick={(e) => {
                e.stopPropagation();
                selectIcon(id, e.metaKey || e.ctrlKey);
                onClick && onClick();
            }}
            onDoubleClick={onClick}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onClick && onClick();
                } else if (e.key === ' ') {
                    e.preventDefault();
                    selectIcon(id, e.metaKey || e.ctrlKey);
                }
            }}
        >
            <div className="w-10 h-10 mb-1 drop-shadow-md">
                <Icon icon={icon} size={40} className="text-white drop-shadow-lg filter" />
            </div>
            <span className={`text-xs text-white text-center font-medium drop-shadow-md leading-tight px-1 rounded ${isSelected ? "bg-blue-600/80" : "group-hover:bg-black/20"}`} style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                {label}
            </span>
        </motion.div>
    );
};

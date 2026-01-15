import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../common/Icon';
import { useDesktopStore } from '../../store/desktopStore';

interface DesktopIconProps {
    id: string; // Add ID prop
    label: string;
    icon?: string;
    onClick?: () => void;
}

            <div className={`filter ${selected ? 'brightness-110 drop-shadow-lg' : 'drop-shadow-md group-hover:brightness-105'}`}>
                <Icon icon={icon} size={48} />
            </div>
            <span
                className={`text-white text-xs text-center mt-1 leading-tight line-clamp-2 select-none px-[2px] rounded-sm ${selected ? 'bg-[#3399ff] bg-opacity-40' : ''}`}
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
            >
                {label}
            </span>
        </div >
    );
};

import React from 'react';
import { Clock } from '../common/Clock';
import { Icon } from '../common/Icon';

export const MenuBar: React.FC = () => {
    return (
        <div
            className="fixed top-0 left-0 right-0 h-[22px] z-[100] flex items-center justify-between px-3 select-none shadow-sm font-sans"
            style={{
                background: 'linear-gradient(to bottom, #eeeeee 0%, #dddddd 100%)',
                borderBottom: '1px solid #a0a0a0'
            }}
        >
            <div className="flex items-center gap-4 h-full">
                <span className="text-lg pb-1 cursor-default hover:text-blue-600 transition-colors"></span>
                <div className="font-bold text-sm cursor-default">Finder</div>
                <div className="flex gap-3 text-sm cursor-default">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm h-full px-2">
                <div className="flex items-center gap-2 text-xs">
                    <Icon icon="wifi" size={14} />
                    <Icon icon="battery-charging" size={14} />
                    <Icon icon="search" size={14} />
                </div>
                <Clock format="medium" className="text-black text-xs font-medium" />
            </div>
        </div>
    );
};

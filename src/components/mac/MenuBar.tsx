```javascript
import React from 'react';
import { Clock } from '../common/Clock';

// Needs restyling for Mac clock font (Lucida Grande usually)
const MacClockWrapper: React.FC = () => (
    <div className="text-sm font-medium text-black">
        <Clock />
    </div>
);

export const MenuBar: React.FC = () => {
    return (
        <div
            className="fixed top-0 left-0 right-0 h-[22px] z-[100] flex items-center justify-between px-3 select-none shadow-sm"
            style={{
                background: 'linear-gradient(to bottom, #eeeeee 0%, #dddddd 100%)',
                borderBottom: '1px solid #a0a0a0'
            }}
        >
            <div className="flex items-center gap-4 h-full">
                <span className="text-lg pb-1 cursor-default hover:text-blue-600 transition-colors"></span>
                <div className="font-bold text-sm cursor-default">Finder</div>
                <div className="flex gap-3 text-sm">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm h-full">
                <span>🔋 100%</span>
                <span>Fri Jan 15 10:42 PM</span> {/* Placeholder for Mac formatted clock if needed, using simple span for layout */}
                <span>🔍</span>
            </div>
        </div>
    );
};

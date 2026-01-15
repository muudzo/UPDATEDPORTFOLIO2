import React, { useState, useEffect } from 'react';

interface ClockProps {
    className?: string; // For text color/size
    format?: 'short' | 'medium' | 'timeOnly'; // Different formats for Win7 vs Mac
}

export const Clock: React.FC<ClockProps> = ({ className, format = 'short' }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        if (format === 'timeOnly') {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        // Win7 style often includes date on hover or 2 lines, but standard taskbar is just time (and date on large taskbar)
        // Mac MenuBar is "Day Time" usually.
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <div className={`cursor-default select-none ${className}`} title={time.toLocaleDateString()}>
            {format === 'medium' && <span className="mr-2 hidden sm:inline">{formatDate(time)}</span>}
            <span className="font-medium">{formatTime(time)}</span>
        </div>
    );
};

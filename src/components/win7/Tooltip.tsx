import React, { useState, useEffect } from 'react';

interface TooltipProps {
    content: string;
    delay?: number;
    children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, delay = 500, children }) => {
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (visible && delay > 0) {
            // Logic for delay is handled by parent hover usually, or we use simple enter/leave
            // But standard interaction: hover -> wait -> show.
        }
        return () => clearTimeout(timer);
    }, [visible, delay]);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Offset from cursor
        setCoords({ x: e.clientX + 12, y: e.clientY + 12 });
    };

    return (
        <div
            className="inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
        >
            {children}
            {visible && (
                <div
                    className="fixed z-[10000] px-2 py-0.5 bg-gradient-to-b from-[#ffffe1] to-[#f0f0c0] border border-[#767676] text-black text-xs shadow-md pointer-events-none whitespace-nowrap fade-in duration-300"
                    style={{ top: coords.y, left: coords.x }}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

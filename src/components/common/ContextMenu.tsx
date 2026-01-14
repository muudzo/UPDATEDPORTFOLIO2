import React, { useEffect, useRef } from 'react';

export interface MenuItem {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    separator?: boolean;
}

interface ContextMenuProps {
    position: { x: number; y: number } | null;
    items: MenuItem[];
    onClose: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ position, items, onClose }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (position) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [position, onClose]);

    if (!position) return null;

    return (
        <div
            ref={ref}
            style={{ top: position.y, left: position.x }}
            className="fixed z-[9999] min-w-[160px] bg-white border border-gray-400 shadow-xl py-1 flex flex-col text-sm text-gray-800 select-none animate-in fade-in zoom-in-95 duration-75"
        >
            {items.map((item, index) => {
                if (item.separator) {
                    return <div key={index} className="h-px bg-gray-300 my-1 mx-1" />;
                }
                return (
                    <button
                        key={index}
                        onClick={() => {
                            if (!item.disabled) {
                                item.action();
                                onClose();
                            }
                        }}
                        disabled={item.disabled}
                        className="text-left px-4 py-1.5 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-800 transition-colors w-full flex items-center gap-2"
                    >
                        {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
};

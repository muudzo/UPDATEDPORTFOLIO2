import React from 'react';

interface DesktopProps {
    children?: React.ReactNode;
}

import { useDesktopStore } from '../../store/desktopStore';
import { DesktopIcon } from '../win7/DesktopIcon';
import { useWindowStore } from '../../store/windowStore';

export const Desktop: React.FC<DesktopProps> = ({ children }) => {
    const { icons, deselectAll } = useDesktopStore();
    const { openWindow } = useWindowStore();

    return (
        <main
            className="fixed inset-0 w-full h-full overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
                backgroundImage: 'var(--desktop-bg)',
                backgroundColor: 'var(--bg-color)',
            }}
            onClick={() => deselectAll()}
        >
            {/* Render Desktop Icons */}
            {icons.map(icon => (
                <DesktopIcon
                    key={icon.id}
                    id={icon.id}
                    label={icon.id} // Use ID as label for now, or add label to store
                    icon={icon.id.toLowerCase().replace(' ', '-')} // Generic icon mapping
                    onClick={() => {
                        // Open window logic if double click, handled in Icon component or here?
                        // Icon component has onDoubleClick calling onClick. 
                        // Let's pass openWindow here.
                        openWindow({ id: icon.id, title: icon.id, type: 'folder', content: <div>Folder Content</div>, position: { x: 100, y: 100 }, size: { width: 600, height: 400 } });
                    }}
                />
            ))}

            {children}
        </main>
    );
};

import React, { useState } from 'react';
import { Icon } from '../common/Icon';

interface ImageViewerProps {
    src?: string;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" }) => {
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);

    return (
        <div className="flex flex-col h-full bg-[#222] select-none text-white">
            {/* Toolbar */}
            <div className="flex items-center justify-between p-2 bg-[#333] border-b border-[#444]">
                <div className="flex gap-2">
                    <button title="Zoom Out" className="p-1 hover:bg-[#444] rounded" onClick={() => setZoom(z => Math.max(0.1, z - 0.1))}><Icon icon="search" size={16} /></button>
                    <span className="text-xs w-12 text-center my-auto">{Math.round(zoom * 100)}%</span>
                    <button title="Zoom In" className="p-1 hover:bg-[#444] rounded" onClick={() => setZoom(z => Math.min(5, z + 0.1))}><Icon icon="search" size={16} /></button>
                </div>
                <div className="flex gap-2">
                    <button title="Rotate Left" className="p-1 hover:bg-[#444] rounded" onClick={() => setRotation(r => r - 90)}><Icon icon="rotate-ccw" size={16} /></button>
                    <button title="Rotate Right" className="p-1 hover:bg-[#444] rounded" onClick={() => setRotation(r => r + 90)}><Icon icon="rotate-cw" size={16} /></button>
                </div>
            </div>

            {/* Viewport */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative bg-[#1a1a1a]">
                <div
                    className="transition-transform duration-200 ease-out shadow-lg origin-center"
                    style={{
                        transform: `scale(${zoom}) rotate(${rotation}deg)`,
                    }}
                >
                    <img src={src} alt="View" className="max-w-full max-h-full object-contain block select-none pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

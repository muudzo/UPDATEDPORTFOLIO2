import { useState, useCallback, useEffect } from 'react';
import { Size, Position } from '../components/os/types';

export const useResize = (
    initialSize: Size,
    initialPosition: Position,
    minSize: Size = { width: 300, height: 200 },
    onResizeEnd?: (size: Size, position: Position) => void
) => {
    const [size, setSize] = useState(initialSize);
    const [position, setPosition] = useState(initialPosition);
    const [isResizing, setIsResizing] = useState(false);
    const [direction, setDirection] = useState<string | null>(null);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [startSize, setStartSize] = useState(initialSize);
    const [startWindowPos, setStartWindowPos] = useState(initialPosition);

    const initResize = useCallback((dir: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsResizing(true);
        setDirection(dir);
        setStartPos({ x: e.clientX, y: e.clientY });
        setStartSize(size);
        setStartWindowPos(position);
    }, [size, position]);

    useEffect(() => {
        if (!isResizing) return;

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y; // e.g. moving down adds height

            let newWidth = startSize.width;
            let newHeight = startSize.height;
            let newX = startWindowPos.x;
            let newY = startWindowPos.y;

            if (direction?.includes('e')) newWidth = Math.max(minSize.width, startSize.width + dx);
            if (direction?.includes('s')) newHeight = Math.max(minSize.height, startSize.height + dy);
            if (direction?.includes('w')) {
                newWidth = Math.max(minSize.width, startSize.width - dx);
                newX = startWindowPos.x + (startSize.width - newWidth);
            }
            if (direction?.includes('n')) {
                newHeight = Math.max(minSize.height, startSize.height - dy);
                newY = startWindowPos.y + (startSize.height - newHeight);
            }

            setSize({ width: newWidth, height: newHeight });
            setPosition({ x: newX, y: newY });
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            setDirection(null);
            onResizeEnd?.(size, position);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, direction, startPos, startSize, startWindowPos, minSize, onResizeEnd, size, position]);

    // Sync prop updates
    useEffect(() => {
        setSize(initialSize);
        setPosition(initialPosition);
    }, [initialSize.width, initialSize.height, initialPosition.x, initialPosition.y]);

    return { size, position, initResize, isResizing };
};

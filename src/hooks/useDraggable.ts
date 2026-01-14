import { useState, useCallback, useEffect } from 'react';

interface Position {
    x: number;
    y: number;
}

export const useDraggable = (
    initialPosition: Position,
    onDragEnd?: (pos: Position) => void
) => {
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 }); // Mouse start
    const [elementStartPos, setElementStartPos] = useState<Position>({ x: 0, y: 0 }); // Element start

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault(); // Prevent text selection
        setIsDragging(true);
        setStartPos({ x: e.clientX, y: e.clientY });
        setElementStartPos(position);
    }, [position]);

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            setPosition({
                x: elementStartPos.x + dx,
                y: elementStartPos.y + dy,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            onDragEnd?.(position);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startPos, elementStartPos, onDragEnd, position]);

    // Update internal state if initial changes (optional, usually state is lifted)
    useEffect(() => {
        setPosition(initialPosition);
    }, [initialPosition.x, initialPosition.y]);

    return { position, handleMouseDown, isDragging };
};

```
import React from 'react';
import type { WindowState } from './types';
import { motion } from 'framer-motion';

interface WindowContainerProps {
    windowState: WindowState;
    isActive: boolean;
    children: React.ReactNode;
    onFocus: () => void;
    onDragEnd: (point: { x: number; y: number }) => void;
}

const windowVariants = {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
    minimized: {
        opacity: 0,
        scale: 0.5,
        y: 400, // Move towards dock
        x: 0,   // Ideally move towards specific dock position
        transition: { duration: 0.3, ease: "easeInOut" as const }
    }
};

export const WindowContainer: React.FC<WindowContainerProps> = ({ windowState, isActive, children, onFocus, onDragEnd }) => {
    return (
        <motion.div
            variants={windowVariants}
            initial="initial"
            animate={windowState.isMinimized ? "minimized" : "animate"}
            exit="exit"
            onMouseDown={onFocus}
            style={{
                position: 'absolute',
                // We let Framer handle the visual position during drag,
                // using initial x/y from store only on mount/update if not dragging?
                // Actually for Framer drag to work with external state, we might need modify style handling.
                // But for simplicity:
                zIndex: windowState.zIndex,
            }}
            // Use animate prop for position? No, style top/left is better for absolute.
            // But Framer drag works on transform.
            // If we set top/left, `drag` will use transform translate.
            // onDragEnd => update store x/y => component re-renders with new top/left => Framer resets transform to 0?
            // Yes, if layout prop is present, it might handle it.

            drag
            dragMomentum={true}
            dragElastic={0.1}
            dragListener={false} // Only allow drag from header (handled by dragControls usually, or just dragListener={false} and child adds it? No, child needs to be drag handle)
            // Actually simpler: dragListener={true} but handle filtering in child?
            // Or use dragControls passed to header.
            // For "Basics", let's enable drag on the whole window or just header?
            // Header is preferred.
            // Let's implement dragControls.

            onDragEnd={(_, info) => {
                onDragEnd({ x: windowState.position.x + info.offset.x, y: windowState.position.y + info.offset.y });
            }}

            className={`absolute shadow - xl overflow - hidden rounded - lg ${ isActive ? 'ring-1 ring-white/20' : '' } `}
            layout
        >
            {children}
            {/* We need a drag handle content area, usually the header.
          We can wrap the header logic inside here or expect a drag handle class?
          Framer needs dragControls.
       */}
        </motion.div>
    );
};
```

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
        y: 400,
        x: 0,
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
                zIndex: windowState.zIndex,
            }}
            drag
            dragMomentum={true}
            dragElastic={0.1}
            dragListener={false}
            onDragEnd={(_, info) => {
                onDragEnd({ x: windowState.position.x + info.offset.x, y: windowState.position.y + info.offset.y });
            }}
            className={`absolute shadow-xl overflow-hidden rounded-lg ${isActive ? 'ring-1 ring-white/20' : ''}`}
            layout
        >
            {children}
        </motion.div>
    );
};

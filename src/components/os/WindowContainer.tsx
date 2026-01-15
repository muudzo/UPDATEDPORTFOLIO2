import React, { useRef, useEffect } from 'react';
import { WindowState } from './types';
import { motion, AnimatePresence } from 'framer-motion';

interface WindowContainerProps {
    windowState: WindowState;
    isActive: boolean;
    children: React.ReactNode;
    onFocus: () => void;
}

const windowVariants = {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } }
};

export const WindowContainer: React.FC<WindowContainerProps> = ({ windowState, isActive, children, onFocus }) => {
    return (
        <motion.div
            variants={windowVariants}
            initial="initial"
            animate={windowState.isMinimized ? "minimized" : "animate"}
            exit="exit"
            onMouseDown={onFocus}
            style={{
                position: 'absolute',
                top: windowState.position.y,
                left: windowState.position.x,
                width: windowState.size.width,
                height: windowState.size.height,
                zIndex: windowState.zIndex,
            }}
            className={`absolute shadow-xl overflow-hidden rounded-lg ${isActive ? 'ring-1 ring-white/20' : ''}`}
            drag={false} // Drag handled by hook/header manually for now or update later
        >
            {children}
        </motion.div>
    );
};

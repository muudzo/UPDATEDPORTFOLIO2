import React from 'react';
import type { WindowState } from './types';
import { motion } from 'framer-motion';

interface WindowContainerProps {
    windowState: WindowState;
    isActive: boolean;
    children: React.ReactNode;
    onFocus: () => void;
    onDragEnd: (point: { x: number; y: number }) => void;
    onShake?: () => void;
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

export const WindowContainer: React.FC<WindowContainerProps> = ({ windowState, isActive, children, onFocus, onDragEnd, onShake }) => {
    // Shake detection
    const shakeCount = React.useRef(0);
    const lastSign = React.useRef(0);
    const lastShakeTime = React.useRef(0);

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

            onDrag={(_, info) => {
                const velocityX = info.velocity.x;
                const now = Date.now();
                // If velocity high enough
                if (Math.abs(velocityX) > 300) {
                    const sign = Math.sign(velocityX);
                    if (sign !== lastSign.current && lastSign.current !== 0) {
                        // Direction changed
                        if (now - lastShakeTime.current < 500) {
                            shakeCount.current += 1;
                        } else {
                            shakeCount.current = 1; // Reset if too slow
                        }
                        lastShakeTime.current = now;

                        if (shakeCount.current >= 4) {
                            onShake && onShake();
                            shakeCount.current = 0; // Cooldown
                        }
                    }
                    lastSign.current = sign;
                }
            }}

            onDragEnd={(_, info) => {
                shakeCount.current = 0;
                onDragEnd({ x: windowState.position.x + info.offset.x, y: windowState.position.y + info.offset.y });
            }}

            className={`absolute shadow-xl overflow-hidden rounded-lg transition-theme ${isActive ? 'ring-1 ring-white/20' : ''}`}
            layout
        >
            {children}
        </motion.div>
    );
};

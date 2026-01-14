import { useMotionValue, useTransform, MotionValue } from 'framer-motion';
import React from 'react';

// Returns a width motion value based on mouse proximity
export const useDockHover = (
    mouseX: MotionValue,
    ref: React.RefObject<HTMLDivElement>
) => {
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Scale range: 48px to 84px when hovering within 150px
    const widthSync = useTransform(distance, [-150, 0, 150], [48, 84, 48]);

    return widthSync;
};

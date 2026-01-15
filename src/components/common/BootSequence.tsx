import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BootSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Stage 0: Black screen / Logo
        // Stage 1: Loading bar
        // Stage 2: Fade out
        const t1 = setTimeout(() => setStage(1), 1000);
        const t2 = setTimeout(() => setStage(2), 3500);
        const t3 = setTimeout(() => onComplete(), 4000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center text-white font-mono"
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-8"
            >
                <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-5xl font-bold font-sans">
                    
                </div>
            </motion.div>

            {/* Loading Bar */}
            {stage >= 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
};

import React, { useEffect } from 'react';

interface BSODProps {
    onRestart?: () => void;
}

export const BSOD: React.FC<BSODProps> = ({ onRestart }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (onRestart) onRestart(); // Any key to restart
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onRestart]);

    return (
        <div className="fixed inset-0 bg-[#000082] text-white font-[ 'Lucida_Console', monospace ] p-8 z-[99999] cursor-none select-none flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl text-left">
                <p className="mb-8">A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>

                <p className="mb-8">NOSTALGIA_OS_PROCESS_DIED</p>

                <p className="mb-8">If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>

                <p className="mb-8">Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>

                <p className="mb-8">If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>

                <p className="mb-8">Technical information:</p>

                <p className="mb-8">*** STOP: 0x000000FE (0x00000008, 0x000000006, 0x00000009, 0x847075cc)</p>

                <p>Press any key to restart...</p>
            </div>
        </div>
    );
};

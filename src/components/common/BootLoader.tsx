import React from 'react';
import React from 'react';

interface BootLoaderProps {
    onSelectOS: (os: 'win7' | 'mac') => void;
}

export const BootLoader: React.FC<BootLoaderProps> = ({ onSelectOS }) => {
    return (
        <div className="fixed inset-0 z-[2000] bg-black text-white font-mono flex flex-col items-center justify-center select-none">
            <div className="border border-gray-600 p-8 rounded-lg bg-gray-900 max-w-md w-full shadow-2xl">
                <h1 className="text-xl mb-6 text-center border-b border-gray-700 pb-2">Boot Manager</h1>

                <div className="space-y-4">
                    <div
                        className="p-4 border border-gray-700 hover:bg-gray-800 hover:border-blue-500 cursor-pointer flex items-center gap-4 transition-all group"
                        onClick={() => onSelectOS('win7')}
                    >
                        <div className="w-8 h-8 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-[1px] w-6 h-6">
                                <div className="bg-[#f25022]"></div><div className="bg-[#7fba00]"></div>
                                <div className="bg-[#00a4ef]"></div><div className="bg-[#ffb900]"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="font-bold group-hover:text-blue-400">Windows 7</div>
                            <div className="text-xs text-gray-500">Professional Edition</div>
                        </div>
                    </div>

                    <div
                        className="p-4 border border-gray-700 hover:bg-gray-800 hover:border-gray-400 cursor-pointer flex items-center gap-4 transition-all group"
                        onClick={() => onSelectOS('mac')}
                    >
                        <div className="w-8 h-8 flex items-center justify-center text-2xl"></div>
                        <div className="flex-1">
                            <div className="font-bold group-hover:text-white">Mac OS X</div>
                            <div className="text-xs text-gray-500">Aqua Interface</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-xs text-gray-600 text-center">
                    Use arrow keys or click to select operating system.
                </div>
            </div>
        </div>
    );
};

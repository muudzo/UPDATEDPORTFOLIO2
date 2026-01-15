import React, { useState } from 'react';
import { useWindowStore } from '../../store/windowStore'; // Assume we might bind later

// Placeholder settings logic
export const Settings: React.FC = () => {
    const [theme, setTheme] = useState<'win7' | 'aqua'>('win7');
    const [wallpaper, setWallpaper] = useState('Default');

    return (
        <div className="p-6 h-full bg-[#f0f0f0] select-none">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">Control Panel</h2>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <h3 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wide">Appearance</h3>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Theme</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setTheme('win7')}
                                    className={`px-4 py-2 rounded border text-sm transition-all ${theme === 'win7' ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                                >
                                    Windows 7
                                </button>
                                <button
                                    onClick={() => setTheme('aqua')}
                                    className={`px-4 py-2 rounded border text-sm transition-all ${theme === 'aqua' ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                                >
                                    Mac OS X
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 italic">Note: Live switching implemented in Commit 88.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Desktop Wallpaper</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded text-sm bg-white"
                                value={wallpaper}
                                onChange={(e) => setWallpaper(e.target.value)}
                            >
                                <option>Default (Theme Based)</option>
                                <option>Abstract Blue</option>
                                <option>Nature: Mountains</option>
                                <option>Solid Color: Black</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow-sm border border-gray-200 opacity-60">
                    <h3 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wide flex items-center justify-between">
                        System
                        <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full border border-yellow-200">Coming Soon</span>
                    </h3>
                    <div className="space-y-2 pointer-events-none grayscale">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-100">
                            <span className="text-sm text-gray-600">Sound Effects</span>
                            <div className="w-10 h-5 bg-green-500 rounded-full relative">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-100">
                            <span className="text-sm text-gray-600">Animations</span>
                            <div className="w-10 h-5 bg-green-500 rounded-full relative">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

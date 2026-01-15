import React from 'react';
import { Icon } from '../common/Icon';

export const FunDetails: React.FC = () => {
    return (
        <div className="p-6 h-full bg-[#fafafa] select-text overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Fun Facts & Hobbies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Gaming Section */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 mb-3 text-purple-600">
                        <Icon icon="gamepad-2" size={24} />
                        <h3 className="font-bold text-lg">Gaming</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Huge fan of retro RPGs and modern indie gems.</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            Final Fantasy VII
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            Stardew Valley
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            Hollow Knight
                        </li>
                    </ul>
                </div>

                {/* Music Section */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 mb-3 text-green-600">
                        <Icon icon="music" size={24} />
                        <h3 className="font-bold text-lg">Music</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Coding playlist essentials.</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            Lo-Fi Beats
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            Synthwave
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            Jazz Classics
                        </li>
                    </ul>
                </div>

                {/* Setup Info */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 md:col-span-2">
                    <div className="flex items-center gap-2 mb-3 text-gray-800">
                        <Icon icon="monitor" size={24} />
                        <h3 className="font-bold text-lg">My Setup</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                        <div className="border-l-2 border-gray-200 pl-3">
                            <div className="font-bold text-gray-900">Hardware</div>
                            <div className="text-gray-600">MacBook Pro M2</div>
                            <div className="text-gray-600">LG UltraFine 4K</div>
                            <div className="text-gray-600">Keychron K2</div>
                        </div>
                        <div className="border-l-2 border-gray-200 pl-3">
                            <div className="font-bold text-gray-900">Editor</div>
                            <div className="text-gray-600">VS Code</div>
                            <div className="text-gray-600">Theme: One Dark Pro</div>
                            <div className="text-gray-600">Font: JetBrains Mono</div>
                        </div>
                        <div className="border-l-2 border-gray-200 pl-3">
                            <div className="font-bold text-gray-900">Tabs vs Spaces</div>
                            <div className="text-gray-600">Spaces (2)</div>
                            <div className="text-gray-400 italic mt-1">"The only way."</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

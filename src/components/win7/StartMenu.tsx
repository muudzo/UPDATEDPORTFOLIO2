import React from 'react';
import { StartMenuItem } from './StartMenuItem';

// Start Menu Component for Windows 7
export const StartMenu: React.FC = () => {
    return (
        <div
            className="absolute bottom-[40px] left-0 w-[400px] h-[550px] z-[49] rounded-tr-lg rounded-tl-lg overflow-hidden flex shadow-[0_0_20px_rgba(0,0,0,0.5)] origin-bottom-left"
            style={{
                background: 'var(--window-bg)',
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--window-border)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3), 0 10px 30px rgba(0,0,0,0.6)'
            }}
        >
            {/* User Avatar Overlap (Placeholder) */}
            <div className="absolute top-[-25px] right-[40px] w-[60px] h-[60px] bg-white rounded border-4 border-[rgba(255,255,255,0.3)] shadow-lg z-20 hidden">
                {/* User pic */}
            </div>

            {/* Left Column: Programs (White) */}
            <div className="w-[60%] m-[5px] mr-0 bg-white border border-[#7f9db9] rounded-sm relative flex flex-col shadow-inner">
                <div className="flex-1 overflow-y-auto p-1 scrollbar-win7 flex flex-col gap-0.5">
                    <StartMenuItem icon="chrome" label="Google Chrome" subLabel="Internet" />
                    <StartMenuItem icon="code" label="VS Code" subLabel="Editor" />
                    <StartMenuItem icon="terminal" label="Command Prompt" />
                    <StartMenuItem icon="folder" label="Explorer" />
                    <StartMenuItem icon="calc" label="Calculator" />
                    <StartMenuItem icon="notepad" label="Notepad" />
                    <div className="flex-1" />
                    <div className="text-gray-800 font-bold text-sm px-2 py-2 hover:bg-[#dcebfd] cursor-pointer flex items-center gap-2 transition-colors">
                        All Programs <span className="text-[10px]">▶</span>
                    </div>
                </div>

                {/* Search Box */}
                <div className="p-2 bg-gradient-to-t from-[#e3e9f0] to-[#f2f4f8]">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search programs and files"
                            className="w-full h-8 px-2 text-sm italic text-gray-500 border border-[#afc3d8] rounded-[2px] focus:outline-none focus:border-[#3399ff]"
                            style={{
                                fontStyle: 'italic'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Right Column: Places (Transparent/Dark) */}
            <div className="flex-1 p-[10px] flex flex-col gap-[2px] text-[#1e1e1e] text-[13px] leading-tight">
                <div style={{ textShadow: '0 0 5px rgba(255,255,255,0.8)' }} className="flex flex-col gap-[4px] font-medium text-[#1e1414]">
                    <div className="hover:bg-[rgba(255,255,255,0.2)] hover:border border-[rgba(255,255,255,0.4)] p-2 rounded-[2px] cursor-pointer">Guest</div>
                    <div className="hover:bg-[rgba(255,255,255,0.2)] hover:border border-[rgba(255,255,255,0.4)] p-2 rounded-[2px] cursor-pointer">Documents</div>
                    <div className="hover:bg-[rgba(255,255,255,0.2)] hover:border border-[rgba(255,255,255,0.4)] p-2 rounded-[2px] cursor-pointer">Pictures</div>
                    <div className="hover:bg-[rgba(255,255,255,0.2)] hover:border border-[rgba(255,255,255,0.4)] p-2 rounded-[2px] cursor-pointer">Music</div>
                    <div className="h-px bg-[rgba(0,0,0,0.1)] border-b border-[rgba(255,255,255,0.1)] my-1 mx-2" />
                    <div className="hover:bg-[rgba(255,255,255,0.2)] hover:border border-[rgba(255,255,255,0.4)] p-2 rounded-[2px] cursor-pointer">Computer</div>
                    <div className="hover:bg-[rgba(255,255,255,0.2)] hover:border border-[rgba(255,255,255,0.4)] p-2 rounded-[2px] cursor-pointer">Control Panel</div>
                    <div className="cursor-pointer p-2 hover:bg-white/20 rounded">Devices and Printers</div>
                    <div className="cursor-pointer p-2 hover:bg-white/20 rounded">Default Programs</div>
                    <div className="cursor-pointer p-2 hover:bg-white/20 rounded">Help and Support</div>
                </div>

                <div className="flex-1" />

                {/* Shutdown Button Area */}
                <div className="flex justify-end mt-2">
                    <button className="px-4 py-1 bg-gradient-to-b from-[#f2f2f2] to-[#cfd0d2] border border-[#8e8f90] rounded-[2px] text-xs hover:to-[#e0e0e0] shadow-sm">
                        Shut down
                    </button>
                </div>
            </div>
        </div>
    );
};

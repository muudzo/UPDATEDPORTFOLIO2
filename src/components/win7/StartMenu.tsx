import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import { useWindowStore } from '../../store/windowStore';

interface StartMenuItem {
    label: string;
    icon?: string;
    action?: () => void;
    type?: 'app' | 'link';
}

export const StartMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { openWindow } = useWindowStore();

    const items: StartMenuItem[] = [
        { label: 'Documents', icon: 'folder', action: () => openWindow({ id: 'Docs', title: 'Documents', type: 'folder', content: <div>Docs</div>, position: { x: 100, y: 100 }, size: { width: 600, height: 400 } }) },
        { label: 'Pictures', icon: 'image', action: () => openWindow({ id: 'Pics', title: 'Pictures', type: 'folder', content: <div>Pics</div>, position: { x: 100, y: 100 }, size: { width: 600, height: 400 } }) },
        { label: 'Music', icon: 'music', action: () => { } },
        { label: 'Calculator', icon: 'calculator', action: () => openWindow({ id: 'Calculator', title: 'Calculator', type: 'app', content: <div>Calc</div>, position: { x: 100, y: 100 }, size: { width: 300, height: 400 } }) },
        { label: 'Notepad', icon: 'file-text', action: () => { } },
        { label: 'Paint', icon: 'edit-2', action: () => { } },
        { label: 'Settings', icon: 'settings', action: () => { } },
    ];

    const filteredItems = items.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div
            className="absolute bottom-10 left-0 w-[400px] h-[500px] bg-[#f0f0f0] border border-[#999] rounded-tr-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-200 z-50"
            style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
        >
            {/* User Pic & Header */}
            <div className="h-16 bg-gradient-to-b from-[#256dbe] to-[#175294] border-t border-[#4f93e3] p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded border-2 border-white overflow-hidden shadow">
                    <img src="https://github.com/tatenda.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-bold text-lg drop-shadow">Tatenda Nyemudzo</span>
            </div>

            <div className="flex-1 flex">
                {/* Left Pane (Programs) */}
                <div className="flex-1 bg-white p-2 overflow-y-auto">
                    {filteredItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 p-2 hover:bg-[#2f71cd] hover:text-white rounded cursor-pointer group transition-colors"
                            onClick={() => {
                                item.action && item.action();
                                onClose();
                            }}
                        >
                            <Icon icon={item.icon || 'circle'} size={24} className="text-gray-600 group-hover:text-white" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                    {filteredItems.length === 0 && (
                        <div className="text-gray-500 text-center mt-10">No results found.</div>
                    )}
                </div>

                {/* Right Pane (System Links) */}
                <div className="w-1/3 bg-[#dbe8f5] border-l border-[#fff] p-2 space-y-1 text-sm text-[#1e395b]">
                    {['Documents', 'Pictures', 'Music', 'Computer', 'Control Panel', 'Devices and Printers', 'Help and Support'].map(link => (
                        <div key={link} className="p-2 hover:bg-[#2f71cd] hover:text-white rounded cursor-pointer transition-colors block">
                            {link}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Search & Shutdown */}
            <div className="h-12 bg-gradient-to-b from-[#e3e9f0] to-[#cfd7eb] border-t border-[#b6bccc] px-4 flex items-center gap-3">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search programs and files"
                        className="w-full pl-8 pr-3 py-1.5 rounded border border-[#8e96a7] bg-white text-sm italic focus:outline-none focus:ring-1 focus:ring-blue-400"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        autoFocus
                    />
                    <div className="absolute left-2 top-1.5 text-gray-400">
                        <Icon icon="search" size={14} />
                    </div>
                </div>

                <button className="px-4 py-1.5 bg-gradient-to-b from-[#f2d58d] to-[#eeba3e] border border-[#b28b29] rounded shadow-sm text-[#1e395b] font-medium hover:brightness-105 active:brightness-95 text-sm">
                    Shut down
                </button>
            </div>
        </div>
    );
};

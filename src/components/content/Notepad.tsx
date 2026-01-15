import React, { useState } from 'react';

export const Notepad: React.FC = () => {
    const [content, setContent] = useState<string>("Welcome to Notepad!\n\nThis is a simple text area where you can type your thoughts.\n\n- It works like a real notepad.\n- You can select and edit text.\n- Go ahead, give it a try!");

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Menu Bar (Visual Only) */}
            <div className="flex gap-4 px-2 py-1 bg-white border-b border-gray-200 text-xs text-gray-700 select-none">
                <span className="hover:bg-blue-50 cursor-default px-1 rounded">File</span>
                <span className="hover:bg-blue-50 cursor-default px-1 rounded">Edit</span>
                <span className="hover:bg-blue-50 cursor-default px-1 rounded">Format</span>
                <span className="hover:bg-blue-50 cursor-default px-1 rounded">View</span>
                <span className="hover:bg-blue-50 cursor-default px-1 rounded">Help</span>
            </div>

            <textarea
                className="flex-1 w-full p-2 resize-none outline-none font-mono text-sm leading-relaxed text-gray-800 selection:bg-blue-200"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                spellCheck={false}
            />

            <div className="px-2 py-1 bg-gray-50 border-t border-gray-200 text-xs text-gray-400 flex justify-end select-none">
                Ln {content.split('\n').length}, Col {content.length}
            </div>
        </div>
    );
};

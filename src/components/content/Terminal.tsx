import React, { useState, useEffect, useRef } from 'react';

export const Terminal: React.FC = () => {
    const [lines, setLines] = useState<string[]>([
        "Microsoft Windows [Version 6.1.7601]",
        "Copyright (c) 2009 Microsoft Corporation.  All rights reserved.",
        "",
        "C:\\Users\\Guest> npm start portfolio",
        "Starting development server...",
        "Ready on http://localhost:3000",
        ""
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [lines]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const newLines = [...lines, `C:\\Users\\Guest> ${input}`];

            let response = "";
            const cmd = input.trim().toLowerCase();

            if (cmd === 'help') {
                response = "Available commands: help, clear, about, projects, contact, exit";
            } else if (cmd === 'clear' || cmd === 'cls') {
                setLines([]);
                setInput("");
                return;
            } else if (cmd === 'about') {
                response = "Opening About Me...";
            } else if (cmd === '') {
                response = "";
            } else {
                response = `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`;
            }

            if (response) newLines.push(response, "");
            else newLines.push("");

            setLines(newLines);
            setInput("");
        }
    };

    return (
        <div className="flex flex-col h-full bg-black text-gray-200 font-mono text-sm p-2 overflow-y-auto selection:bg-white selection:text-black" onClick={() => document.getElementById('terminal-input')?.focus()}>
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap leading-tight min-h-[1.2em]">{line}</div>
            ))}

            <div className="flex leading-tight">
                <span className="mr-2">C:\Users\Guest&gt;</span>
                <input
                    id="terminal-input"
                    type="text"
                    className="flex-1 bg-transparent outline-none border-none text-gray-200 caret-gray-200"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    autoComplete="off"
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

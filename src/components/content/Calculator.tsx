import React, { useState } from 'react';

export const Calculator: React.FC = () => {
    const [display, setDisplay] = useState("0");
    const [equation, setEquation] = useState("");
    const [shouldReset, setShouldReset] = useState(false);

    const handleNumber = (num: string) => {
        if (display === "0" || shouldReset) {
            setDisplay(num);
            setShouldReset(false);
        } else {
            setDisplay(display + num);
        }
    };

    const handleOperator = (op: string) => {
        setShouldReset(true);
        setEquation(`${display} ${op}`);
    };

    const calculate = () => {
        if (!equation) return;
        const [prev, op] = equation.split(" ");
        const current = parseFloat(display);
        const previous = parseFloat(prev);

        let result = 0;
        switch (op) {
            case "+": result = previous + current; break;
            case "-": result = previous - current; break;
            case "*": result = previous * current; break;
            case "/": result = previous / current; break;
        }

        setDisplay(String(result));
        setEquation("");
        setShouldReset(true);
    };

    const clear = () => {
        setDisplay("0");
        setEquation("");
        setShouldReset(false);
    };

    const buttons = [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"]
    ];

    return (
        <div className="flex flex-col h-full bg-[#f0f0f0] p-1 select-none">
            {/* Display */}
            <div className="bg-white border text-right p-2 mb-2 rounded shadow-inner h-16 flex flex-col justify-center">
                <div className="text-xs text-gray-400 h-4">{equation}</div>
                <div className="text-2xl font-mono text-gray-800 truncate">{display}</div>
            </div>

            {/* Keypad */}
            <div className="flex-1 grid grid-cols-4 gap-1">
                <button onClick={clear} className="col-span-4 bg-red-100 hover:bg-red-200 text-red-800 border-red-200 rounded font-bold py-1">C</button>
                {buttons.flat().map(btn => (
                    <button
                        key={btn}
                        onClick={() => {
                            if (btn === "=") calculate();
                            else if (["+", "-", "*", "/"].includes(btn)) handleOperator(btn);
                            else handleNumber(btn);
                        }}
                        className={`
                rounded border shadow-sm font-bold active:scale-95 transition-transform
                ${btn === "=" ? "bg-blue-600 text-white border-blue-700 hover:bg-blue-700 col-span-2" :
                                ["+", "-", "*", "/"].includes(btn) ? "bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300" :
                                    "bg-white hover:bg-gray-50 text-gray-800 border-gray-300"
                            }
                ${btn === "0" && "col-span-2"}
              `}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

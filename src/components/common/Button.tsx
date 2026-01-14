import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'default',
    size = 'md',
    ...props
}) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
                // Sizes
                size === 'sm' && "h-8 px-3 text-xs",
                size === 'md' && "h-10 px-4 py-2",
                size === 'icon' && "h-10 w-10",
                // Variants - these will be overridden by theme specific styles mostly, but provide defaults
                variant === 'default' && "bg-blue-600 text-white hover:bg-blue-700",
                variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground",
                className
            )}
            {...props}
        />
    );
};

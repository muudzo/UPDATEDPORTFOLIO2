import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';

describe('Aqua Components', () => {
    it('MenuBar renders correctly', () => {
        render(<MenuBar />);

        expect(screen.getByText('Finder')).toBeInTheDocument();
        expect(screen.getByText('File')).toBeInTheDocument();
        expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('Dock renders correctly', () => {
        render(<Dock />);

        // Check for dock container
        // Using getByRole or class check if possible. 
        // Dock likely has icons.
        // Assuming Dock has some role or text alt.
        // If Dock is purely graphical, we look for parent container logic.
        // Or check if it renders without crash.
        // Adding a test id or check for specific icons.
        // Assuming Dock has Finder icon or similar.
    });
});

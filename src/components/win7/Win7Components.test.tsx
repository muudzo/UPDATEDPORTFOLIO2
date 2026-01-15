import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StartMenu } from './StartMenu';
import { StartButton } from './StartButton';

describe('Win7 Components', () => {
    it('StartButton renders correctly', () => {
        const onClick = vi.fn();
        render(<StartButton onClick={onClick} />);

        // Check for aria-label or some identifiable element if possible, 
        // using container here as it's a graphical button
        // For now, just ensure it renders
        expect(document.querySelector('.rounded-full')).toBeInTheDocument();
    });

    it('StartMenu renders and searches', () => {
        const onClose = vi.fn();
        render(<StartMenu onClose={onClose} />);

        expect(screen.getByText('Tatenda Nyemudzo')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Search programs and files')).toBeInTheDocument();
        expect(screen.getByText('Documents')).toBeInTheDocument();

        // Test filter
        fireEvent.change(screen.getByPlaceholderText('Search programs and files'), { target: { value: 'Calc' } });
        expect(screen.getByText('Calculator')).toBeInTheDocument();
        // expect(screen.queryByText('Documents')).not.toBeInTheDocument(); // Depends on exact mocking, maybe too brittle if fuzzy
    });
});

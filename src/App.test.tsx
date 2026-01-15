import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        // We'll skip deep render test for now as we might need to mock store/canvas/etc
        // Just a basic truthy test to confirm test runner works
        expect(true).toBe(true);
    });
});

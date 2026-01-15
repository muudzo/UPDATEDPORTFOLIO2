import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useThemeStore } from './themeStore';

describe('themeStore', () => {
    beforeEach(() => {
        useThemeStore.setState({ theme: 'win7', wallpaper: 'default' });
        // Mock document methods
        document.documentElement.setAttribute = vi.fn();
        document.documentElement.removeAttribute = vi.fn();
    });

    it('should switch theme', () => {
        const { setTheme } = useThemeStore.getState();
        setTheme('mac');

        const { theme } = useThemeStore.getState();
        expect(theme).toBe('mac');
        expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'mac');
    });

    it('should switch back to win7', () => {
        const { setTheme } = useThemeStore.getState();
        setTheme('mac');
        setTheme('win7');

        const { theme } = useThemeStore.getState();
        expect(theme).toBe('win7');
        expect(document.documentElement.removeAttribute).toHaveBeenCalledWith('data-theme');
    });
});

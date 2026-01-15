import { describe, it, expect, beforeEach } from 'vitest';
import { useWindowStore } from './windowStore';

describe('windowStore', () => {
    beforeEach(() => {
        useWindowStore.setState({ windows: [], activeWindowId: null });
    });

    it('should open a new window', () => {
        const { openWindow } = useWindowStore.getState();
        openWindow({ id: 'test', title: 'Test', content: null, type: 'app', position: { x: 0, y: 0 }, size: { width: 100, height: 100 } });

        const { windows, activeWindowId } = useWindowStore.getState();
        expect(windows).toHaveLength(1);
        expect(windows[0].id).toBe('test');
        expect(activeWindowId).toBe('test');
    });

    it('should minimize a window', () => {
        const { openWindow, minimizeWindow } = useWindowStore.getState();
        openWindow({ id: 'test', title: 'Test', content: null, type: 'app', position: { x: 0, y: 0 }, size: { width: 100, height: 100 } });
        minimizeWindow('test');

        const { windows } = useWindowStore.getState();
        expect(windows[0].isMinimized).toBe(true);
    });

    it('should close a window', () => {
        const { openWindow, closeWindow } = useWindowStore.getState();
        openWindow({ id: 'test', title: 'Test', content: null, type: 'app', position: { x: 0, y: 0 }, size: { width: 100, height: 100 } });
        closeWindow('test');

        const { windows } = useWindowStore.getState();
        expect(windows).toHaveLength(0);
    });
});

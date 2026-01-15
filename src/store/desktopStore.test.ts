import { describe, it, expect, beforeEach } from 'vitest';
import { useDesktopStore } from './desktopStore';

describe('desktopStore', () => {
    beforeEach(() => {
        useDesktopStore.setState({
            icons: [
                { id: 'My Computer', x: 20, y: 20 },
                { id: 'Recycle Bin', x: 20, y: 120 },
            ], selectedIconIds: []
        });
    });

    it('should select an icon', () => {
        const { selectIcon } = useDesktopStore.getState();
        selectIcon('My Computer', false);

        const { selectedIconIds } = useDesktopStore.getState();
        expect(selectedIconIds).toContain('My Computer');
        expect(selectedIconIds).toHaveLength(1);
    });

    it('should multi-select icons', () => {
        const { selectIcon } = useDesktopStore.getState();
        selectIcon('My Computer', false);
        selectIcon('Recycle Bin', true);

        const { selectedIconIds } = useDesktopStore.getState();
        expect(selectedIconIds).toContain('My Computer');
        expect(selectedIconIds).toContain('Recycle Bin');
        expect(selectedIconIds).toHaveLength(2);
    });

    it('should update icon position', () => {
        const { updateIconPosition } = useDesktopStore.getState();
        updateIconPosition('My Computer', 100, 100);

        const { icons } = useDesktopStore.getState();
        const icon = icons.find(i => i.id === 'My Computer');
        expect(icon?.x).toBe(100);
        expect(icon?.y).toBe(100);
    });
});

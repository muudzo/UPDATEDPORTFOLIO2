import { create } from 'zustand';

interface IconPosition {
    id: string;
    x: number;
    y: number;
}

interface DesktopState {
    icons: IconPosition[];
    selectedIconIds: string[];
    updateIconPosition: (id: string, x: number, y: number) => void;
    selectIcon: (id: string, multi: boolean) => void;
    deselectAll: () => void;
}

export const useDesktopStore = create<DesktopState>((set) => ({
    icons: [
        { id: 'My Computer', x: 20, y: 20 },
        { id: 'Recycle Bin', x: 20, y: 120 },
        { id: 'Network', x: 20, y: 220 },
        { id: 'Documents', x: 20, y: 320 },
    ],
    selectedIconIds: [],
    updateIconPosition: (id, x, y) => set((state) => ({
        icons: state.icons.map(icon => icon.id === id ? { ...icon, x, y } : icon)
    })),
    selectIcon: (id, multi) => set((state) => ({
        selectedIconIds: multi
            ? (state.selectedIconIds.includes(id) ? state.selectedIconIds.filter(i => i !== id) : [...state.selectedIconIds, id])
            : [id]
    })),
    deselectAll: () => set({ selectedIconIds: [] })
}));

import { create } from 'zustand';
import { WindowState, Position } from '../components/os/types';

interface WindowStore {
    windows: WindowState[];
    activeWindowId: string | null;
    openWindow: (window: Omit<WindowState, 'isOpen' | 'isMinimized' | 'isMaximized' | 'zIndex'>) => void;
    closeWindow: (id: string) => void;
    minimizeWindow: (id: string) => void;
    maximizeWindow: (id: string) => void;
    minimizeAllBut: (id: string) => void;
    focusWindow: (id: string) => void;
    updateWindowPosition: (id: string, position: Position) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
    windows: [],
    activeWindowId: null,

    openWindow: (newWindow) => set((state) => {
        // Check if already open
        const existing = state.windows.find(w => w.id === newWindow.id);
        if (existing) {
            // Bring to front
            const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));
            return {
                activeWindowId: newWindow.id,
                windows: state.windows.map(w => w.id === newWindow.id ? { ...w, zIndex: maxZ + 1, isMinimized: false } : w)
            };
        }

        const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));
        const window: WindowState = {
            ...newWindow,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: maxZ + 1,
        };
        return {
            windows: [...state.windows, window],
            activeWindowId: window.id
        };
    }),

    closeWindow: (id) => set((state) => ({
        windows: state.windows.filter(w => w.id !== id),
        activeWindowId: state.activeWindowId === id ? null : state.activeWindowId
    })),

    minimizeWindow: (id) => set((state) => ({
        windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: true } : w) // Modified this line
    })),

    maximizeWindow: (id) => set((state) => ({
        windows: state.windows.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)
    })),

    minimizeAllBut: (id) => set((state) => ({ // Added this block
        windows: state.windows.map(w => w.id === id ? { ...w, isMinimized: false } : { ...w, isMinimized: true })
    })),

    focusWindow: (id) => set((state) => {
        const maxZ = Math.max(0, ...state.windows.map(w => w.zIndex));
        const current = state.windows.find(w => w.id === id);
        if (!current || current.zIndex === maxZ) return { activeWindowId: id };

        return {
            activeWindowId: id,
            windows: state.windows.map(w => w.id === id ? { ...w, zIndex: maxZ + 1 } : w)
        };
    }),

    updateWindowPosition: (id, position) => set((state) => ({
        windows: state.windows.map(w => w.id === id ? { ...w, position } : w)
    })),
}));

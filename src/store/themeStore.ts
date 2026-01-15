import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
    theme: 'win7' | 'mac';
    setTheme: (theme: 'win7' | 'mac') => void;
    wallpaper: string;
    setWallpaper: (url: string) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'win7',
            setTheme: (theme) => {
                set({ theme });
                if (theme === 'mac') {
                    document.documentElement.setAttribute('data-theme', 'mac');
                } else {
                    document.documentElement.removeAttribute('data-theme');
                }
            },
            wallpaper: 'default',
            setWallpaper: (wallpaper) => set({ wallpaper }),
        }),
        {
            name: 'os-theme-storage',
        }
    )
);

# Nostalgia OS-Switcher Portfolio

A unique interactive portfolio website that lets users switch between **Windows 7** and **Mac OS X Aqua** themes. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dual Operating System Themes**: Hot-switch between Windows 7 and Mac OS X.
- **Boot Loader**: Authentic boot sequence and OS selection screen.
- **Window Management**: Drag, minimize, maximize, and stack windows.
- **Start Menu & Finder**: Functional menus with search and navigation.
- **Animations**: Smooth transitions, genie effect (Mac), and window animations.
- **Accessibility**: Keyboard navigation and ARIA support.
- **Persistence**: Remembers your theme choice.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view.

3.  **Run Tests**:
    ```bash
    npm test
    ```

## Project Structure

- `src/components/win7`: Windows 7 specific components (StartMenu, Taskbar).
- `src/components/mac`: Mac OS X specific components (Dock, MenuBar).
- `src/components/os`: Shared OS components (WindowContainer, Desktop).
- `src/store`: Zustand stores for state management (windowStore, desktopStore, themeStore).

## Credits

Created by Tatenda Nyemudzo.

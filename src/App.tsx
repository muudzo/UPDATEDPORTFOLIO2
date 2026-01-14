import React from 'react';
import { Desktop } from './components/os/Desktop';
import { Taskbar } from './components/os/Taskbar';
import { NotificationContainer } from './components/common/NotificationContainer';
import { useWindowStore } from './store/windowStore';
import { WindowContainer } from './components/os/WindowContainer';
import { WindowHeader } from './components/os/WindowHeader';
import { WindowBody } from './components/os/WindowBody';
// import { useDraggable } from './hooks/useDraggable'; // Need to update wrapper to use hook properly

// Temporary wrapper to bridge the hook and the store
// Ideally this logic moves to a dedicated WindowManager component
const WindowWrapper = ({ windowState }: { windowState: any }) => {
  const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, updateWindowPosition } = useWindowStore();

  // Simple drag implementation for now without the hook to verify integration quickly, 
  // or use the hook if I import it correctly.
  // I'll assume simple integration: Just render it at store position.
  // Draggable logic hook was confusing in prev thought block.
  // Let's rely on WindowContainer to render, and maybe later add the drag bindings.
  // Actually, WindowHeader needs onMouseDown.

  return (
    <WindowContainer
      windowState={windowState}
      isActive={useWindowStore.getState().activeWindowId === windowState.id}
      onFocus={() => focusWindow(windowState.id)}
    >
      <WindowHeader
        title={windowState.title}
        onMouseDown={() => { }} // TODO: Attach drag hook here
        onClose={() => closeWindow(windowState.id)}
        onMinimize={() => minimizeWindow(windowState.id)}
        onMaximize={() => maximizeWindow(windowState.id)}
      />
      <WindowBody>{windowState.content}</WindowBody>
    </WindowContainer>
  );
};

function App() {
  const { windows, openWindow } = useWindowStore();

  return (
    <>
      <Desktop>
        {windows.map(w => (
          <WindowWrapper key={w.id} windowState={w} />
        ))}

        {/* Debug Controls */}
        <div className="absolute top-10 left-10 z-10 flex gap-2">
          <button
            className="bg-white/80 p-2 rounded shadow text-black"
            onClick={() => openWindow({
              id: 'test-' + Date.now(),
              title: 'Test Window',
              content: <div className="p-4">Content here...</div>,
              position: { x: 100 + windows.length * 20, y: 100 + windows.length * 20 },
              size: { width: 400, height: 300 },
              type: 'app'
            })}
          >
            Spawn Window
          </button>
        </div>
      </Desktop>

      <Taskbar />
      <NotificationContainer />
    </>
  );
}

export default App;

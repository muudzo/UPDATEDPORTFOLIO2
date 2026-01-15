import React, { useState } from 'react';
import { Desktop } from './components/os/Desktop';
import { Taskbar } from './components/os/Taskbar';
import { NotificationContainer } from './components/common/NotificationContainer';
import { useWindowStore } from './store/windowStore';
import { WindowContainer } from './components/os/WindowContainer';
import { WindowHeader } from './components/os/WindowHeader';
import { WindowBody } from './components/os/WindowBody';
import { AnimatePresence } from 'framer-motion';
import { BootSequence } from './components/common/BootSequence';

function App() {
  const { windows, openWindow, focusWindow, closeWindow, minimizeWindow, maximizeWindow, activeWindowId, updateWindowPosition, minimizeAllBut } = useWindowStore();
  const [isBooting, setIsBooting] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      <Desktop>
        <AnimatePresence>
          {windows.map((w) => (
            <WindowContainer
              key={w.id}
              windowState={w}
              isActive={activeWindowId === w.id}
              onFocus={() => focusWindow(w.id)}
              onDragEnd={(pos) => updateWindowPosition(w.id, pos)}
              onShake={() => minimizeAllBut(w.id)}
            >
              <WindowHeader
                title={w.title}
                icon={w.icon}
                onClose={() => closeWindow(w.id)}
                onMinimize={() => minimizeWindow(w.id)}
                onMaximize={() => maximizeWindow(w.id)}
                onMouseDown={() => { }}
              />
              <WindowBody>
                {w.content}
              </WindowBody>
            </WindowContainer>
          ))}
        </AnimatePresence>

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

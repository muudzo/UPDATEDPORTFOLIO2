export const playSound = (type: 'hover' | 'click' | 'open') => {
    // Check if sound is enabled in settings (mock check)
    const soundEnabled = true;
    if (!soundEnabled) return;

    const audio = new Audio();

    // Use short, subtle UI sounds (these are placeholders)
    switch (type) {
        case 'hover':
            // Very short high tick
            audio.src = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'; // tiny blip placeholder
            playWithVolume(audio, 0.1);
            break;
        case 'click':
            // Standard click
            audio.src = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'; // tiny blip placeholder
            playWithVolume(audio, 0.2);
            break;
        case 'open':
            // Whoosh
            break;
    }
};

const playWithVolume = (audio: HTMLAudioElement, volume: number) => {
    audio.volume = volume;
    audio.play().catch(() => { }); // Ignore autoplay errors
};

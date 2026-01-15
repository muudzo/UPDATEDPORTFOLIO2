import React, { useRef, useState } from 'react';
import { Icon } from '../common/Icon';

interface VideoPlayerProps {
    src?: string;
    poster?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress || 0);
        }
    };

    return (
        <div className="flex flex-col h-full bg-black">
            <div className="flex-1 relative flex items-center justify-center bg-black overflow-hidden group">
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    className="max-w-full max-h-full"
                    onClick={togglePlay}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                    <button
                        onClick={togglePlay}
                        className="absolute inset-0 m-auto w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center transition-all animate-in zoom-in"
                    >
                        <Icon icon="play" size={32} className="ml-1 text-white" />
                    </button>
                )}
            </div>

            <div className="h-12 bg-[#222] border-t border-[#333] flex items-center px-4 gap-4 text-white select-none">
                <button onClick={togglePlay} className="hover:text-blue-400">
                    <Icon icon={isPlaying ? "pause" : "play"} size={20} />
                </button>

                <div className="flex-1 h-1 bg-gray-600 rounded-full relative cursor-pointer group">
                    <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                    <div
                        className="absolute top-1/2 -mt-1.5 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ left: `${progress}%`, marginLeft: '-6px' }}
                    />
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                    <Icon icon="volume-2" size={16} />
                    <div className="w-16 h-1 bg-gray-600 rounded-full">
                        <div className="w-2/3 h-full bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

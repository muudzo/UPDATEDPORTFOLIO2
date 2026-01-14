import React from 'react';
import { useNotificationStore } from '../../store/notificationStore';

export const NotificationContainer: React.FC = () => {
    const { notifications, removeNotification } = useNotificationStore();

    return (
        <div className="fixed top-4 right-4 z-[10000] flex flex-col gap-2 pointer-events-none">
            {notifications.map(n => (
                <div
                    key={n.id}
                    onClick={() => removeNotification(n.id)}
                    className="w-72 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-3 border border-white/20 pointer-events-auto cursor-pointer transition-all hover:bg-white animate-in slide-in-from-right fade-in"
                >
                    <h4 className="font-semibold text-sm text-gray-900">{n.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{n.message}</p>
                </div>
            ))}
        </div>
    );
};

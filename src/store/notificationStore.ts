import { create } from 'zustand';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type?: 'info' | 'success' | 'error' | 'warning';
    duration?: number;
}

interface NotificationStore {
    notifications: Notification[];
    addNotification: (n: Omit<Notification, 'id'>) => void;
    removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
    notifications: [],
    addNotification: (n) => {
        const id = Math.random().toString(36).substr(2, 9);
        set((state) => ({ notifications: [...state.notifications, { ...n, id }] }));

        if (n.duration !== 0) {
            setTimeout(() => {
                set((state) => ({
                    notifications: state.notifications.filter(item => item.id !== id)
                }));
            }, n.duration || 5000);
        }
    },
    removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
    }))
}));

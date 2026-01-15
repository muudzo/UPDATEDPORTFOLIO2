import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioContent';
import { Icon } from '../common/Icon';

export const Contact: React.FC = () => {
    const { contact } = portfolioData;
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => setFormStatus('sent'), 1500);
    };

    return (
        <div className="p-6 h-full bg-white select-text overflow-y-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                <p className="text-gray-600 text-sm">Have a project in mind or just want to say hi?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                {/* Contact Info */}
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <Icon icon="mail" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">Email</div>
                            <a href={`mailto:${contact.email}`} className="text-blue-600 font-medium truncate block hover:underline">{contact.email}</a>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
                            <Icon icon="github" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">GitHub</div>
                            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium truncate block hover:underline">github.com/tatenda</a>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                            <Icon icon="linkedin" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">LinkedIn</div>
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium truncate block hover:underline">linkedin.com/in/tatenda</a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                    {formStatus === 'sent' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                            <h3 className="font-bold text-gray-800 text-lg">Message Sent!</h3>
                            <p className="text-gray-600 text-sm mt-2">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                type="button"
                                onClick={() => setFormStatus('idle')}
                                className="mt-6 text-sm text-blue-600 hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                <input required type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea required rows={4} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none" placeholder="Hello..." />
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                            >
                                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    )}
                </form>

            </div>
        </div>
    );
};

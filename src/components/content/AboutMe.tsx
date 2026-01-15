import React from 'react';
import { portfolioData } from '../../data/portfolioContent';

export const AboutMe: React.FC = () => {
    const { about } = portfolioData;

    return (
        <div className="p-6 h-full bg-white select-text">
            <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-lg mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400 font-bold bg-[#e0e0e0]">
                        {/* Place holder avatar if image URL is missing */}
                        TN
                    </div>
                    {/* <img src={about.avatar} alt={about.name} className="w-full h-full object-cover" /> */}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{about.name}</h2>
                <p className="text-blue-600 font-medium">{about.title}</p>
            </div>

            <div className="prose prose-sm max-w-none text-gray-600">
                <p className="mb-4">{about.description}</p>

                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {about.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { portfolioData } from '../../data/portfolioContent';

export const Projects: React.FC = () => {
    const { projects } = portfolioData;

    return (
        <div className="p-6 h-full bg-[#f9f9f9] select-text overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        {/* Card content will be extracted to dedicated component in next commit */}
                        <h3 className="font-bold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                                <span key={tech} className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded border border-blue-100 uppercase font-semibold tracking-wide">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

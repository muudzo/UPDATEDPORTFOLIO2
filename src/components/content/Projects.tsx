import React from 'react';
import { portfolioData } from '../../data/portfolioContent';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
    const { projects } = portfolioData;

    return (
        <div className="p-6 h-full bg-[#f9f9f9] select-text overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

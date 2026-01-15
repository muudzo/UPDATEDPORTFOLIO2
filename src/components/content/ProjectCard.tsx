import React from 'react';
import { Project } from '../../data/portfolioContent';
import { Icon } from '../common/Icon';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 text-lg">{project.title}</h3>
                <div className="flex gap-2">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" title="GitHub">
                            <Icon icon="github" size={18} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" title="Live Demo">
                            <Icon icon="external-link" size={18} />
                        </a>
                    )}
                </div>
            </div>

            {project.imageUrl && (
                <div className="mb-3 rounded overflow-hidden border border-gray-100 h-32 bg-gray-50 flex items-center justify-center">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                </div>
            )}

            <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded border border-blue-100 uppercase font-semibold tracking-wide">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

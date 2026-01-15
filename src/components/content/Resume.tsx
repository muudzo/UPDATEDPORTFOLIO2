import React from 'react';
import { portfolioData } from '../../data/portfolioContent';

export const Resume: React.FC = () => {
    const { experience, about } = portfolioData;

    return (
        <div className="p-8 h-full bg-white select-text overflow-y-auto max-w-3xl mx-auto shadow-sm">
            <div className="border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">{about.name}</h1>
                <div className="flex justify-between items-center mt-2 text-gray-600">
                    <span className="font-medium text-lg">{about.title}</span>
                    <div className="text-sm">
                        <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-blue-600">{portfolioData.contact.email}</a>
                    </div>
                </div>
            </div>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-1 mb-4 uppercase text-sm tracking-wide">Summary</h2>
                <p className="text-gray-700 leading-relaxed">{about.description}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-1 mb-4 uppercase text-sm tracking-wide">Experience</h2>
                <div className="space-y-6">
                    {experience.map(exp => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-gray-900">{exp.role}</h3>
                                <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                            </div>
                            <div className="text-gray-700 font-medium mb-2">{exp.company}</div>
                            <ul className="list-disc list-outside ml-4 space-y-1">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-1 mb-4 uppercase text-sm tracking-wide">Skills</h2>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {about.skills.map((skill, i) => (
                        <span key={skill} className="text-gray-700 text-sm">
                            {skill}{i < about.skills.length - 1 ? " • " : ""}
                        </span>
                    ))}
                </div>
            </section>

            <div className="mt-12 pt-6 border-t border-gray-100 text-center">
                <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-black transition-colors">
                    Download PDF
                </button>
            </div>
        </div>
    );
};

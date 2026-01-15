export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    link?: string;
    github?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface PortfolioData {
    about: {
        name: string;
        title: string;
        description: string;
        skills: string[];
    };
    projects: Project[];
    experience: Experience[];
    contact: {
        email: string;
        github: string;
        linkedin: string;
        twitter?: string;
    };
}

export const portfolioData: PortfolioData = {
    about: {
        name: "Tatenda Nyemudzo",
        title: "Full Stack Developer",
        description: "I build nostalgic, interactive web experiences and robust applications. Passionate about UI/UX and clean code.",
        skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "PostgreSQL"]
    },
    projects: [
        {
            id: "1",
            title: "Nostalgia OS Portfolio",
            description: "A dual-theme personal portfolio website featuring interactive Windows 7 and Mac OS X interfaces with draggable windows and a working taskbar/dock.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
            github: "https://github.com/tatenda/nostalgia-os"
        },
        {
            id: "2",
            title: "E-Commerce Dashboard",
            description: "A comprehensive analytics dashboard for online retailers, featuring real-time data visualization and inventory management.",
            technologies: ["Next.js", "Recharts", "Supabase"],
        },
        {
            id: "3",
            title: "AI Chat Assistant",
            description: "A smart chat interface integrated with OpenAI API, featuring context awareness and code syntax highlighting.",
            technologies: ["React", "OpenAI API", "Vite"],
        }
    ],
    experience: [],
    contact: {
        email: "tatenda@example.com",
        github: "https://github.com/tatenda",
        linkedin: "https://linkedin.com/in/tatenda",
    }
};

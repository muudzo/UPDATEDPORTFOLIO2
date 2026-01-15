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
    projects: [], // specific data to be added in Commit 58
    experience: [],
    contact: {
        email: "tatenda@example.com",
        github: "https://github.com/tatenda",
        linkedin: "https://linkedin.com/in/tatenda",
    }
};

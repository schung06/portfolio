import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Allaboard from "@/app/assets/Allaboard.png";
import OneLife from "@/app/assets/1Life.png";
import WayBackHome from "@/app/assets/WayBackHome.webp";
import Portfolio from "@/app/assets/Portfolio.png";
import { motion } from 'motion/react';

const skills = [
  { name: 'Frontend', icon: Globe, color: '#8ba888' },
  { name: 'Backend', icon: Database, color: '#b89f8f' },
  { name: 'UX Design', icon: Smartphone, color: '#a8c5a4' },
  { name: 'Algorithms', icon: Code2, color: '#c9b5a0' },
];

const projects = [
  {
    title: "Allaboard",
    description:
      "An app that transforms trip planning into a fun, collaborative, and engaging process for the whole family.",
    tags: ["Angular", "Node.js", "Figma"],
    image: Allaboard,
    link: "https://espionach.notion.site/ALLABOARD-a-collaborative-trip-planning-tool-2680617671ff8071a6def36018e5ba96",
  },
  {
    title: "Portfolio Site",
    description:
      "My personal portfolio site that you are looking at right now.",
    tags: ["React", "Tailwind CSS", "Figma"],
    image: Portfolio,
    link: "https://github.com/schung06/portfolio",
  },
  {
    title: "1Life",
    description:
      "An app designed specifically for Gen Z by merging addictive features of social media with essential life skills content.",
    tags: ["Swift", "Figma", "TypeScript"],
    image: OneLife,
    link: "https://devpost.com/software/onelife-hmn9xk",
  },
  {
    title: "The Way Back Home",
    description:
      " A 2D RPG game where you'll guide a lost dog through a dark forest to find the way back home and reunite with their owner.",
    tags: ["Unity", "Unity DevOps", "Audacity"],
    image: WayBackHome,
    link: "https://absolutezer0527.itch.io/the-way-back-home",
  },
];

export function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen px-6 py-20"
      style={{ backgroundColor: '#f5f3ef' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl mb-12 text-center" 
          style={{ color: '#5a4a3a' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Projects & Skills
        </motion.h2>
        
        {/* Skills Overview */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl mb-8 text-center" 
            style={{ color: '#6a5a4a' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-6 rounded-2xl text-center transition-transform hover:scale-105"
                style={{ backgroundColor: '#ffffff' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <skill.icon 
                  size={40} 
                  className="mx-auto mb-3" 
                  style={{ color: skill.color }}
                />
                <p style={{ color: '#5a4a3a' }}>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          <motion.h3 
            className="text-2xl text-center" 
            style={{ color: '#6a5a4a' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: '#ffffff' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl mb-3" style={{ color: '#5a4a3a' }}>
                    {project.title}
                  </h4>
                  <p className="mb-4" style={{ color: '#6a5a4a' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: '#e8e5df', color: '#5a4a3a' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
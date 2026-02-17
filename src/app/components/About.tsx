import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import AboutMe from "@/app/assets/AboutMe.webp";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
      style={{ backgroundColor: "#e8e5df" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mb-12 text-center"
          style={{ color: "#5a4a3a" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src={AboutMe}
              alt="Me at the beach"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Quick Facts Section */}
            <div
              className="space-y-4 pb-6 border-b-2"
              style={{ borderColor: "#8ba888" }}
            >
              <div>
                <p className="text-sm" style={{ color: "#6a5a4a" }}>
                  Based in San Jose, CA
                </p>
              </div>

              <div>
                <p className="text-sm mb-2" style={{ color: "#8ba888" }}>
                  I work with:
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6a5a4a" }}
                >
                  React, Angular, Java, Python, C/C++, TypeScript, Node.js, SQL,
                  Figma, Git
                </p>
              </div>

              <div>
                <p className="text-sm mb-2" style={{ color: "#8ba888" }}>
                  I specialize in:
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6a5a4a" }}
                >
                  Front-End Development, Web Applications, UI/UX Design
                </p>
              </div>

              <div>
                <p className="text-sm mb-2" style={{ color: "#8ba888" }}>
                  Currently learning:
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6a5a4a" }}
                >
                  Database System Principles, AI Search and Reasoning, Software
                  Engineering 
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed" style={{ color: "#5a4a3a" }}>
              I am a Computer Science student at UC San Diego aspiring to be a
              web developer. My journey in tech started with graphic design and
              working with interdiscplinary teams to create engaging digital
              experiences.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#6a5a4a" }}>
              In my free time, you can find me playing visual novel games,
              experimenting with new music compositions, and going on walks with
              my dogs. Click the music icon at the bottom right to listen to one
              of my original compositions!
            </p>
            <div className="pt-4">
              <h3 className="text-xl mb-4" style={{ color: "#8ba888" }}>
                Extracurriculars at UCSD
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: "#8ba888" }}>✓</span>
                  <span style={{ color: "#6a5a4a" }}>
                    CSE Early Research Scholars Program
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#8ba888" }}>✓</span>
                  <span style={{ color: "#6a5a4a" }}>Triton Robotics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#8ba888" }}>✓</span>
                  <span style={{ color: "#6a5a4a" }}>
                    Association for Computing Machinary
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "#8ba888" }}>✓</span>
                  <span style={{ color: "#6a5a4a" }}>XR Lab</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
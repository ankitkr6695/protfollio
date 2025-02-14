import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import news from './img/news.jpg';
import code from './img/code.jpg';
import blog from './img/blog.jpg';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Leetcode Clone",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      image: code,
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "A Blog app",
      description: "A collaborative task management tool with real-time updates",
      image: blog,
      tags: ["React", "MongoDB", "Expressjs"],
      link: "https://github.com/ankitkr6695/a-blog-app"
    },
    {
      title: "A News Web App",
      description: "Real-time weather tracking application with detailed forecasts",
      image: news,
      tags: ["React", "News API", "javascript"],
      link: "https://github.com/ankitkr6695/NewsWebApp"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-5 z-0" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="overflow-hidden mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 typing-effect">
                Ankit Kumar
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
              Building beautiful digital experiences with modern technologies
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <SocialLink href="https://github.com/ankitkr6695" icon={<Github />} delay={100} />
              <SocialLink href="https://www.linkedin.com/in/ankit2003/" icon={<Linkedin />} delay={200} />
              <SocialLink href="krankit2003@gmail.com" icon={<Mail />} delay={400} />
            </div>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-transform hover:translate-y-1"
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={projectsRef}>
          {projects.map((project, index) => (
            <div key={index} className="reveal-on-scroll" style={{ transitionDelay: `${index * 200}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="max-w-2xl mx-auto text-center reveal-on-scroll">
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:krankit2003@gmail.com.com"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-lg"
          >
            Send me an email
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Ankit Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  delay: number;
}

function SocialLink({ href, icon, delay }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:scale-110 hover:shadow-lg animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default App;
import React from 'react';
// Category Icons
import { FiLayout, FiTool, FiDatabase, FiCloud, FiBookOpen } from 'react-icons/fi';
// Skill Icons
import { FaReact, FaHtml5, FaGithub, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiBootstrap, SiVercel, SiFigma, SiFirebase, SiNetlify, SiPostman } from 'react-icons/si';
import { MdDevices, MdSpeed } from 'react-icons/md';
import { TbApi, TbBrandRedux } from 'react-icons/tb';

const TechStack = () => {
  const stackData = [
    {
      title: "Frontend Development",
      description: "Building the visual components and user interactions.",
      icon: <FiLayout className="text-blue-500" />,
      color: "bg-[#20c997]/20 border-green-200",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML/CSS", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "Redux", icon: <TbBrandRedux  className="text-[#8F00FF]" /> }
      ]
    },
    {
      title: "Core Fundamentals",
      description: "Essential concepts for robust web applications.",
      icon: <FiBookOpen className="text-indigo-500" />,
      color: "bg-[#20c997]/20 border-green-200",
      skills: [
        { name: "Responsive UI", icon: <MdDevices className="text-[#b646c7]" /> },
        { name: "REST APIs", icon: <TbApi className="text-blue-600" /> },
        { name: "Performance", icon: <MdSpeed className="text-red-500" /> }
      ]
    },
    {
      title: "Tools & Productivity",
      description: "Software that speeds up my workflow.",
      icon: <FiTool className="text-orange-500" />,
      color: "bg-[#20c997]/20 border-green-200",
      skills: [
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "NPM", icon: <FaNpm className="text-[#CB3837]" /> }
      ]
    },
    {
      title: "DevOps & Deployment",
      description: "Managing code versions and going live.",
      icon: <FiCloud className="text-sky-500" />,
      color: "bg-[#20c997]/20 border-green-200",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
      ]
    },
    {
      title: "Database Management",
      description: "Handling user data and authentication.",
      icon: <FiDatabase className="text-purple-500" />,
      color: "bg-[#20c997]/20 border-green-200",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray" id="tech-stack">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
       
        
        {/* Title text  */}
      <div className="relative py-10 text-center overflow-hidden mb-10">
        <h1
          className="absolute bottom-3 inset-0 flex items-center justify-center 
                       text-8xl md:text-9xl font-bold text-[#DADADA] 
                       opacity-40"
        >
          TECH STACK
        </h1>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B]">
            My Tech Stack
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-green"></div>
          </div>
        </div>
      </div>
      {/* Title text  */}

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 rounded-full"></div>

          <div className="space-y-12">
            {stackData.map((category, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                 
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 items-center justify-center text-xl z-5 shadow-sm">
                    {category.icon}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[45%] p-6 rounded-2xl border ${category.color} bg-opacity-50 hover:bg-opacity-100 transition-all duration-300`}>
                   
                    {/* Mobile (Icon + Title) */}
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className="md:hidden text-2xl bg-white p-2 rounded-lg shadow-sm">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {category.title}
                      </h3>
                    </div>
                   
                    <p className="text-sm text-gray-600 mb-5">
                      {category.description}
                    </p>

                    {/* Skill */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 border border-gray-100"
                        >
                          <span className="text-lg">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
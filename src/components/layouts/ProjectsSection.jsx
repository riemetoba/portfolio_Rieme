import { FaArrowRight, FaGithub } from "react-icons/fa6";
import Image from "../Image";
import orebi from "/src/assets/orebi.png";
import reeni from "/src/assets/reeni.png";
import creative from "/src/assets/creative.png";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-16">
        {/* Title text  */}
      <div className="relative py-10 text-center overflow-hidden mb-11">
        <h1
          className="absolute bottom-3 inset-0 flex items-center justify-center 
                       text-5xl md:text-9xl font-bold text-[#DADADA] 
                       opacity-40"
        >
          PORTFOLIO
        </h1>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B]">
            My Work
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-green"></div>
          </div>
        </div>
      </div>
      {/* Title text  */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-0">
          {/* ================= Project 1 Start ================= */}
          <div className="group bg-white rounded-3xl border-gray-300 border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-70 overflow-hidden">
              <Image
                src={orebi}
                alt="E-Commerce Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                React Tailwind
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://react-orebi-e-commerce.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100"
                  title="View Live"
                >
                  <FaArrowRight className="-rotate-45 text-lg" />
                </a>
                <a
                  href="https://react-orebi-e-commerce.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200"
                  title="Github Code"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-org transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-org transition-colors duration-300">
                E-Commerce
              </h3>
              <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
               A full-featured online shopping platform with product filtering, cart management, and secure checkout flow.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #react
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #redux
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #tailwind
                </span>
              </div>
            </div>
          </div>
          {/* ================= Project 1 End ================= */}
          {/* ================= Project 2 Start ================= */}
          <div className="group rounded-3xl  border-gray-300 border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-70 overflow-hidden">
              <Image
                src={reeni}
                alt="E-Commerce Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                React Tailwind 
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://reeni-portfolio-steel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100"
                  title="View Live"
                >
                  <FaArrowRight className="-rotate-45 text-lg" />
                </a>
                <a
                  href="https://reeni-portfolio-steel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200"
                  title="Github Code"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-org transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-org transition-colors duration-300">
                Portfolio
              </h3>
              <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                Modern digital presence designed to showcase creative expertise with integrated service sections and a fluid contact flow.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #react
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #redux
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #tailwind
                </span>
              </div>
            </div>
          </div>
          {/* ================= Project 2 End ================= */}
          {/* ================= Project 3 Start ================= */}
          <div className="group bg-white rounded-3xl  border-gray-300 border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-70 overflow-hidden">
              <Image
                src={creative}
                alt="E-Commerce Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                React Tailwind
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://creative-it-dmt.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100"
                  title="View Live"
                >
                  <FaArrowRight className="-rotate-45 text-lg" />
                </a>
                <a
                  href="https://creative-it-dmt.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200"
                  title="Github Code"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-org transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-org transition-colors duration-300">
                Website<span> (Team Project)</span>
              </h3>
              <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                
Collaborative IT portal with a streamlined enrollment system and integrated curriculum management for a seamless student experience.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #react
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #redux
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #tailwind
                </span>
              </div>
            </div>
          </div>
          {/* ================= Project 3 End ================= */}
        </div>
        {/* Bottom Button */}
       <div className="text-center mt-16">
          <a
            href="https://github.com/riemetoba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold border-b-[1.5px] pb-0.5 hover:text-green hover:border-green transition-colors"
          >
            See all projects on GitHub →
          </a>
        </div>
    </section>
  );
};

export default ProjectsSection;

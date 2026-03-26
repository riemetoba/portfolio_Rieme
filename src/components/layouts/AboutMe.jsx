const AboutMe = () => {
  return (
    <section className="container py-16">
      {/* Title text  */}
      <div className="relative py-10 text-center overflow-hidden">
        <h1
          className="absolute bottom-3 inset-0 flex items-center justify-center 
                       text-5xl md:text-9xl font-bold text-[#DADADA]/40"
        >
          ABOUT ME
        </h1>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B]">
            Know Me More
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-green"></div>
          </div>
        </div>
      </div>
      {/* Title text  */}
      {/* Content part  */}
      <div className="flex flex-col px-5 gap-y-15 lg:gap-y-0 md:px-0 md:flex-row lg:items-start py-15 lg:gap-x-10">
        <div className="md:w-[60%] w-full">
          <h3 className="md:text-3xl text-[26px] font-semibold mb-6">
            I'm <span className="text-green">Rieme Hasan,</span> a Front-End
            Developer
          </h3>
          <p className="text-base leading-6.25">
            I build modern, responsive, and visually appealing websites as a frontend developer, focusing on clean code and smooth user experience. I use the latest technologies to create fast, scalable, and user-friendly interfaces.
          </p>
          <br />
          <p className="text-base leading-6.25">
            I deliver projects on time while meeting both user needs and business goals. From simple pages to complex apps, I turn ideas into functional and engaging digital experiences.
          </p>
        </div>
        <div className="md:w-[40%] w-full">
        {/* Name */}
      <div className="py-3 border-b border-gray-300">
        <span className="font-semibold text-gray-800">Name:</span>
        <span className="text-gray-600 ml-2">Rieme Hasan</span>
      </div>

      {/* Email */}
      <div className="py-3 border-b border-gray-300">
        <span className="font-semibold text-gray-800">Email:</span>
        <span className="text-green ml-2">riemehasan06@gmail.com</span>
      </div>

      {/* Age */}
      <div className="py-3 border-b border-gray-300">
        <span className="font-semibold text-gray-800">Age:</span>
        <span className="text-gray-600 ml-2">28</span>
      </div>

      {/* From */}
      <div className="py-3">
        <span className="font-semibold text-gray-800">From:</span>
        <span className="text-gray-600 ml-2">Dhaka, Bangladesh</span>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="bg-green hover:bg-[#29AB87] text-lg text-white font-medium px-9 py-3 rounded-full shadow-md transition duration-300 cursor-pointer">
          Download CV
        </button>
      </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

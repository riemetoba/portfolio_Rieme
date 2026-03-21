const AboutMe = () => {
  return (
    <section className="container py-16">
      <div className="relative py-10 text-center overflow-hidden">

        <h1 className="absolute bottom-8 inset-0 flex items-center justify-center 
                       text-8xl md:text-9xl font-bold text-[#E5E4E2] 
                       opacity-40">
          ABOUT ME
        </h1>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-[#1B1B1B]">
            Know Me More
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-green"></div>
          </div>
        </div>

      </div>
      {/* Content part  */}
      <div className="flex items-center py-15">
        <div className="w-[60%]">
            <h3 className="font-poppins text-3xl font-semibold mb-6">I'm <span className="text-green">Rieme Hasan,</span> a Front-End Developer</h3>
            <p className="text-base font-poppins">I help build modern, responsive, and high-performing user interfaces that elevate digital experiences. As a frontend developer, I specialize in crafting clean, scalable, and user-friendly web applications using the latest technologies. Numerous clients and projects have benefited from my attention to detail, performance optimization, and pixel-perfect design implementation.</p> <br />
            <p className="text-base font-poppins">I focus on delivering visually appealing and functional interfaces within deadlines, ensuring every project aligns with user needs and business goals. From landing pages to complex web apps, I transform ideas into seamless digital experiences while maintaining code quality and best practices.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
const AboutMe = () => {
  return (
    <section className="sub-container py-16">
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
    </section>
  );
};

export default AboutMe;
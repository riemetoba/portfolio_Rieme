import { Typewriter } from "react-simple-typewriter"
import { IoIosArrowDown } from "react-icons/io";
const Banner = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Bg and overlay */}
      <div
        className="absolute bg-[url('/src/assets/banner.jpg')] inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>
      {/* Bg and overlay */}
      {/* ============>  */}
      <div className="relative z-10 text-center text-white px-4 font-poppins">
        <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#F5F5F5]">
          Welcome
        </h3>
        <h1 className="text-2xl md:text-[40px] lg:text-[72px] font-bold text-white mb-5"><span className="mr-3">I'm</span>
                            <Typewriter
                                words={['Rieme Hasan', 'a Front-End Developer']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={80}
                                delaySpeed={1500}
                            />
                        </h1>
        <p className="text-lg md:text-xl text-[#F5F5F5] mb-10 max-w-2xl mx-auto">
          based in Dhaka, Bangladesh.
        </p>

        <button className="px-10 py-3 border-2 border-green text-green rounded-full font-semibold text-lg hover:bg-green hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Banner;

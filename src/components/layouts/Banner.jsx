import Typewriter from "typewriter-effect";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const Banner = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Bg and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/banner.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>
      {/* Bg and overlay */}
      {/* ============>  */}
      <div className="relative z-10 text-center text-white px-4">
        <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-[#F5F5F5] font-poppins">
          Welcome
        </h3>
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 flex items-center justify-center">
          I'm Rieme Hasan
        </h1>
        <p className="text-lg md:text-xl text-[#F5F5F5] font-poppins mb-10 max-w-2xl mx-auto">
          based in Dhaka, Bangladesh.
        </p>

        <button className="px-10 py-3 border-2 border-green text-green rounded-full font-semibold text-lg hover:bg-green hover:text-white transition-all duration-300 ease-in-out font-poppins">
          Hire Me
        </button>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <IoIosArrowDown className="text-white h-6 w-6 cursor-pointer" />
      </div>

      {/* Setting icon */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#343a40] p-3 rounded-l-md cursor-pointer hidden md:block z-20">
        <IoSettingsSharp className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default Banner;

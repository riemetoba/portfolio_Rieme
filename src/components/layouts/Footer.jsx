import { SlLocationPin } from "react-icons/sl";
import { TfiMobile } from "react-icons/tfi";
import { RiMailLine } from "react-icons/ri";


import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-gray py-10">
        <div className="container">
          {/* Title text  */}
      <div className="relative py-10 text-center overflow-hidden mb-5">
        <h1
          className="absolute bottom-3 inset-0 flex items-center justify-center 
                       text-5xl md:text-9xl font-bold text-[#DADADA]/40"
        >
          CONTACT
        </h1>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B]">
            Get in Touch
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 bg-green"></div>
          </div>
        </div>
      </div>
      {/* Title text  */}
          <div
            className={
              "flex flex-col md:flex-row md:justify-between md:items-start px-5 md:px-0 md:mt-8"
            }
          >
            <div className="bg-[#ffffff] w-full md:w-190 h-auto md:h-90.5 px-4 md:px-6 py-5 drop-shadow-xl/40">
              <p className="uppercase text-[12px] text-[#090A0C] font-bold">
                say something
              </p>
              <div className="flex items-baseline justify-between gap-x-6 mt-10">
                <input
                  type="text"
                  placeholder="Name *"
                  className="border-b w-1/2 outline-none border-b-[#CCCCCC] hover:border-b-org duration-300"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border-b w-1/2 outline-none border-b-[#CCCCCC] hover:border-b-org duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="border-b outline-none border-b-[#CCCCCC] hover:border-b-org duration-300 w-full mt-8"
              />
              <input
                type="text"
                placeholder="Your Message *"
                className="border-b outline-none border-b-[#CCCCCC] hover:border-b-org duration-300 w-full mt-10 lg:mt-15"
              />
              <button className="mt-8 bg-green hover:bg-[#29AB87] text-lg text-white font-medium px-9 py-3 rounded-full shadow-md transition duration-300 cursor-pointer">
                Send Message
              </button>
            </div>
            <div className="flex items-start flex-col gap-y-7 py-8 lg:py-0">
              <div className="w-full lg:w-92 h-25.5 bg-white flex items-center gap-x-5 py-5 px-4 drop-shadow-xl/40 ">
                  <SlLocationPin className="text-green text-2xl" />
                <div className="">
                  <h5 className="text-base font-medium">My Address</h5>
                  <p className="text-sm text-[#555A64]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-92 h-25.5 bg-white flex items-center gap-x-5 py-5 px-4 drop-shadow-xl/40 ">
                  <TfiMobile className="text-green text-2xl" />
                <div className="">
                  <h5 className="text-base font-medium">My Phone</h5>
                  <p className="text-sm text-[#555A64]">
                    +8801577043696
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-92 h-25.5 bg-white flex items-center gap-x-5 py-5 px-4 drop-shadow-xl/40 ">
                  <RiMailLine className="text-green text-2xl" />
                <div className="">
                  <h5 className="text-base font-medium">My Email</h5>
                  <p className="text-sm text-[#555A64]">
                    riemehasan06@gmail.com
                  </p>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
      <div className="py-8">
        <div className="container">
          <div
            className={
              "flex flex-col lg:flex-row lg:justify-between text-[#2A3439] px-5 lg:px-0"
            }
          >
            <div className="flex items-center justify-center gap-x-5 text-2xl">
              <a href="https://github.com/riemetoba">
                <FaGithub className="hover:text-green duration-300 cursor-pointer"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100016533453052">
                <FaFacebook className="hover:text-green duration-300 cursor-pointer"/>
              </a>
              <a href="https://www.linkedin.com/in/rieme-hasan-291767398">
                <FaLinkedin className="hover:text-green duration-300 cursor-pointer"/>
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-1 py-5 lg:py-0 text-sm lg:text-base font-medium">
              <FaRegCopyright />
              <p>2026 copyright all right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;


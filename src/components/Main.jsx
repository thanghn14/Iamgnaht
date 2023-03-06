import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]"
        src="https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Hello, I'm Thang
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Technology Enthusiast", // Types 'One'
                1000, // Waits 1s
                "Frontend Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                // "Vietnamese", // Types 'Three' without deleting 'Two'
                // 1000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.facebook.com/profile.php?id=100086941385881" target="blank" className="hover:translate-y-[-3px]">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/" target="blank" className="hover:translate-y-[-3px]">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/thanghn14" target="blank" className="hover:translate-y-[-3px]">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com" target="blank" className="hover:translate-y-[-3px]">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import pic from "..//Asset//jeya.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

function Home() {
  return (
    <section
      id="home"
      className="w-screen h-[calc(100vh-4rem)] max-w-[90rem] mx-auto my-0 overflow-hidden flex "
    >
      <div className="h-screen w-screen p-[4rem] text-[3rem] font-bold flex flex-col justify-center">
        <span className="text-[1.75rem] font-thin ">Hello,</span>
        <span className="">
          I'm <span className="text-yellow-500 text-[3rem]">Jeyarish</span>
        </span>
        <p className="font-medium text-[25px] py-[1rem]">
          I am a Quick Learner and Passionate About Coding
        </p>
        <div className="flex ">
          <a
            className="p-3"
            href="https://api.whatsapp.com/send?phone=8015705516"
          >
            <FaWhatsapp />
          </a>
          <a className="p-3" href="https://www.instagram.com/_jeyarish_/">
            <FaInstagram />
          </a>
          <a className="p-3" href="https://github.com/jeyarish2003">
            <FaGithub />
          </a>
          <a
            className="p-3"
            href="https://www.linkedin.com/in/jeyarish-j-2b8a39194/"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <img className="h-screen w-100" src={pic} alt="" />
    </section>
  );
}

export default Home;

import React from "react";
import pic from "../../src/Asset/pic.png";

function Home() {
  return (
    <section className="w-screen h-[calc(100vh-4rem)] max-w-[90rem] mx-auto my-0 overflow-hidden relative">
      <div className="h-screen w-screen p-[4rem] text-[3rem] font-bold flex flex-col justify-center">
        <span className="text-[1.75rem] font-thin ">Hello,</span>
        <span className="">
          I'm <span className="text-yellow-500 text-[3rem]">Jeyarish</span>
        </span>
        <p className="font-medium text-[25px] py-[1rem]">
          I am a Quick Learner and Passionate About Coding
        </p>
      </div>
      <img className="" src={pic} alt="" />
    </section>
  );
}

export default Home;

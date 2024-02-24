import React from "react";
import Image from "next/image";
import chatBot from "@public/images/chatbot3.png";

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center px-4 bg-img relative bg-attachment">
      <div className="overlay"></div>
      <div className="container-custom lg:px-2 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="z-20">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl">
            Dream, Develop, <br />
            <span className="color-primary">Build</span>.
          </h1>
          <br />
          <p className="text-lg hidden md:block">
            Mastering software lifecycles: From idea to reality.
            <br />
            Expert planning, skillful builds, scalable solutions.
          </p>
          <p className="text-lg md:hidden">
            Mastering software lifecycles: From idea to reality. Expert
            planning, skillful builds, scalable solutions.
          </p>
          <a
            href={"#contact"}
            className="bg-primary inline-block relative pr-9 text-white px-6 py-3 mt-5 rounded-md font-semibold"
          >
            Let's Talk{" "}
            <i className="bx bx-right-arrow-alt bx-fade-right absolute top-4"></i>
          </a>
        </div>
        <div className="z-20">
          <Image
            src={chatBot}
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

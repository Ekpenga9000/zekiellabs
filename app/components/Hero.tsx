import React from "react";

const Hero = () => {
  return (
    <section className="h-80 flex justify-center items-center px-2 xl:px-4">
      <div className="container-custom lg:px-2">
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
          Mastering software lifecycles: From idea to reality. Expert planning,
          skillful builds, scalable solutions.
        </p>
        <a
          href={"#contact"}
          className="bg-primary inline-block relative pr-9 text-white px-6 py-3 mt-5 rounded-md font-semibold"
        >
          Let's Talk{" "}
          <i className="bx bx-right-arrow-alt bx-fade-right absolute top-4"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Services = () => {
  return (
    <section id="services" className="flex justify-center h-80 px-2 xl:px-4">
      <div className="container-custom">
        <h2 className="text-lg font-semibold mt-5 color-secondary">Services</h2>
        <p className="text-3xl mt-5">
          Elevate Your Online Presence with Custom Web Development, Software
          Solutions, and Expert Consultation.
        </p>
        <div>
          <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="bg-white p-5 rounded-md shadow-md">
              <i className="bx bx-code-alt text-4xl color-primary"></i>
              <h3 className="text-xl font-semibold mt-5">Web Development</h3>
              <p className="mt-3">
                Custom web development to meet your unique needs. We specialize
                in building responsive, SEO friendly web applications.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <i className="bx bx-mobile text-4xl color-primary"></i>
              <h3 className="text-xl font-semibold mt-5">Mobile Development</h3>
              <p className="mt-3">
                Mobile app development for iOS and Android. We specialize in
                React Native and Flutter.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <i className="bx bx-data text-4xl color-primary"></i>
              <h3 className="text-xl font-semibold mt-5">Software Solutions</h3>
              <p className="mt-3">
                Custom software solutions to meet your unique needs. We
                specialize in SaaS, PaaS, and custom software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

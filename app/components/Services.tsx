import React from "react";

const Services = () => {
  return (
    <section id="services" className="flex justify-center my-12 px-4">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mt-5 color-secondary">Services</h2>
        <p className="text-lg mt-5 text-gray-600">
          Elevate Your Online Presence with Custom Web Development, Software
          Solutions, and Expert Consultation.
        </p>
        <div>
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <div className="bg-white p-5 rounded-md shadow-md">
              <i className="bx bx-desktop text-4xl color-primary"></i>
              <h3 className="text-xl font-semibold mt-5">Website Development</h3>
              <p className="mt-3">
                Build a strong online presence with a custom website. We can
                help you create a professional, responsive, and SEO friendly pages that converts.  
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <i className="bx bx-data text-4xl color-primary"></i>
              <h3 className="text-xl font-semibold mt-5">Custom Solutions</h3>
              <p className="mt-3">
                We provide expert consultation and custom solutions to help you solve your unique business challenges.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <i className="bx bx-code-alt text-4xl color-primary"></i>
              <h3 className="text-xl font-semibold mt-5">Application Development</h3>
              <p className="mt-3">
                We build custom web applications that are scalable and secure. We can help you bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

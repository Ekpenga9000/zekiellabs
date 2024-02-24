import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <section id="pricing" className="flex justify-center mt-12 px-4">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mt-5 color-secondary">Pricing</h2>
        <p className="text-lg mt-5 text-gray-600">
          We offer competitive pricing for our services. We can help you with
          the following:
        </p>

        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <PriceCard
            icon="bx bx-desktop"
            title="Website Development"
            price="500"
            description="This is ideal for businesses or brands who want to make or maintain a strong online presence."
            features={[
              "Anywhere from a single landing page to multipage website.",
              "Blazingly fast and SEO friendly pages.",
              "Professional looking websites.",
            ]}
          />
          <PriceCard
            icon="bx bx-data"
            title="Custom Solutions"
            price="1000"
            description="This is ideal for businesses or brands who require consultation to solve unique business challenges."
            features={[
              "Application design architecture, consultation and wireframing.",
              "Database design.",
              "Agile/Scrum Consultation and services.",
            ]}
          />
          <PriceCard
            icon="bx bx-code-alt"
            title="Application Development"
            price="2000"
            description="This is ideal for businesses or brands who want to build custom web applications."
            features={[
              "Custom web applications and solutions.",
              "Build front-end, back-end, and full-stack applications. Scalable and secure.",
              "Bring your ideas to life.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

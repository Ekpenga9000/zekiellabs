import React from "react";
import TimelineCard from "./TimelineCard";

const Steps = () => {
  return (
    <section className="steps flex justify-center py-10 px-4">
      <div className="container-custom">
        <h2 className="text-lg font-semibold">How we work</h2>
        <p className="text-lg mt-5">
          What sets us apart is our commitment to our clients. We work with you
          every step of the way to ensure that you are satisfied with the final
          product.
        </p>

        <div className="relative mt-12">
          <div className="timeline">
            <TimelineCard
              title="Getting to know you"
              description="We would schedule a quick meeting with your team to understand you, your business and what you want."
              step="Step 1"
              icon="bx bx-pencil"
            />
            <TimelineCard
              title="Planning and Ideation"
              description="We would get onto planning the project while constantly keeping you in the loop."
              step="Step 2"
              icon="bx bx-notepad"
            />
            <TimelineCard
              title="Development: Building your idea."
              description="We would build your dream application with a continous itiration process that keeps you in the loop at every step in the process."
              step="Step 3"
              icon="bx bx-code-alt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

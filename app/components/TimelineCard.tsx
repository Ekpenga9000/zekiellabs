import React from "react";

interface TimelineCardProps {
    title: string;
    description: string;
    step: string;
    icon: string;
 }
const TimelineCard = (props: TimelineCardProps) => {
    const { title, description, step, icon } = props;
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <div className="flex items-center">
          <p className="text-xs bg-white inline-block color-primary py-1 px-3 rounded-md">
            {step}
          </p>
          <i className="bx bxs-circle absolute right-50"></i>
        </div>
        <h3 className="my-2 font-semibold text-sm md:text-md lg:text-lg ">
          <i className={icon}></i> {title}
        </h3>
        <p className="text-sm md:text-md lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;

import React from "react";

interface PriceCardProps {
  icon: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PriceCard = (props: PriceCardProps) => {
  const { icon, title, price, description, features } = props;
  return (
    <div className="bg-white p-5 rounded-md border border-solid border-gray-300 shadow-md">
      <h3 className="font-normal text-sm mt-5 flex items-center gap-2 color-secondary">
        {" "}
        <i className={icon}></i> {title}
      </h3>
      <p className="text-2xl font-semibold mt-4">Starting at ${price}</p>
      <p className="text-sm my-4 text-gray-600">{description}</p>
      <hr />
      <ul>
        {features?.map((feature, index) => (
          <li key={index} className="text-sm my-4 text-gray-600 flex items-start">
                <i className="bx bx-chevron-right inline-block mt-1"></i>
                <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="bg-primary text-white px-2 py-1 rounded-sm">
        Get started<i className="bx bx-chevron-right"></i>
      </a>
    </div>
  );
};

export default PriceCard;

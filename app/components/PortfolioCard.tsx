import React from "react";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  link: string;
}

const PortfolioCard = (props: PortfolioCardProps) => {
  const { image, title, description, link } = props;
  return (
    <div className="bg-white p-5 rounded-md shadow-md">
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={240}
        className="w-full h-60 object-cover rounded-md"
      />

      <h3 className="text-xl font-semibold mt-5">{title}</h3>
      <p className="my-2 text-sm text-gray-600">{description}</p>
      <a href={link} target="_blank" className="block">
        <i className="bx bx-link-external"></i>
      </a>
    </div>
  );
};

export default PortfolioCard;

import React from 'react'
import PortfolioCard from './PortfolioCard';
import imgSrc from "@public/images/careforall.png";

const Portfolio = () => {
  const img = {
    src: imgSrc,
    alt: "Care for all website"
  }
  return (
    <section className='flex justify-center mt-12 px-4'>
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mt-5 color-secondary">Portfolio</h2>
        <p className="text-lg mt-5 text-gray-600">
          Here are some of the projects we have worked on.
        </p>
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <PortfolioCard
            title="Care for all"
            description="This is a website that we built for a client. It is a fully responsive website that is optimized for SEO."
            image={img}
            link = "https://careforallinc.netlify.app/"
          />
          
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
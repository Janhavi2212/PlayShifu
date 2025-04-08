import React from 'react';

function AboutProduct() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
        About Junior Genius Pack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="mb-4 md:mb-0">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-1.webp&w=828&q=50"
            alt="Product Image 1"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-2.webp&w=828&q=50"
            alt="Product Image 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            What is Junior Genius Pack?
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Educational and digital play experience. Kids learn, play, and explore with this fun, interactive kit. Combines physical toys with digital games for a complete learning experience.
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Learn the Fundamentals
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Master numbers, letters, spatial skills, problem-solving, and more!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="mb-4 md:mb-0">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-3.webp&w=828&q=50"
            alt="Story Based Learning"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Story Based Learning
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Play 10 exciting story-driven games with over 250 levels using the interactive toys.
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-4.webp&w=828&q=50"
            alt="Age-Adaptive Games"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Age-Adaptive Games
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            The app automatically adjusts to your child's grade level. As they grow, the challenges grow with them, ensuring continuous learning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="mb-4 md:mb-0">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-5.webp&w=828&q=50"
            alt="Holistic STEM Learning Pack"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Holistic STEM Learning Pack
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            The Junior Genius pack is our most educational combination of interactive learning toys, covering math, language, and construction skills.
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-6.webp&w=828&q=50"
            alt="Skill Building"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Skill Building
          </h4>
          <p className="text-gray-600 text-sm md:text-base">
            Our educational learning toys feature advanced concepts like critical thinking, problem-solving, and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-purple-300 to-purple-600 p-4 sm:p-12 pt-24">
      <main className="flex-1 flex flex-col items-center sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-8 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-black mb-6">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center mb-4 sm:mb-6 leading-tight font-light">
            Generative Ai Blog is a place where you can find the latest news and updates about Ai, Machine Learning, and Data Science. I am a passionate writer who love to share knowledge with the world. 
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 leading-tight md:leading-relaxed font-light">
            Join me on this journey to explore the world of Ai and Machine Learning. I will be sharing the latest news, updates, and tutorials on Ai, Machine Learning, and Data Science.
          </p>
        </div>
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 hover:shadow-lg hover:shadow-white transition-shadow duration-300">
          <Image
            src="/blog.jpeg"
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default About;

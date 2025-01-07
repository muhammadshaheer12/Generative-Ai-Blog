'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface Post {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of Generative Ai',
    summary: 'Discover the latest trends in Generative Ai and how it is transforming industries.',
    image: '/future.jpeg',
  },
  {
    id: '2',
    title: 'Machine Learning with Python',
    summary: 'Learn how to build machine learning models using Python and scikit-learn.',
    image: '/img3.jpeg',
  },
  {
    id: '3',
    title: 'How to use Langchain framework',
    summary: 'A step-by-step guide to getting started with the Langchain framework.',
    image: '/first.jpeg',
  },
  {
    id: '4',
    title: 'Building Applications with Ai',
    summary: 'Explore the different ways to integrate Ai into your applications.',
    image: '/A.jpeg',
  },
  {
    id: '5',
    title: 'Data Visualization with D3.js',
    summary: 'Create stunning data visualizations with the D3.js library.',
    image: '/img1.jpeg',
  },
  {
    id: '6',
    title: 'Data science for beginners',
    summary: 'An introduction to data science and its applications in the real world.',
    image: '/responsive.jpeg',
  },
  {
    id: '7',
    title: 'Tensorflow- A beginners guide',
    summary: 'Learn the basics of Tensorflow and how to build deep learning models.',
    image: '/img6.jpeg',
  },
  {
    id: '8',
    title: 'OpenAi GPT-3 Explained',
    summary: 'Understand the capabilities of OpenAi GPT-3 and how it is revolutionizing Ai.',
    image: '/pro.jpeg',
  },
  {
    id: '9',
    title: 'LLama model for NLP',
    summary: 'A detailed guide on how to use the LLama model for natural language processing.',
    image: '/img.jpeg',
  },
];
const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-blue-100 to-purple-300 p-4 sm:p-6 md:p-12 pt-24 md:pt-32">
  <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-black mb-6">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {posts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="bg-purple-100 shadow-lg rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mx-auto w-full flex flex-col"
          >
            <Link href={`/Blog/${post.id}`} className="relative w-full h-48 sm:h-56 lg:h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </Link>
            <div className="flex flex-col justify-between p-4 sm:p-6 md:p-8 h-full">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 hover:text-yellow-600">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 line-clamp-3">
                {post.summary}
              </p>
              <Link href={`/Blog/${post.id}`} className="text-purple-600 font-medium hover:underline transition-all duration-300">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            onClick={loadMorePosts}
            className="bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-white transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
export default BlogPage;

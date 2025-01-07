'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const posts = [
  {
    id: "1",
    title: "The Future of Generative Ai",
    summary:
      "Discover the latest trends in generative Ai and how it is transforming industries.",
    content: `Generative Ai is shaping the future of creativity and innovation. By leveraging models like OpenAi's GPT and DALL·E, industries are unlocking new possibilities in art, design, and automation. Imagine AI creating entire movie scripts, designing unique fashion lines, or generating personalized content for millions of users. Beyond creativity, generative Ai is solving real-world problems, from drug discovery in healthcare to generating realistic training data for autonomous vehicles. As we push the boundaries, ethical considerations like copyright and bias remain critical challenges that must be addressed.`,
    image: "/future.jpeg",
  },
  {
    id: "2",
    title: "Machine Learning with Python",
    summary:
      "Learn how to build machine learning models using Python and scikit-learn.",
    content: `Python has become the foundation of machine learning due to its simplicity and versatility. Libraries like scikit-learn provide robust tools for implementing algorithms, from linear regression to support vector machines. For beginners, building a predictive model in Python often starts with data preprocessing using Pandas, visualizing insights with Matplotlib, and implementing machine learning pipelines with scikit-learn. As you progress, you can dive into deep learning with TensorFlow and PyTorch, unlocking opportunities in computer vision, natural language processing, and beyond.`,
    image: "/img3.jpeg",
  },
  {
    id: "3",
    title: "How to Use LangChain Framework",
    summary:
      "A step-by-step guide to getting started with the LangChain framework.",
    content: `LangChain is revolutionizing the way we interact with language models. At its core, LangChain helps developers build intelligent applications that integrate large language models with external data sources and custom workflows. For example, you can use LangChain to create a chatbot capable of answering specific domain-related questions or automate customer support. Key components include chains for modular workflows, tools for retrieval-augmented generation (RAG), and memory for tracking conversational context. With LangChain, Ai applications are not just reactive but contextually aware and dynamic.`,
    image: "/first.jpeg",
  },
  {
    id: "4",
    title: "Building Applications with Ai",
    summary:
      "Explore the different ways to integrate Ai into your applications.",
    content: `Integrating Ai into applications has never been more accessible. From adding recommendation systems to personalizing user experiences, Ai can transform the way users interact with software. Use computer vision APIs to detect objects, speech-to-text libraries for voice input, or natural language processing for chatbots. For web applications, integrating Ai tools like OpenAI's APi or Google's Ai offerings can provide real-time insights, automate tasks, or enhance accessibility. As Ai capabilities grow, applications will become smarter, more intuitive, and increasingly impactful.`,
    image: "/A.jpeg",
  },
  {
    id: "5",
    title: "Data Visualization with D3.js",
    summary: "Create stunning data visualizations with the D3.js library.",
    content: `In the world of data visualization, D3.js stands as a powerful, flexible library for creating interactive and dynamic charts. Unlike traditional tools, D3.js allows you to bind data directly to DOM elements, enabling real-time updates and custom animations. Whether you're visualizing stock market trends or mapping election results, D3.js helps turn raw data into engaging stories. While it comes with a learning curve, mastering D3.js unlocks the ability to craft truly unique and impactful visualizations tailored to your audience.`,
    image: "/img1.jpeg",
  },
  {
    id: "6",
    title: "Data Science for Beginners",
    summary:
      "An introduction to data science and its applications in the real world.",
    content: `Data science is more than just analyzing spreadsheets—it’s about uncovering hidden patterns and making informed decisions. For beginners, the journey starts with understanding data collection, cleaning, and visualization. Real-world applications include predicting customer behavior, optimizing supply chains, and even forecasting diseases. Tools like Python, R, and SQL are staples, while cloud platforms like AWS and Google Cloud make scaling easier. By mastering data science fundamentals, you’ll gain insights that can transform industries and drive impactful solutions.`,
    image: "/responsive.jpeg",
  },
  {
    id: "7",
    title: "TensorFlow: A Beginner’s Guide",
    summary:
      "Learn the basics of TensorFlow and how to build deep learning models.",
    content: `TensorFlow is the backbone of modern deep learning. Designed by Google, it simplifies the creation of neural networks, enabling everything from image recognition to voice synthesis. For beginners, TensorFlow provides Keras, a high-level API that makes building models intuitive. Whether you’re building a simple feedforward network or experimenting with convolutional and recurrent layers, TensorFlow’s flexibility allows for easy scaling from experimentation to deployment. Dive into tutorials, experiment with pre-trained models, and unlock the potential of Ai-driven solutions.`,
    image: "/img6.jpeg",
  },
  {
    id: "8",
    title: "OpenAi GPT-3 Explained",
    summary:
      "Understand the capabilities of OpenAi GPT-3 and how it is revolutionizing Ai.",
    content: `OpenAi's GPT-3 is a groundbreaking language model capable of generating human-like text. With 175 billion parameters, GPT-3 can write essays, draft code, and even compose poetry. Businesses are using it to power chatbots, automate customer interactions, and generate creative content at scale. However, GPT-3’s versatility also raises ethical questions, such as the potential misuse of Ai-generated content. As we embrace these advancements, understanding GPT-3’s capabilities and limitations is critical for responsible innovation.`,
    image: "/pro.jpeg",
  },
  {
    id: "9",
    title: "LLaMA Model for NLP",
    summary:
      "A detailed guide on how to use the LLaMA model for natural language processing.",
    content: `LLaMA (Large Language Model Meta Ai) is Meta’s innovative approach to NLP. Built for efficiency, LLaMA provides developers with robust tools for text summarization, question answering, and more. Unlike larger models, LLaMA focuses on delivering high performance with fewer computational resources. This makes it ideal for tasks requiring quick, accurate processing in resource-constrained environments. Whether you're building intelligent search engines or conversational agents, LLaMA is paving the way for the next generation of NLP applications.`,
    image: "/img.jpeg",
  },
];

const PostPage = () => {
    const { id } = useParams(); 
    const post = posts.find((p) => p.id === id); 

    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');
    useEffect(() => {
        const storedComments = localStorage.getItem(`comments-${id}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [id]);

    const addComment = () => {
        if (newComment.trim()) {
            const updatedComments = [...comments, newComment.trim()];
            setComments(updatedComments);
            setNewComment('');
            localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
        }
    };

    if (!post) {
        return <div className="text-center py-10 text-lg text-purple-500">Post not found</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 via-purple-100 to-purple-400 p-6 sm:p-12 pt-16 md:pt-24">
            <div className="container mx-auto mt-8 md:mt-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{post.title}</h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">{post.content}</p>

                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mt-8 sm:mt-10">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

                    <div className="mb-6">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="border border-gray-300 p-3 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            onClick={addComment}
                            className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
                        >
                            Add Comment
                        </button>
                    </div>
                    <div>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="border-t border-gray-200 pt-2">
                                    <p className="text-gray-700">{comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;

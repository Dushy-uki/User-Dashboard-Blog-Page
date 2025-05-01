import { useState } from 'react';
import Header from '../Components/Navigation';
import Footer from '../Components/Footer';


const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. React has a rich ecosystem and is maintained by Facebook and a community of developers.',
    excerpt: 'Learn the basics of React and how to create your first component.',
    author: 'Jane Doe',
    date: 'May 1, 2025',
    category: 'React'
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    content: 'Tailwind CSS is a utility-first CSS framework that allows you to build designs directly in your markup. Unlike other CSS frameworks that give you prebuilt components, Tailwind provides low-level utility classes that let you build completely custom designs.',
    excerpt: 'Discover how to use Tailwind CSS to style your applications efficiently.',
    author: 'John Smith',
    date: 'May 1, 2025',
    category: 'CSS'
  },
  {
    id: 3,
    title: 'State Management in React',
    content: 'State management is crucial for React applications. There are several options available including Context API, Redux, Zustand, and MobX. Each has its own strengths and is suitable for different types of applications.',
    excerpt: 'Explore different state management solutions for React applications.',
    author: 'Alex Johnson',
    date: 'May 1, 2025',
    category: 'React'
  }
];

export default function UserDashboard() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Latest Posts</h2>
        
        <div className="space-y-6">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
import { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import BlogList from '../Components/BlogList';
import AddBlogForm from '../Components/AddBlogForm';
import EditBlogForm from '../Components/EditBlogForm';

const Admin = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Getting Started with React', content: 'React intro content...', author: 'Jane Doe', date: '2023-05-15' },
    { id: 2, title: 'Mastering Tailwind CSS', content: 'Tailwind CSS content...', author: 'John Smith', date: '2023-06-02' },
    { id: 3, title: 'State Management', content: 'State management content...', author: 'Alex Johnson', date: '2023-06-10' }
  ]);

  const navigate = useNavigate();

  const addBlog = (newBlog) => {
    const blogWithId = { 
      ...newBlog, 
      id: blogs.length + 1, 
      date: new Date().toISOString().split('T')[0] 
    };
    setBlogs([...blogs, blogWithId]);
    navigate('/admin/blogs');
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
    navigate('/admin/blogs');
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <nav>
            <Link to="/admin/blogs/add" className="px-4 py-2 text-blue-600 hover:text-blue-800">
              Add Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route 
            path="blogs" 
            element={<BlogList blogs={blogs} onDelete={deleteBlog} />} 
          />
          <Route 
            path="blogs/add" 
            element={<AddBlogForm onAdd={addBlog} />} 
          />
          <Route 
            path="blogs/edit/:id" 
            element={<EditBlogForm blogs={blogs} onUpdate={updateBlog} />} 
          />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;
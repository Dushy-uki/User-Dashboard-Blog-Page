import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBlogForm = ({ blogs, onUpdate }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  useEffect(() => {
    const blog = blogs.find(b => b.id === parseInt(id));
    if (blog) {
      setFormData({
        title: blog.title,
        content: blog.content,
        author: blog.author
      });
    }
  }, [id, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      id: parseInt(id),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            rows="6"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;
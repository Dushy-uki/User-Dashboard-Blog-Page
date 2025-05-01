import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Blog</h1>
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <span>User Menu</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
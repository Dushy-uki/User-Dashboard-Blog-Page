import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const role = e.target.value;
    if (role === "user") navigate("/user-dashboard");
    if (role === "admin") navigate("/admin-dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="font-bold text-3xl text-center mb-6">Login Here</h1>
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-col space-y-1">
            <label className="text-gray-700">Role</label>
            <select 
              onChange={handleRoleChange}
              className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button 
            type="button"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
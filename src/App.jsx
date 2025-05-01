import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import AdminDashboard from './Components/AddBlogForm';

function App() {
  return (
    <Router> 
      <Routes>
      <Route path="/" element={<User-Dashboard-Blog-Page />} />
        <Route path="/" element={<Login />} />
        <Route path="/user-dashboard" element={<User />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
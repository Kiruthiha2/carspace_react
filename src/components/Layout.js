import { Outlet, useNavigate } from "react-router-dom";
import { Home, Users, Car, Book, FileText, Edit3,FormInput } from "lucide-react";
import "./Dashboard.css"; 

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container flex h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="sidebar w-64 bg-white p-4 shadow-md">
        <h1 className="logo text-3xl font-bold text-red-500">Carspace</h1>
        <nav className="nav-links mt-4 space-y-4">
          <button 
            className="nav-item flex items-center space-x-2 p-2 bg-blue-500 text-white rounded-md w-full"
            onClick={() => navigate("/")}
          >
            <Home size={20} /> <span>Home</span>
          </button>
          <button 
            className="nav-item flex items-center space-x-2 p-2 w-full"
            onClick={() => navigate("/users")}
          >
            <Users size={20} /> <span>Users</span>
          </button>
          <button 
  className="nav-item flex items-center space-x-2 p-2 w-full"
  onClick={() => navigate("/responses")}
>
            <FormInput size={20} /> <span>Responses</span>
          </button>
          <button className="nav-item flex items-center space-x-2 p-2 w-full">
            <Car size={20} /> <span>Manage Listings</span>
          </button>
          <button className="nav-item flex items-center space-x-2 p-2 w-full">
            <Book size={20} /> <span>Bookings</span>
          </button>
          <button className="nav-item flex items-center space-x-2 p-2 w-full">
            <FileText size={20} /> <span>FAQs</span>
          </button>
          <button className="nav-item flex items-center space-x-2 p-2 w-full">
            <Edit3 size={20} /> <span>Blogs</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content flex-1 p-6 overflow-auto">
        <Outlet /> {/* This will load the Dashboard or UsersPage dynamically */}
      </div>
    </div>
  );
};

export default Layout;

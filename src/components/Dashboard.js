import { useState } from "react";
import Card from "./Card";
import Chart from "./Chart"; 
import "./Dashboard.css"; 

const Dashboard = () => {
  const [user] = useState({ image: "https://via.placeholder.com/40" });

  return (
    <div className="dashboard-content">
      {/* Header Section */}
      <div className="header-section flex justify-between items-center">
        <h2 className="dashboard-title text-4xl font-semibold">Dashboard</h2>
        <div className="profile-section absolute top-0 right-0 p-4">
          <img 
            src={user.image} 
            alt="Profile" 
            className="w-12 h-12 rounded-full border border-gray-300 shadow-md" 
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-cards grid grid-cols-3 gap-4 mt-6">
        <Card>
          <h3 className="card-title text-lg font-semibold">Total Cars</h3>
          <p className="card-value text-3xl font-bold">4,098</p>
        </Card>
        <Card>
          <h3 className="card-title text-lg font-semibold">Total Users</h3>
          <p className="card-value text-3xl font-bold">1,098</p>
        </Card>
        <Card>
          <h3 className="card-title text-lg font-semibold">Total Bookings</h3>
          <p className="card-value text-3xl font-bold">42,098</p>
          <p className="card-growth text-sm text-green-500">+2% from last month</p>
        </Card>
      </div>

      {/* Charts & Recent Bookings */}
      <div className="charts-section mt-6 grid grid-cols-2 gap-4">
        {/* Chart Overview */}
        <Card className="chart-card p-4">
          <h3 className="chart-title text-lg font-semibold">Overview (Responses)</h3>
          <Chart /> 
        </Card>

        {/* Recent Bookings */}
        <Card className="recent-bookings p-4">
          <h3 className="recent-title text-lg font-semibold">Recent Bookings</h3>
          <div className="recent-bookings-list mt-4">
            <div className="booking-item flex items-center space-x-4">
              <img src="https://via.placeholder.com/40" className="user-avatar w-10 h-10 rounded-full" alt="User" />
              <div>
                <p className="user-name font-semibold">Amelia Turner</p>
                <p className="booking-time text-sm text-gray-500">10h ago</p>
              </div>
            </div>
            <div className="booking-item flex items-center space-x-4 mt-4">
              <img src="https://via.placeholder.com/40" className="user-avatar w-10 h-10 rounded-full" alt="User" />
              <div>
                <p className="user-name font-semibold">Amelia Turner</p>
                <p className="booking-time text-sm text-gray-500">10h ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

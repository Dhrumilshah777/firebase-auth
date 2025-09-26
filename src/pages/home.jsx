import React from "react";
import Logout from "../components/logout";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("User"));

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">No user found. Please login again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-900 rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6">
        {/* Profile Image with Ring */}
        <div className="flex justify-center">
          <div className="relative w-28 h-28">
            <img
              src={user.picture || "https://via.placeholder.com/150"}
              alt="User"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
            <span className="absolute inset-0 rounded-full ring-4 ring-indigo-400 animate-pulse" />
          </div>
        </div>

        {/* Welcome Text */}
        <div>
          <h2 className="text-2xl font-bold text-white">Welcome, {user.name}</h2>
          <p className="text-sm text-gray-300 mt-1">{user.email}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Logout Button */}
        <div>
          <Logout />
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 pt-4">
          Logged in via Google OAuth
        </p>
      </div>
    </div>
  );
};

export default Home;

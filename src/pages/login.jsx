import React from "react";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 md:p-10 text-center space-y-6">
        {/* Branding */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">YourApp</h1>
          <p className="text-sm text-gray-500 mt-2">Sign in to continue to your dashboard</p>
        </div>

        {/* Google Login */}
        <div className="mt-6">
          <GoogleLogin />
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-400">or continue with</span>
          </div>
        </div>

        {/* Email/password login (optional) */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-blue-500 hover:underline">Terms</a> and{" "}
          <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;

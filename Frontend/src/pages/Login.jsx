/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen bg-bgLight flex flex-col md:flex-row">

      {/* LEFT Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden md:flex w-1/2 items-center justify-center"
      >
        <img
          src="/illustration.png"
          alt="Library Illustration"
          className="max-w-md w-full drop-shadow-lg"
        />
      </motion.div>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-full md:w-1/2 items-center justify-center px-8 md:px-20"
      >
        <div className="w-full max-w-sm">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-primary mb-2 text-center">
            Welcome Back
          </h1>

          <p className="text-secondary text-base mb-8 text-center">
            Login to manage your private library.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-textDark mb-1 font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 bg-[#F4F6F8] border border-[#D5D9DF] rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-textDark mb-1 font-medium text-sm">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 bg-[#F4F6F8] border border-[#D5D9DF] rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <button className="text-primary text-sm font-medium hover:underline transition">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#0747A6] text-white py-3 rounded-lg font-semibold 
            shadow-md hover:bg-[#0747A6] transition text-base"
          >
            Login
          </motion.button>

          {/* Register Link */}
          <p className="text-secondary mt-6 text-sm text-center font-medium">
            Don’t have an account?
            <span onClick={() => window.location.href = "/register"} className="text-primary ml-1 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

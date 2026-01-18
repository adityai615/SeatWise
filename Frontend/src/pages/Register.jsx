/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Register() {
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
          <h1 className="text-3xl font-bold text-primary mb-1 text-center">
            Create Account
          </h1>

          <p className="text-secondary mb-8 text-base text-center">
            Register to manage your private library.
          </p>

          {/* Full Name */}
          <Input 
            label="Full Name" 
            type="text" 
            placeholder="Enter your full name" 
          />

          {/* Email */}
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email" 
          />

          {/* Password */}
          <Input 
            label="Password" 
            type="password" 
            placeholder="Create a password" 
          />

          {/* Confirm Password */}
          <Input 
            label="Confirm Password" 
            type="password" 
            placeholder="Re-enter password" 
          />

          {/* Register Button */}
          <Button>Create Account</Button>

          <p className="text-secondary mt-6 text-sm text-center font-medium">
            Already have an account? 
            <span onClick={() => window.location.href = "/"} className="text-primary ml-1 cursor-pointer hover:underline">
              Login
            </span>
          </p>

        </div>
      </motion.div>
    </div>
  );
}

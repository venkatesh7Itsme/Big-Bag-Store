import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function LoginModal({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          <h2 className="text-xl font-semibold text-center text-teal-500 mb-4">LOG IN</h2>
          <div>
            <label className="block text-gray-600 mb-1">Enter Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-600">Remember me</label>
          </div>
          <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">
            LOG IN
          </button>
          <p className="text-center mt-3 text-teal-500 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>
      </div>
    )
  );
}

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aarambh 👶</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your AI-powered parenting companion. Get daily tips, toy ideas, and more.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Join the Waitlist on WhatsApp
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <div className="flex items-center justify-center flex-col py-24 px-4 text-center">
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

      {/* Why Aarambh Section */}
      <div className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Aarambh?</h2>
        <ul className="space-y-4 max-w-xl mx-auto text-left text-lg">
          <li>✨ Personalized parenting tips in Hindi</li>
          <li>🧸 Curated toy and book recommendations</li>
          <li>📩 Delivered via simple WhatsApp nudges</li>
        </ul>
      </div>
    </div>
  );
}

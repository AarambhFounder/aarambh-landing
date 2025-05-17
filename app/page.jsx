import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aarambh 👶</h1>
        <p className="max-w-xl mb-6">
          Your AI-powered parenting companion. Get daily nudges, activity ideas,
          and curated toy/book recommendations — all personalized for your toddler.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Join the Waitlist
        </a>
        <p className="text-sm text-gray-500 mt-2">No spam, only love. ❤️</p>
      </section>
    </div>
  );
}


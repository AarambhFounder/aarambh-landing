import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <img
          src="https://storyset.com/illustration/mother-and-child/pana" // Optional: Replace with another
          alt="Parenting illustration"
          className="w-full max-w-sm mx-auto mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Aarambh 👶
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Your AI-powered parenting companion. Get daily tips, toy ideas, and more.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
        >
          Join the Waitlist on WhatsApp
        </a>
      </section>

      {/* Why Aarambh */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Aarambh?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <img
            src="https://storyset.com/illustration/parenting-pana" // Optional: Pick matching theme
            alt="Why Aarambh Illustration"
            className="w-full max-w-md"
          />
          <ul className="space-y-4 text-left text-base sm:text-lg">
            <li>✨ Personalized parenting tips in Hindi</li>
            <li>🧸 Curated toy and book recommendations</li>
            <li>📩 Delivered via simple WhatsApp nudges</li>
          </ul>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">What You Get</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto text-left">
          <div>
            <img
              src="https://storyset.com/illustration/tips-list/pana"
              alt="Daily Tips"
              className="w-full max-w-xs mb-4 mx-auto"
            />
            <h3 className="font-bold text-lg mb-2">Daily Parenting Tips</h3>
            <p className="text-sm sm:text-base">
              Evidence-based, practical guidance for each day.
            </p>
          </div>
          <div>
            <img
              src="https://storyset.com/illustration/shopping-app-pana"
              alt="Smart Toy Curation"
              className="w-full max-w-xs mb-4 mx-auto"
            />
            <h3 className="font-bold text-lg mb-2">Smart Toy Curation</h3>
            <p className="text-sm sm:text-base">
              Toys that grow with your baby’s brain — not clutter.
            </p>
          </div>
          <div>
            <img
              src="https://storyset.com/illustration/video-game-pana"
              alt="Development Activities"
              className="w-full max-w-xs mb-4 mx-auto"
            />
            <h3 className="font-bold text-lg mb-2">Development Activities</h3>
            <p className="text-sm sm:text-base">
              Screen-free, age-appropriate games for every milestone.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">How It Works</h2>
        <ol className="list-decimal space-y-4 max-w-xl m

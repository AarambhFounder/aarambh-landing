// Aarambh Landing Page – Fully Updated

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="text-center py-16 px-6 sm:py-20 md:py-24">
        <img
          src="https://raw.githubusercontent.com/AarambhFounder/aarambh_website/main/public/mother-child.png"
          alt="Mother holding child illustration"
          loading="lazy"
          className="w-full max-w-sm mx-auto mb-8 rounded-xl shadow-md"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Welcome to Aarambh 👶
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          Your AI-powered parenting companion. Get daily nudges, activity ideas,
          and curated toy/book recommendations — all personalized for your toddler.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition font-medium"
        >
          Join the Waitlist on WhatsApp
        </a>
        <p className="text-sm text-gray-500 mt-3">No spam, only love. ❤️</p>
      </section>

      {/* Why Aarambh Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Why Aarambh?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <ul className="space-y-4 text-left text-lg text-gray-700">
            <li>✨ Personalized parenting tips in Hindi</li>
            <li>🧸 Curated toy and book recommendations</li>
            <li>📩 Delivered via simple WhatsApp nudges</li>
          </ul>
          <img
            src="https://raw.githubusercontent.com/AarambhFounder/aarambh_website/main/public/parenting.png"
            alt="Parenting concept illustration"
            loading="lazy"
            className="w-full max-w-sm mx-auto rounded-xl shadow-sm"
          />
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">What You Get</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Daily Parenting Tips</h3>
            <p>Evidence-based, practical guidance for each day.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Smart Toy Curation</h3>
            <p>Toys that grow with your baby’s brain — not clutter.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Development Activities</h3>
            <p>Screen-free, age-appropriate games for every milestone.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 text-center py-8 px-4 text-sm text-gray-700">
        <p>© 2025 Aarambh — Built with care for first-time parents.</p>
        <p>Made in 🇮🇳 with 💙</p>
      </footer>
    </main>
  );
}

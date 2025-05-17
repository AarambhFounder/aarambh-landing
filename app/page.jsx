import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-24 px-4">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to Aarambh 👶
        </h1>
        <p className="text-lg mb-6">
          Your AI-powered parenting companion. Get daily tips, toy ideas, and more.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition font-semibold"
        >
          Join the Waitlist on WhatsApp
        </a>
      </div>

      {/* Why Aarambh */}
      <div className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Aarambh?</h2>
        <ul className="space-y-4 max-w-xl mx-auto text-left text-lg">
          <li>✨ Personalized parenting tips in Hindi</li>
          <li>🧸 Curated toy and book recommendations</li>
          <li>📩 Delivered via simple WhatsApp nudges</li>
        </ul>
      </div>

      {/* What You Get */}
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-12">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
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
      </div>

      {/* How It Works */}
      <div className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <ol className="list-decimal space-y-4 max-w-xl mx-auto text-left text-lg pl-5">
          <li>Fill the waitlist form with your baby’s age and city</li>
          <li>We personalize a daily parenting journey for you</li>
          <li>Receive nudges directly on WhatsApp every day</li>
        </ol>
      </div>
    </div>
  );
}

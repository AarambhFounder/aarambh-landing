import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
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

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Aarambh?</h2>
        <ul className="space-y-4 max-w-xl mx-auto text-left">
          <li>✨ Personalized parenting tips in Hindi</li>
          <li>🧸 Curated toy and book recommendations</li>
          <li>📥 Delivered via simple WhatsApp nudges</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">What You Get</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Daily Parenting Tips</h3>
            <p className="text-sm">Evidence-based, practical guidance for each day.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Smart Toy Curation</h3>
            <p className="text-sm">Toys that grow with your baby’s brain — not clutter.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Development Activities</h3>
            <p className="text-sm">Screen-free, age-appropriate games for every milestone.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          <p>1️⃣ Fill the waitlist form with your baby’s age and city</p>
          <p>2️⃣ We personalize a daily parenting journey for you</p>
          <p>3️⃣ Receive nudges directly on WhatsApp every day</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="max-w-xl mx-auto">
          Aarambh is built by parents, educators, and AI experts who believe early
          childhood deserves mindful, tech-powered support — without screens or stress.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to give your baby a mindful start?</h2>
        <a
          href="https://tally.so/r/mRlPV9"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow text-lg transition"
        >
          Join the Waitlist
        </a>
        <p className="text-sm text-gray-500 mt-2">No spam. Only love. 💕</p>
      </section>
    </main>
  );
}

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to Aarambh <span role="img" aria-label="baby">👶</span>
        </h1>
        <p className="max-w-xl mb-6 text-lg text-gray-700">
          Your AI-powered parenting companion. Get daily nudges, activity ideas, and curated toy/book recommendations — all personalized for your toddler.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition font-semibold"
        >
          Join the Waitlist on WhatsApp
        </a>
        <p className="text-sm text-gray-500 mt-2">No spam, only love. <span role="img" aria-label="heart">❤️</span></p>
      </section>

      <hr className="border-t border-gray-200 my-12" />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Why Aarambh?</h2>
        <ul className="space-y-4 max-w-xl mx-auto text-left">
          <li><span role="img" aria-label="sparkles">✨</span> Personalized parenting tips in Hindi</li>
          <li><span role="img" aria-label="teddy">🧸</span> Curated toy and book recommendations</li>
          <li><span role="img" aria-label="inbox">📩</span> Delivered via simple WhatsApp nudges</li>
        </ul>
      </section>

      <hr className="border-t border-gray-200 my-12" />

      {/* Features Section */}
      <section className="py-16 px-4 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">What You Get</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
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

      <hr className="border-t border-gray-200 my-12" />

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">How It Works</h2>
        <ol className="list-decimal space-y-4 max-w-xl mx-auto text-left pl-5">
          <li>Fill the waitlist form with your baby’s age and city</li>
          <li>We personalize a daily parenting journey for you</li>
          <li>Receive nudges directly on WhatsApp every day</li>
        </ol>
      </section>

      <hr className="border-t border-gray-200 my-12" />

      {/* About Us Section */}
      <section className="py-16 px-4 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Aarambh is built by parents, educators, and AI experts who believe early childhood deserves mindful,
          tech-powered support — without screens or stress.
        </p>
      </section>
    </div>
  );
}

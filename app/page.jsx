import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:py-20 md:py-24">
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
      <section className="bg-blue-50 py-14 sm:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Aarambh?</h2>
        <ul className="space-y-4 max-w-xl mx-auto text-left text-base sm:text-lg">
          <li>✨ Personalized parenting tips in Hindi</li>
          <li>🧸 Curated toy and book recommendations</li>
          <li>📩 Delivered via simple WhatsApp nudges</li>
        </ul>
      </section>

      {/* What You Get */}
      <section className="py-14 sm:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">What You Get</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Daily Parenting Tips</h3>
            <p className="text-sm sm:text-base">
              Evidence-based, practical guidance for each day.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Smart Toy Curation</h3>
            <p className="text-sm sm:text-base">
              Toys that grow with your baby’s brain — not clutter.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Development Activities</h3>
            <p className="text-sm sm:text-base">
              Screen-free, age-appropriate games for every milestone.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 py-14 sm:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">How It Works</h2>
        <ol className="list-decimal space-y-4 max-w-xl mx-auto text-left text-base sm:text-lg pl-6 sm:pl-5">
          <li>Fill the waitlist form with your baby’s age and city</li>
          <li>We personalize a daily parenting journey for you</li>
          <li>Receive nudges directly on WhatsApp every day</li>
        </ol>
      </section>

      {/* About Us */}
      <section className="py-14 sm:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700">
          Aarambh is built by parents, educators, and AI experts who believe early childhood deserves mindful,
          tech-powered support — without screens or stress. Our mission is to empower first-time parents in India with
          curated, practical tools that foster joyful development.
        </p>
      </section>
    </main>
  );
}

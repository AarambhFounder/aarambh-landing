import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50 transition-all duration-700 ease-in-out">
        <img
          src="https://storyset.com/illustration/mother-and-child/pana"
          alt="Mother holding child illustration"
          className="w-3/4 sm:w-1/2 md:w-1/3 mx-auto mb-6 animate-fade-in"
          loading="lazy"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Aarambh 👶
        </h1>
        <p className="max-w-md sm:max-w-xl mx-auto text-base sm:text-lg text-gray-700 mb-6">
          Your AI-powered parenting companion. Get daily tips, toy ideas, and more.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105"
        >
          Join the Waitlist on WhatsApp
        </a>
        <p className="text-sm text-gray-500 mt-2">No spam, only love. ❤️</p>
      </section>

      {/* Why Aarambh */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Why Aarambh?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto transition-opacity duration-700">
          <img
            src="https://storyset.com/illustration/parenting/pana"
            alt="Parenting concept illustration"
            className="w-full sm:w-2/3 md:w-1/2 max-w-sm animate-fade-in"
            loading="lazy"
          />
          <ul className="space-y-4 text-left text-base sm:text-lg text-gray-700">
            <li>✨ Personalized parenting tips in Hindi</li>
            <li>🧸 Curated toy and book recommendations</li>
            <li>📩 Delivered via simple WhatsApp nudges</li>
          </ul>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800">
          What You Get
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-left text-gray-700">
          <div className="transition-transform duration-300 hover:scale-105">
            <h3 className="font-bold text-lg mb-2">Daily Parenting Tips</h3>
            <p>Evidence-based, practical guidance for each day.</p>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <h3 className="font-bold text-lg mb-2">Smart Toy Curation</h3>
            <p>Toys that grow with your baby’s brain — not clutter.</p>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <h3 className="font-bold text-lg mb-2">Development Activities</h3>
            <p>Screen-free, age-appropriate games for every milestone.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 text-center text-gray-600 text-sm py-6 px-4">
        <p>
          © {new Date().getFullYear()} Aarambh — Built with care for first-time parents.
        </p>
        <p className="mt-1">Made in 🇮🇳 with 💙</p>
      </footer>
    </main>
  );
}

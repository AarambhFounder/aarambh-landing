import React from "react";

export default function AarambhLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Aarambh?</h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li>✨ Personalized parenting tips in Hindi</li>
          <li>🧸 Curated toy and book recommendations</li>
          <li>📱 Delivered via simple WhatsApp nudges</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">What You Get</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">🎯 Daily developmental goals</div>
          <div className="bg-white p-4 rounded shadow">📖 Weekly content + stories</div>
          <div className="bg-white p-4 rounded shadow">📊 Progress overview</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <ol className="space-y-4 max-w-xl mx-auto text-left list-decimal list-inside">
          <li>Join the waitlist by filling your details</li>
          <li>Receive personalized nudges on WhatsApp</li>
          <li>Start engaging daily with your toddler</li>
        </ol>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Start your parenting journey with Aarambh</h2>
        <a
          href="https://tally.so/r/mRlPV9"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Join the Waitlist Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; 2025 Aarambh. Made with ❤️ for parents.
      </footer>
    </div>
  );
}

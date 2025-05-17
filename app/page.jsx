export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <img
          src="https://storyset.com/illustration/mother-and-child/pana"
          alt="Mother holding child illustration"
          className="w-full max-w-sm mx-auto mb-6"
          loading="lazy"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Aarambh 👶
        </h1>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Your AI-powered parenting companion. Get daily tips, toy ideas, and more.
        </p>
        <a
          href="https://tally.so/r/mRlPV9"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition font-semibold"
        >
          Join the Waitlist on WhatsApp
        </a>
        <p className="text-sm text-gray-500 mt-2">No spam, only love. ❤️</p>
      </section>

      {/* Why Aarambh */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Aarambh?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <ul className="space-y-4 text-left text-base sm:text-lg">
            <li>✨ Personalized parenting tips in Hindi</li>
            <li>🧸 Curated toy and book recommendations</li>
            <li>📩 Delivered via simple WhatsApp nudges</li>
          </ul>
          <img
            src="https://storyset.com/illustration/parenting/pana"
            alt="Parenting concept illustration"
            className="w-full max-w-sm"
            loading="lazy"
          />
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-blue-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What You Get</h2>
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

      {/* Footer */}
      <footer className="bg-white text-center text-sm py-6 text-gray-500">
        <p>© 2025 Aarambh — Built with care for first-time parents.</p>
        <p>Made in 🇮🇳 with 💙</p>
      </footer>
    </main>
  );
}

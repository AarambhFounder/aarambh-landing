export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Aarambh 👶</h1>
        <p className="text-lg mb-6 text-gray-700">
          Your AI-powered parenting companion. Get daily nudges, activity ideas,
          and curated toy/book recommendations — all personalized for your toddler.
        </p>
        <a
  href="https://bit.ly/aarambh-waitlist"
  className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
  Join the Waitlist on WhatsApp
      </a>
        <p className="text-sm text-gray-500 mt-4">No spam, only love. ❤️</p>
      </div>
    </main>
  );
}

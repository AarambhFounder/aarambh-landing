import "./globals.css";

export const metadata = {
  title: "Aarambh — Your Parenting Copilot",
  description: "Get daily parenting tips, toy/book ideas & more via WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

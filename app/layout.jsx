import "./globals.css";

export const metadata = {
  title: "Aarambh — Your Parenting Copilot",
  description: "Daily nudges, toy tips, and personalized support for first-time parents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

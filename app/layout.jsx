import "./global.css";

export const metadata = {
  title: "Aarambh — Your Parenting Copilot",
  description: "AI-powered parenting tips, toy suggestions, and daily nudges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

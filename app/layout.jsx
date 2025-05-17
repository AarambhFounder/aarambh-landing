import "./globals.css";

export const metadata = {
  title: "Aarambh",
  description: "Parenting support for first-time parents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

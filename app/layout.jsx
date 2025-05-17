export const metadata = {
  title: 'Aarambh – Your Parenting Copilot',
  description: 'AI-powered parenting assistant for toddlers in India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

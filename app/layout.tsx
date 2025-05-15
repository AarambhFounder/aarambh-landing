import './styles/globals.css';

export const metadata = {
  title: 'Aarambh - Your Parenting Copilot',
  description: 'AI-powered parenting assistant for toddlers in India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

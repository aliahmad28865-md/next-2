import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Premium Next.js Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
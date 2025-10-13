import "./globals.css";

export const metadata = {
  title: "Hospital Management System",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

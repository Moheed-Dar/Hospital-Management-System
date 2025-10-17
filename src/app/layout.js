import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
 // ✅ import your Navbar component

export const metadata = {
  title: "Hospital Management System",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {/* ✅ Navbar will appear on all pages */}
        <Navbar />

        {/* ✅ Add padding so content doesn’t hide behind fixed Navbar */}
        <main className="pt-16">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

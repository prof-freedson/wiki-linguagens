import Header from "./components/Header";
import Footer from "./components/Footer";
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main className="container mx-auto p-4 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

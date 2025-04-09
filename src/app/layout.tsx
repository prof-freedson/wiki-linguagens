import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

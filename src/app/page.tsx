import Image from "next/image";
import Hero from "./components/Hero";
import LanguageList from "./components/LanguageList";

export default function Home() {
  const languages = [
    { name: "dart", route: "pages/dart" },
    { name: "ruby", route: "pages/dart/ruby" },
    // Adicione mais linguagens aqui no futuro
    // Adicione mais linguagens aqui no futuro
    // Adicione mais linguagens aqui no futuro
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <main className="container mx-auto p-6">
        <LanguageList languages={languages} />
      </main>
    </div>
  );
}

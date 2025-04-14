import Image from "next/image";
import Hero from "./components/Hero";
import LanguageList from "./components/LanguageList";

export default function Home() {
  const languages = [

    { name: "Dart", route: "pages/dart" },
    { name: "Phyton", route: "pages/phyton" },
    { name: "Swift", route: "pages/swift" },
    { name: "Assembly", route: "pages/assembly"},
    { name: "TypeScript", route: "pages/typescript"},
    { name: "PHP", route: "pages/php" },
    { name: "SQL", route: "pages/sql" },
    { name: "Ruby", route: "pages/ruby" },
    { name: "Kotlin", route: "pages/kotlin" },
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

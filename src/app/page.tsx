import { languages } from "@/languages";
import LanguageList from "./components/LanguageList";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <LanguageList languages={languages} />
    </main>
  );
}

import React from "react";
import Link from "next/link";

interface Language {
  name: string;
  route: string;
}

interface LanguageListProps {
  languages: Language[];
}

const LanguageList: React.FC<LanguageListProps> = ({ languages }) => {
  return (
    <section className="p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Linguagens de Programação
      </h2>
      <ul className="list-disc list-inside text-blue-600 space-y-2">
        {languages?.map((language) => (
          <li key={language.name}>
            <Link href={language.route}>
              {language.name}
            </Link>
          </li>
        )) || <p className="text-gray-500">Nenhuma linguagem disponível.</p>}
      </ul>
    </section>
  );
};

export default LanguageList;

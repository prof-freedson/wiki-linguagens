import React from "react";
import Link from "next/link";

interface Language {
  name: string;
  route: string;
  image: string
}

interface LanguageListProps {
  languages: Language[];
}

const LanguageList: React.FC<LanguageListProps> = ({ languages }) => {
  return (
    <section className="p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 max-[481px]:text-center">
        Linguagens de Programação
      </h2>
      <ul className="mx-auto grid grid-cols-4 min-[500px]:max-[640px]:grid-cols-3 max-sm:grid-cols-2 list-none list-inside text-blue-600 place-items-center gap-8">
        {languages?.map((language) => (
          <li key={language.name} className="flex flex-col items-center justify-center w-[100px] gap-6 p-4 rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.1)] text-center">
              <div className="w-10 h-10 flex items-center justify-center">
                <img className="w-full h-full object-contain" src={language.image} alt="" />
              </div>
              <Link className="text-[15px] text-black" href={language.route}>
                {language.name}
              </Link>
          </li>
        )) || <p className="text-gray-500">Nenhuma linguagem disponível.</p>}
      </ul>
    </section>
  );
};

export default LanguageList;

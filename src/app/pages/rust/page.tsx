import { languages } from "@/languages";
import React from "react";

const RustPage: React.FC = () => {
  const rust = languages.find((lang) => lang.name === "Rust");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center object-cover">
        <img className="w-28 h-28 object-contain" src={rust?.image} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Rust
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
          A linguagem Rust tem sua origem no início dos anos 2000, quando um programador da Mozilla, Graydon Hoare,
          começou a trabalhar em um novo projeto. Hoare estava insatisfeito com as limitações e as complexidades de outras
          linguagens de programação existentes, como C++ e Haskell, e decidiu criar uma linguagem que resolvesse essas
          questões. Estava dado o primeiro passo para uma linguagem poderosa, concorrente e moderna.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li> performance e produtividade em uma linguagem moderna.</li>
          <li>
            Seu ecossistema robusto e comunidade
            engajada tornam o aprendizado mais acessível para quem já possui alguma experiência em programação.
          </li>
          <li>
            Segurança de memória sem garbage collector
          </li>
          <li>Ecossistema moderno e ferramentas poderosas</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            falta de ecossistema e toda a bagagem de código legado existente para C/C++
          </li>
          <li> Curva de aprendizado íngreme</li>
          <li> Falta de reflexão em tempo de execução</li>
        </ul>
      </section>
    </div>
  );
};

export default RustPage;
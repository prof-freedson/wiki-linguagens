import { languages } from "@/languages";
import React from "react";

const JavaScriptPage: React.FC = () => {
  const javascript = languages.find((lang) => lang.name === "JavaScript");
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center object-cover">
        <img className="w-28 h-28 object-contain" src={javascript?.image} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        JavaScript
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
          JavaScript é uma linguagem de programação criada pela Google em 2011. Ela
          foi projetada para ser uma linguagem moderna, eficiente e fácil de
          usar, com foco no desenvolvimento de aplicações web, móveis e de
          desktop. Dart ganhou popularidade principalmente por ser a base do
          framework Flutter, usado para criar interfaces de usuário nativas.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Desempenho rápido devido à compilação nativa.</li>
          <li>
            Fácil de aprender para desenvolvedores familiarizados com linguagens
            como JavaScript ou Java.
          </li>
          <li>
            Integração perfeita com o Flutter para desenvolvimento de interfaces
            de usuário.
          </li>
          <li>Suporte a tipagem opcional e forte.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Menor comunidade em comparação com outras linguagens populares.
          </li>
          <li>Menor número de bibliotecas e ferramentas disponíveis.</li>
          <li>Dependência do Flutter para maior adoção.</li>
        </ul>
      </section>
    </div>
  );
};

export default JavaScriptPage;

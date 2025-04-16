import { languages } from "@/languages";
import React from "react";

const CsharpPage: React.FC = () => {
      const csharp = languages.find((lang) => lang.name === "C#");
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center object-cover">
                <img className="w-28 h-28 object-contain" src={csharp?.image} alt="" />
            </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        C#
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
        A linguagem C# foi criada junto com a arquitetura . NET. Tendo seu desenvolvimento iniciado em meados de 1999, onde, a convite da Microsoft, Anders Hejlsberg montou uma equipe para desenvolver uma nova linguagem de programação. A princípio, essa nova linguagem tinha recebido o nome de Cool..
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Desempenho rápido devido à compilação nativa.</li>
          <li>
          É fácil de aprender, então até mesmo novos desenvolvedores podem se familiarizar com C# rapidamente
          </li>
          <li>
          É altamente escalável, o que facilita a manutenção e a depuração
          </li>
          <li>Oferece recursos para ajudar a proteger seu código contra erros e vulnerabilidades</li>
          <li></li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          O código precisa ser compilado antes de ser executado, o que pode atrasar o desenvolvimento. 
          </li>
          <li>O C# não é tão eficiente quanto linguagens de nível inferior, como C ou C++. </li>
          <li>Não é possível executar funcionalidades de baixo nível, como interagir diretamente com hardware ou firmware. </li>
        </ul>
      </section>
    </div>
  );
};

export default CsharpPage;
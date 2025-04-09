import React from "react";

const RubyPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Ruby
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
        Ruby é uma linguagem de programação altamente flexível. Os desenvolvedores que codificam no Ruby podem fazer alterações na maneira como a própria linguagem funciona. É uma linguagem interpretada como Python, em vez de uma compilada como C ou C++.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">

         <li>A linguagem Ruby tem várias vantagens, como ser intuitiva, produtiva, flexível e escalável.</li>

          <li>
          A sintaxe do Ruby é intuitiva e concisa, o que permite aos desenvolvedores escrever menos código. 
          </li>
          <li>
          É compatível com as mais diversas plataformas: Linux, Unix, DOS, Windows e MacOS.
          </li>

          <li>É fácil escrever um código limpo mesmo para aplicações massivas.</li>

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

export default RubyPage;

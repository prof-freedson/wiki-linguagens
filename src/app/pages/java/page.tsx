import React from "react";

const JavaPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Java
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
          A história da linguagem de programação Java começou em junho de 1991 na Sun Microsystems. Uma pequena equipe de engenheiros, conhecida como o "Green Team" (Time Verde) e liderada por James Gosling, iniciou um projeto com o objetivo de desenvolver uma linguagem para dispositivos eletrônicos de consumo..
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

export default JavaPage;

import React from "react";

const JavaScriptPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
<div className="flex items-center justify-center">
  <img src="data:image/jpeg;base64,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" alt="" />
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

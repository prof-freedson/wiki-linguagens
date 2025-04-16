import { languages } from "@/languages";
import React from "react";

const PythonPage: React.FC = () => {
  const python = languages.find((lang) => lang.name === "Python");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center object-cover">
        <img className="w-28 h-28 object-contain" src={python?.image} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Python
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
          O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes. O software Python pode ser baixado gratuitamente, integra-se bem a todos os tipos de sistema e agiliza o desenvolvimento.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Os desenvolvedores podem ler e entender facilmente um programa Python, porque tem uma sintaxe básica semelhante à do inglês. </li>
          <li>
            O Python aumenta a produtividade dos desenvolvedores, porque eles podem escrever um programa Python usando menos linhas de código em comparação a muitas outras linguagens
          </li>
          <li>
            O Python tem uma grande biblioteca-padrão que contém códigos reutilizáveis para quase todas as tarefas. Como resultado, os desenvolvedores não precisam escrever códigos do zero.
          </li>
          <li>Os desenvolvedores podem usar o Python facilmente com outras linguagens de programação populares, como Java, C e C++.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Alto consumo de memória.
          </li>
          <li>Fraco em computação móvel
          </li>
          <li>Fraco em computação móvel
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PythonPage;

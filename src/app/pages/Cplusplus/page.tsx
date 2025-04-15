import React from "react";

const CplusplusPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" className="h-20" alt=""/>
      </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        C++ oi
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
        O C++ tem suas raízes na linguagem C, que foi desenvolvida no início dos anos 1970 por Dennis Ritchie. Bjarne Stroustrup, um estudante de doutorado da época, viu a oportunidade de melhorar a linguagem C ao adicionar recursos de programação orientada a objetos. Assim, em 1983, Stroustrup lançou a primeira versão do C++.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Desempenho:C++ é uma linguagem compilada que fornece controle de baixo nível sobre recursos de hardware.</li>
          <li>
          Flexibilidade: C++ oferece um alto grau de flexibilidade em termos de construções e recursos da linguagem.
          </li>
          <li>
          Portabilidade: C++ é uma linguagem amplamente utilizada e suportada pela maioria dos sistemas operacionais e plataformas.
          </li>
          <li>Grande Comunidade: C++ possui uma grande comunidade de desenvolvedores que estão constantemente desenvolvendo novas bibliotecas e frameworks para ajudar a tornar a programação em C++ mais fácil e eficiente.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          Complexidade: A linguagem CPP é complexa e pode ser difícil de aprender e usar com eficácia.
          </li>
          <li>Gerenciamento de Memória: A linguagem CPP não possui gerenciamento automático de memória como outras linguagens de alto nível. </li>
          <li>Legibilidade do Código: O código da linguagem CPP pode ser difícil de ler e entender.</li>
        </ul>
      </section>
    </div>
  );
};

export default CplusplusPage;

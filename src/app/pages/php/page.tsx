import React from "react";

const PhpPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex items-center justify-center">
        <img src="https://www.pngarts.com/files/6/PHP-Logo-Transparent-Image.png" className=" h-40 " alt="" />
        </div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        php
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
        O PHP como é conhecido hoje, é na verdade o sucessor para um produto chamado PHP/FI. Criado em 1994 por Rasmus Lerdof, a primeira encarnação do PHP foi um simples conjunto de binários Common Gateway Interface (CGI) escrito em linguagem de programação C
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Utiliza uma sintaxe simples e intuitiva, e é baseada em elementos de outras linguagens</li>
          <li>
          Funciona em diversas plataformas, incluindo Windows, Linux e macOS, e é compatível com vários bancos de dados
          </li>
          <li>
            Integração perfeita com o Flutter para desenvolvimento de interfaces
            de usuário.
          </li>
          <li>Os desenvolvedores podem usar e modificar o PHP livremente, sem restrições de licença ou pagamento de taxas</li>
          <li>Há muitos desenvolvedores ativos que criam e mantêm bibliotecas de código, frameworks e ferramentas</li>
          <li>Remove todos os caracteres desnecessários do código, sem alterar sua funcionalidade</li>
          <li>É a linguagem central do WordPress, e é fácil de usar para modificar plugins e temas</li>
          <li>Pode ser usado para criar sistemas complexos de grandes corporações, bem como pequenos sites</li>
          <li>Foca na segurança</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          O comportamento central do PHP não pode ser alterado pelos desenvolvedores, o que pode limitar a criatividade
          </li>
          <li>Não há padronização entre as versões do PHP, e nem todos os comandos funcionam da mesma forma</li>
          <li>O PHP é uma linguagem de código aberto, o que torna o código mais vulnerável a ataques de injeção de XSS e SQL</li>
        </ul>
      </section>
    </div>
  );
};

export default PhpPage;

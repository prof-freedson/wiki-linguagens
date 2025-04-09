import React from "react";

const KotlinPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Kotlin
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700 text-justify">
        É uma linguagem de programação moderna e estática que foi criada pela JetBrains, a mesma empresa responsável por ferramentas de desenvolvimento populares como o IntelliJ IDEA. O desenvolvimento da linguagem começou em 2010, com o objetivo de ser uma alternativa mais concisa, segura e interoperável ao Java, especialmente para o desenvolvimento em plataformas como a JVM (Java Virtual Machine).
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Conciso: Kotlin permite escrever códigos mais curtos e expressivos do que Java, o que pode reduzir o tempo de desenvolvimento e facilitar a leitura e manutenção do código.</li>
          <li>
          É 100% interoperável com Java, ou seja, você pode usar bibliotecas e frameworks Java no seu código Kotlin sem problemas.
          </li>
          <li>
          Sintaxe moderna e expressiva: A linguagem tem uma sintaxe mais moderna, com recursos como expressões lambda, 
          funções de alta ordem, data classes, etc. Esses recursos tornam o desenvolvimento mais produtivo e menos propenso a erros.
          </li>
          <li>Suporte para programação funcional: Kotlin suporta paradigmas de programação funcional, o que significa que você pode usar imutabilidade, funções puras, entre outros conceitos da programação funcional, de maneira simples.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          Compilação mais lenta em comparação ao Java: A compilação de código Kotlin pode ser um pouco mais lenta do que a de Java, 
          especialmente em projetos grandes, o que pode impactar a produtividade do desenvolvedor em projetos de grande escala.
          </li>
          <li>Menor base de código e ecossistema: Embora Kotlin esteja crescendo rapidamente, o ecossistema de ferramentas, 
            bibliotecas e frameworks não é tão vasto quanto o de Java.</li>
          <li>Possível aumento de dependências externas: Ao usar Kotlin em projetos que exigem bibliotecas específicas ou funcionalidades avançadas, pode ser necessário adicionar dependências externas, o que pode aumentar o tamanho do aplicativo e adicionar complexidade ao gerenciamento de pacotes.</li>
        </ul>
      </section>
    </div>
  );
};

export default KotlinPage;
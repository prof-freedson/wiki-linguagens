import React from "react";

const TypeScriptPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <img src="https://careers.miidas.co.jp/assets/img/tech/img_logo_ts.png"
      className="mx-auto mb-6"
      alt="Logo Linguagem TypeScript" />
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        TypeScript
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
          TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft.
          É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
          Fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo 
          que o TypeScript valide se seu código está funcionando corretamente.
          Como TypeScript é um superconjunto de JavaScript, os programas JavaScript existentes também
          são programas TypeScript válidos.
          O TypeScript foi divulgado pela primeira vez em outubro de 2012 na versão 0.8, 
          após dois anos de desenvolvimento interno na Microsoft.
          Logo após o anúncio, Miguel de Icaza elogiou a linguagem em si, mas criticou a falta de suporte 
          maduro a IDE da Microsoft, Visual Studio, que não estava disponível no Linux e no OS X naquela época.
          Em abril de 2021 há suporte em outras IDEs e editores de texto, incluindo Emacs, Vim, Webstorm, Atom
          e o próprio Visual Studio Code da Microsoft.
          TypeScript 0.9, lançado em 2013, adicionou suporte para tipos genéricos generic types.
          TypeScript 1.0 foi lançado na conferência de desenvolvedores Build da Microsoft em 2014. 
          O Update 2 do Visual Studio 2013 passa a fornecer suporte integrado para TypeScript.
          Em julho de 2014, a equipe de desenvolvimento anunciou um novo compilador TypeScript, 
          alegando ganhos de desempenho de 5 vezes. Simultaneamente, o código-fonte, que estava 
          inicialmente hospedado no CodePlex, foi movido para o GitHub.
          Em 22 de setembro de 2016, o TypeScript 2.0 foi lançado; ele introduziu vários recursos,
          incluindo a capacidade de os programadores opcionalmente impedirem que variáveis 
          recebam valores nulos,às vezes referido como o erro de bilhões de dólares.
          TypeScript 3.0 foi lançado em 30 de julho de 2018, trazendo muitas adições à linguagem como 
          expressões de spread, parâmetros rest com tipos de tupla, parâmetros rest genéricos e assim por diante.
          TypeScript 4.0 foi lançado em 20 de agosto de 2020. Embora esta versão não tenha introduzido
          nenhuma alteração significativa, ele adicionou recursos de linguagem, como Custom JSX Factories
          e Variadic Tuple Types

        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Adicionar recursos importantes e úteis para a construção de projetos em larga escala,
             como tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir
             e corrigir erros em tempo real durante o desenvolvimento.</li>
          <li>
          Ter feedback mais rápido de erros, processo de refatoração mais fácil, autocomplete da linguagem e 
          poder adotar gradualmente typescript em uma base de código.
          </li>
          <li>
          Funcionar como um superconjunto do JavaScript, que pode ser implementado ao JavaScript e
          utiliza conceitos de tipos e interfaces.
          </li>
          <li>Apresentar erros no momento da organização, sustentar especificamente a composição estática 
          e executar em qualquer programa ou motor JavaScript..</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          O TypeScript precisa ser compilado para JavaScript antes de poder ser executado no navegador. 
          Esta etapa adicional pode introduzir atrasos no fluxo de trabalho de desenvolvimento, 
          especialmente em projetos grandes onde a compilação pode demorar mais
          </li>
          <li>Em alguns casos, a exigência do TypeScript de anotar tipos pode parecer verbosa e adicionar 
          sobrecarga visual ao código, especialmente em situações onde os tipos poderiam ser 
          facilmente inferidos ou não fornecerem clareza adicional.</li>
          <li> Ao adotar o TypeScript, os projetos se tornam dependentes dessa ferramenta. Isso significa que qualquer
          descontinuação, mudança significativaou problema de manutenção no TypeScript
          pode afetar o desenvolvimento do projeto.</li>
        </ul>
      </section>
    </div>
  );
};

export default TypeScriptPage;

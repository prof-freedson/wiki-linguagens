import { languages } from "@/languages";
import React from "react";

const SwiftPage: React.FC = () => {
  const swift = languages.find((lang) => lang.name === "Swift");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-center object-cover">
        <img className="w-28 h-28 object-contain" src={swift?.image} alt="" />
      </div>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700 text-justify">
          Antecedentes e Desenvolvimento Inicial (2010-2014):

          Antes da Swift, a Apple utilizava o Objective-C para o desenvolvimento de suas plataformas. Embora poderosa e amplamente utilizada, a sintaxe do Objective-C era considerada complexa e antiquada.

          Em 2010, a Apple começou a trabalhar em uma nova linguagem de programação interna para substituir o Objective-C, com o objetivo de modernizar a experiência de desenvolvimento.

          O projeto foi inicialmente mantido em segredo, e a Apple passou vários anos testando e refinando a linguagem internamente.

          Lançamento (2014):

          Em junho de 2014, durante a conferência WWDC (Worldwide Developers Conference), a Apple anunciou oficialmente a linguagem Swift.

          A Swift foi projetada para ser rápida, segura e moderna, oferecendo um desempenho competitivo e uma sintaxe mais limpa do que o Objective-C.

          A Apple também anunciou que a Swift seria de código aberto em 2015, permitindo que desenvolvedores fora do ecossistema Apple contribuíssem e utilizassem a linguagem.

          Evolução e Popularidade (2015-2020):

          2015: Swift 2 foi lançado com melhorias significativas de desempenho, além de mais recursos de segurança e novos frameworks. Durante este período, a Apple manteve um ritmo acelerado de atualizações.

          A adoção da Swift cresceu rapidamente. Empresas começaram a migrar de Objective-C para Swift, e muitos desenvolvedores independentes também começaram a usar a nova linguagem para criar aplicativos.

          A partir de 2015, a Swift foi oficialmente código aberto. Isso permitiu que a comunidade contribuísse para o desenvolvimento da linguagem, e em 2016 a Apple lançou o projeto Swift no GitHub.

          Durante esse período, o Swift foi aprimorado com novas versões que continuaram a melhorar a performance, a interoperabilidade com o Objective-C, a simplificação da sintaxe e a adição de novos recursos.

          Crescimento da Comunidade e Adoção em Outros Contextos (2021-presente):

          A linguagem passou a ser usada em áreas além do desenvolvimento de aplicativos da Apple, incluindo o desenvolvimento de servidores, inteligência artificial e mais, graças ao seu desempenho e versatilidade.

          Em 2021, a Apple continuou a aprimorar o Swift com a introdução de novas melhorias, como a conformidade com o protocolo de concorrência e o suporte para código assíncrono.

          Muitos desenvolvedores e grandes empresas agora consideram Swift a principal linguagem para o desenvolvimento de software dentro do ecossistema Apple.

          Principais Características da Swift:

          Segurança: A linguagem oferece várias funcionalidades de segurança, como a verificação de nulidade (nil), o que ajuda a evitar muitos erros comuns de programação.

          Sintaxe Moderna: A sintaxe do Swift é mais concisa e legível, com menos complexidade em relação ao Objective-C.

          Performance: Swift é otimizada para desempenho, sendo projetada para ser mais rápida do que outras linguagens, incluindo o Objective-C.

          Interoperabilidade: A Swift é totalmente compatível com código Objective-C, o que facilita a transição de projetos existentes para a nova linguagem.

          Códigos Abertos: Como mencionado, desde 2015 a Swift é de código aberto, o que ajudou a aumentar a adoção e contribuições da comunidade global.

          A Swift rapidamente se tornou a linguagem preferida para o desenvolvimento de aplicativos em plataformas Apple, e seu sucesso se mantém forte à medida que a Apple continua a inovar e expandir suas plataformas.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="text-left">Swift possui uma sintaxe mais legível e concisa em comparação com o Objective-C, o que facilita a leitura e escrita de código. </li>
          <li className="text-left">
            Swift é projetada com segurança em mente. Ele tem recursos como opcionais e tipos fortes, que ajudam a evitar erros comuns em tempo de execução, como erro de acesso a valores nulos (null pointer exception).


          </li>
          <li className="text-left">
            Swift é muito rápida, com um desempenho comparável a linguagens como C++. Isso se deve ao uso de otimizações avançadas pelo compilador LLVM.
          </li>
          <li className="text-left">Para iniciantes, a sintaxe mais simples e moderna torna a aprendizagem mais rápida e intuitiva.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="text-left">
            Como Swift está em constante evolução, mudanças entre versões podem causar incompatibilidades. Isso pode ser um problema se você precisar manter ou migrar grandes bases de código antigas, já que a compatibilidade entre versões não é garantida.
          </li>
          <li className="text-left">Embora o Swift tenha ganhado grande adoção, o número de bibliotecas de terceiros ainda não é tão vasto quanto o de Objective-C, que tem sido utilizado por mais tempo e tem uma comunidade maior de desenvolvedores.</li>
          <li className="text-justify">Como o Swift é uma linguagem jovem, ela continua sendo atualizada com frequência. Isso pode causar problemas de compatibilidade e exigência de atualizações constantes de projetos existentes para se alinhar às novas versões.</li>
        </ul>
      </section>
    </div>
  );
};

export default SwiftPage;
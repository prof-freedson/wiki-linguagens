import React from "react";

const RustPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <img src="https://www.lambda3.com.br/wp-content/uploads//2017/09/rust-logo-plus-word.png" width={200} height={200}
      className="mx-auto mb-6" alt="Logo Linguagem Rust" />
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Rust
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
        <p className="text-gray-700">
        A linguagem Rust tem sua origem no início dos anos 2000, quando um programador da Mozilla, Graydon Hoare, 
        começou a trabalhar em um novo projeto. Hoare estava insatisfeito com as limitações e as complexidades de outras 
        linguagens de programação existentes, como C++ e Haskell, e decidiu criar uma linguagem que resolvesse essas 
        questões. Estava dado o primeiro passo para uma linguagem poderosa, concorrente e moderna.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li> performance e produtividade em uma linguagem moderna.</li>
          <li>
          Seu ecossistema robusto e comunidade 
          engajada tornam o aprendizado mais acessível para quem já possui alguma experiência em programação.
          </li>
          <li>
          Segurança de memória sem garbage collector
          </li>
          <li>Ecossistema moderno e ferramentas poderosas</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Desvantagens
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
          falta de ecossistema e toda a bagagem de código legado existente para C/C++
          </li>
          <li> Curva de aprendizado íngreme</li>
          <li> Falta de reflexão em tempo de execução</li>
        </ul>
      </section>
    </div>
  );
};

export default RustPage;
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Bem-vindo ao Wiki Linguagens
      </h1>
      <p className="text-lg font-light">
        Explore informações sobre diversas linguagens de programação, suas
        histórias, vantagens e desvantagens.
      </p>
    </section>
  );
};

export default Hero;

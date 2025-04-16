import React from "react";
import { languages } from "@/languages";

const AssemblyPage: React.FC = () => {
    const assembly = languages.find((lang) => lang.name === "Assembly");
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex items-center justify-center object-cover">
                <img className="w-28 h-28 object-contain" src={assembly?.image} alt="" />
            </div>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
                Assembly
            </h1>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
                <p className="text-gray-700">
                    O Assembly foi provavelmente a primeira linguagem de programação da história, surgida na década de 50, época em que os computadores ainda usavam válvulas. A idéia do Assembly é usar um comando em substituição a cada instrução de máquina. No Assembly, cada uma destas instruções equivale a uma instrução do processador.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Eficiência: Os programas escritos em Assembly são mais rápidos e consomem menos recursos do que os escritos em linguagens de alto nível.
                    </li>
                    <li>
                        Controle: O Assembly dá total controle sobre os recursos de hardware, como memória, CPU e dispositivos de E/S.
                    </li>
                    <li>
                        Desempenho: O Assembly é ideal para aplicações críticas, onde o desempenho é fundamental, como em sistemas embarcados e em tempo real.
                    </li>
                    <li>Tamanho: Os programas escritos em Assembly podem ser menores. </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Desvantagens
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        Não é portátil: A linguagem Assembly é específica para cada arquitetura e conjunto de instruções de um processador. Por isso, é preciso desenvolver um programa para cada máquina.
                    </li>
                    <li>Consome muito tempo: Programar em Assembly pode ser demorado. </li>
                    <li>Requer muito conhecimento da máquina: O programador precisa conhecer bem a máquina em que está programando. </li>
                </ul>
            </section>
        </div>
    );
};

export default AssemblyPage;

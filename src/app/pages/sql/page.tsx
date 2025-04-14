import React from "react";

const SQLPage: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
                SQL
            </h1>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">História</h2>
                <p className="text-gray-700 text-justify">
                    SQL (Structured Query Language) é uma linguagem de domínio específico, criada para gerenciar dados armazenados em sistemas de
                    gerenciamento de bancos de dados relacionais (RDBMS). Com SQL, é possível inserir, consultar, atualizar e excluir dados, além de criar e
                    modificar estruturas de bancos como tabelas, índices, visões e permissões de acesso.
                    Desenvolvida originalmente na década de 1970 por pesquisadores da IBM, SQL se tornou rapidamente o padrão para comunicação com bancos de dados.
                    Hoje, ela é suportada por praticamente todos os bancos relacionais, como:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mt-2">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Oracle Database</li>
                    <li>SQL Server (Microsoft)</li>
                    <li>SQLite</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vantagens</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Linguagem padrão e universal para bancos relacionais.</li>
                    <li>Fácil de aprender e usar, com sintaxe simples e clara.</li>
                    <li>Altamente compatível com ferramentas de BI e análise de dados.</li>
                    <li>Suportado por diversos SGBDs, com variações adaptáveis.</li>
                    <li>Permite manipulação eficiente de grandes volumes de dados.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Desvantagens
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Não é ideal para bancos de dados não relacionais (NoSQL).</li>
                    <li>Limitações na manipulação de dados não estruturados.</li>
                    <li>Algumas implementações SQL possuem variações sintáticas, o que pode dificultar a portabilidade.</li>
                    <li>Operações muito complexas podem exigir escrita de consultas sofisticadas e de difícil manutenção.</li>
                </ul>
            </section>
        </div>
    );
};

export default SQLPage;

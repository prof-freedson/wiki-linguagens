// src/data/languages.ts

export interface Language {
    name: string;
    route: string;
    image: string;
}

export const languages: Language[] = [
    {
        name: "Dart",
        route: "pages/dart",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    },
    {
        name: "Java",
        route: "pages/java",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
        name: "JavaScript",
        route: "pages/javascript",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        name: "Rust",
        route: "pages/rust",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
    },
    {
        name: "C#",
        route: "pages/csharp",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    },
    {
        name: "Python",
        route: "pages/python",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
        name: "Swift",
        route: "pages/swift",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    },
    {
        name: "Assembly",
        route: "pages/assembly",
        image: "https://user-images.githubusercontent.com/103866722/194773833-8571f323-4fa8-4036-a51c-57b9d29c683b.svg",
    },
    {
        name: "TypeScript",
        route: "pages/typescript",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
        name: "PHP",
        route: "pages/php",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
    {
        name: "SQL",
        route: "pages/sql",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    },
    {
        name: "Ruby",
        route: "pages/ruby",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    },
    {
        name: "Kotlin",
        route: "pages/kotlin",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    },
    {
        name: "C++",
        route: "pages/cplusplus",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
];

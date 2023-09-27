// const { number } = require("yargs");

const { name } = require("ci-info");

// // Exercicio 1 - Temperaturas em graus Celsius

const temperaturesCelsius = [23, 10, 32, 21, 47];

const tempetures = temperaturesCelsius.map((celsius) => (celsius * 9/5) + 32)

console.log(tempetures)


// Implemente a função formatedBookNames que deve retornar um array de strings no formato: Nome do livro - Gênero - Nome da pessoa autora.

const infoBooks = {
  books: [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
  ],
};

const formatedBookNames = () => {
   const map = infoBooks.books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
   return map
}

// Exercício 4
// Implemente a função nameAndAge que deve retornar um array de objetos, cada objeto deve conter:

// A chave author, e o valor deve ser o nome da pessoa autora;
// A chave age, e o valor deve ser a idade da pessoa autora quando lançou o livro.


const nameAndAge = () => {
    return books.map((book) => (
        {
            author: book.author.name,
            age:book.releaseYear - book.author.birthYear
        }
    ))
}

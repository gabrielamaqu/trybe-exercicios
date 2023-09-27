// Exercício 1
// O array de objetos people, contêm elementos que representam pessoas com as propriedades name e age.
//  Utilize o método filter para filtrar as pessoas que têm a idade igual ou superior a 30.


const people = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Pedro', age: 20 },
    { name: 'Ana', age: 35 },
  ];

const result = people.filter((adult) => adult.age >= 30);

console.log(result)

// Exercício 2
// Considere o seguinte array de objetos que representa uma lista de jogadores de basquete:
// Utilizando o método filter e array destructuring, crie uma função filterHighPlayers que retorna um novo array contendo 
// apenas os jogadores com altura igual ou superior a 200 centímetros.



const players = [
    { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
    { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
    { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
    { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
    { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
  ];

  const filterHighPlayers = () => {
    const result = players.filter((player) => player.height >= 200);
    return result
  } 
console.log(filterHighPlayers())
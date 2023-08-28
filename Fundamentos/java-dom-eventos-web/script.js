// 1 *** Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.

const title = document.getElementById('page-title');
title.innerText = 'VIVA! A VIDA É UMA FESTA!'

// 2 *** Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.

const paragraph = document.getElementById('first-paragraph');
paragraph.innerText = 'Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso malandro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel.'

// 3 *** Recupere o subtítulo e altere-o para: Principais informações.
 
const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'Principais informações';

// 4 *** Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.

const paragraphs = document.getElementsByClassName('paragraph-style');
const firstParagraph = paragraphs[0];
firstParagraph.style.fontStyle = 'italic';

// 5 *** Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, 
// Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro

const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerText = 'Data de lançamento: 4 de janeiro de 2018 (Brasil) //  Diretores: Adrian Molina, Lee Unkrich // Autores: Adrian Molina, Lee Unkrich, Matthew Aldrich, Jason Katz'

// 6 *** Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.

const backgroundColor = document.getElementsByTagName('h2');
backgroundColor[0].style.color = 'pink';


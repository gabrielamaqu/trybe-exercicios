//  1 *** Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const son = document.getElementById('corpo');
const son1 = document.createElement('h1');
son1.classList.add('title');
son1.innerText = 'TrybeTrip - Agência de Viagens';
son.appendChild(son1);

// 2 *** Adicione a tag main com a classe main-content como filho da tag body;
const main = document.getElementById('corpo');
const main1 = document.createElement('main');
main1.classList.add('main-content');
main.appendChild(main1);

// 3 *** Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centro = document.getElementsByClassName('main-content');
const centro1 = document.createElement('section');
centro1.classList.add('center-content');
main1.appendChild(centro1);

// 4 *** Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraph = document.getElementsByClassName('center-content');
const paragraph1 = document.createElement('p');
paragraph1.innerText = 'Vá para qualquer lugar do mundo com  a gente!!!';
centro1.appendChild(paragraph1);

// 5 *** Adicione a tag section com a classe left-content como filho da tag main criada no passo 2
const left = document.createElement('section');
left.classList.add('left-content');
main1.appendChild(left);

// 6 *** Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const right = document.createElement('section');
right.classList.add('right-content');
main1.appendChild(right);

// 7 *** Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. 
// Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement ('src');
img.classList.add('small-image');
img.innerHTML = 'https://picsum.photos/200'
left.appendChild(img);

// 8 *** Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. 
// Essa lista deve ser filha do section criado no passo 6;
const lista = document.createElement('ul');
const numbers = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (index = 0; index < numbers.length; index +=1){
    const li = document.createElement('li');
    li.innerText = numbers[index];
    lista.appendChild(li);
}
right.appendChild(lista);

// 9 *** Adicione 3 tags h3, todas filhas do main criado no passo 2.
for ( let index = 0; index < 3; index += 1) {
    const tag = document.createElement('h3');
    tag.classList.add('description')
    main1.appendChild(tag);
};

// ********* BONUS *********
// *** Adicione a classe title na tag h1 criada;     FEITO

// ***Adicione a classe description nas 3 tags h3 criadas;




